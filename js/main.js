$('.start-content-btn').click(function(e){
    let content = $(this).data('content');
    let link = $(this).attr('href');
    localStorage.setItem("contentstart", content);
    e.preventDefault();
    window.location.href = link;
});

// https://usefathom.com/docs/script/script-advanced
//https://codecanyon.net/item/paymoney-secure-online-payment-gateway/22341650

$('.specialty > .query-item').click(function(e){
    let con = $(this).data('content');
    localStorage.setItem('specialty',con);
});
$('.clientsnow > .query-item').click(function(e){
    let con = $(this).data('content');
    localStorage.setItem('clientsnow',con);
});
$('.clientsafter > .query-item').click(function(e){
    let con = $(this).data('content');
    localStorage.setItem('clientsafter',con);
});
    
$('#brandname').focusout(function(){
    
    var bname = $('#brandname').val();
    var bsave = bname.trim();
    localStorage.setItem('brandname',bsave);
});
$('.sell-btn').click(function(){
    let content = $(this).data('content');
    localStorage.setItem("contentsell", content);
});

$('.query-content-btn-board > .query_sel_btn').click(function(e){
    // var border = $(this).css('border-color');
    var arr = [];
    //arr = localStorage.get("industry");
    var ele = $(this).data('content');
    if($(this).hasClass('selected'))
    {   
        $(this).removeClass('selected');
        // if(arr.includes(ele, 0))
        // {
        //     var filtered = arr.filter(function(value, index,arr1){
        //         return value != ele;
        //     });
        //     localStorage.setItem('industry', arr);
        // }
    } else {
        $(this).addClass('selected');
        // if(arr.includes(ele,0))
        //     arr.push(ele);
    }

    // alert(border);
});

$('.usage-time-step__conoptions > .usage-time-step__option').click(function(e){
    var ele = $(this).data('content');
    if($(this).hasClass('selected')){
        $(this).removeClass('selected');
        $(this).blur();
    } else {
        $(this).addClass('selected');
    }
});
$('.query-main-conboard > .query-item').click(function(e){

    var ele = $(this).data('content');
    if($(this).hasClass('selected')){
        $(this).removeClass('selected');
        $(this).blur(); 
    } else {
        $(this).addClass('selected');
    }
});



function sendRegistration() {
    $.ajax({
        type: "POST",
        url: "/send-1.php",
        data: {
          "domen": $('[name=domen]').val(), 
          "email": $('[name=email]').val(),
          "utmSource": localStorage.getItem("utmSource"),
          "utmMedium": localStorage.getItem("utmMedium"),
          "utmCampaign": localStorage.getItem("utmCampaign"),
          "utmContent": localStorage.getItem("utmContent"),
          "utmTerm": localStorage.getItem("utmTerm"),
        }
    }).done(function() {
        localStorage.setItem("email", $('[name=email]').val());
        console.log('succes');
        fathom.trackGoal('BE3Y3VJ3', 0);
        document.location.href = "trial.html";
    });
}

$('.enter-form form').validate({
          rules: {
          //   // fio: {
          //   //   required: true,
          //   // },
          //   // phone: {
          //   //   required: true,
          //   //   minlength: 10
          //   // },
          //   email: {
          //       required: true,
          //       minlength: 5
          //   },
          //   password: {
          //       required: true,
          //       minlength: 5
          //   },
          //   cardNumber: {
          //       required: false,
          //   },
          //   expiryDate: {
          //       required: false,
          //   },
          //   cvv: {
          //       required: false,
          //   }
          // },
          // messages: {
          //   // fio: {
          //   //     required: $('.form__name').data('required'),
          //   //   },
          //   //   phone: {
          //   //     required: $('.form__name').data('required'),
          //   //     minlength: jQuery.validator.format($('.form__name').data('msg')),
          //   //   },
          //     email: {
          //       required: "Please fill in the field",
          //       email: "Please fill in the field",
          //     },
          //     password: {
          //       required: "Please fill in the field",
          //       minlength: 'The field must contain at least 5 characters.',
          //   },
          //   },
            submitHandler: function() {
                $('.signup-form__cta').addClass('loading').addClass('active');
                sendRegistration();
                
                // var valid = $('#payment-stripe').paymentForm('valid');
                // if (valid) {
                //     checkout();
                // }
            }
        });

        function checkout()
  {
      let exp = $('[name=expiryDate]').val().replace(/ /g, "");
      
      $('.signup-form__cta').addClass("signup-form__cta-disable");
    $.ajax({
      method:"POST",
      url: "https://staging.zeely.link/stripe/subscription-session", 
      data:{     
            
          "email": $('[name=email]').val(),
          "name": $('[name=email]').val(),
          "cardNumber":$('[name=cardNumber]').val(),
          "expiryDate": exp,
          "securityCode": $('[name=cvv]').val(),
          "productId":"price_1LdbNoLjt2Wv3Hn8X5oBUz6b"
      },
    success: function(result){
        console.log("result::",result.message)
        if(result.message === "Success"){
            sendEmail();
        } else{
            $('.signup-form__cta').removeClass("signup-form__cta-disable");
            $('.enter-title').hide();
            $('.enter-form-error').fadeIn();
            $('.enter-form-error span').html(result.message);
        }
    },
    error: function(error){
        $('.signup-form__cta').removeClass("signup-form__cta-disable");
        $('.enter-title').hide();
        $('.enter-form-error').fadeIn();
        $('.enter-form-error span').html('error');
    },
  }
  );
  }