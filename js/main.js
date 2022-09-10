$(".goals .onboarding-option, .age .onboarding-option, .reading-time-step .onboarding-option").click(function(){
    
    $("#tableUse").val('yes');
    $(".onboarding-option").removeClass('onboarding-option--active');
    $(this).addClass('onboarding-option--active');
    $("input[data-v-8c6fde1a]").addClass('border-light-grey').addClass('focus:border-green').addClass('hover:border-green').removeClass("border-green");
    $('.cta').removeAttr('disabled');
    $("input[data-v-8c6fde1a]").val('');
});

$("input[data-v-8c6fde1a]").keyup(function(){
    $("#tableUse").val('yes');
    if($("input[data-v-8c6fde1a]").val().length > 0 ) {
        $(".onboarding-option").removeClass('onboarding-option--active');
        $(this).removeClass('border-light-grey').removeClass('focus:border-green').removeClass('hover:border-green').addClass("border-green");
        $('.cta').removeAttr('disabled');
    } else {
        $(this).addClass('border-light-grey').addClass('focus:border-green').addClass('hover:border-green').removeClass("border-green");
        $('.cta').attr('disabled', 'disabled');
    }
});



$('.what-block--first .what-block__more').click(function(){
    $('.what-block--second').show();
    $(this).hide();
});

$('.what-block--second .what-block__more').click(function(){
    $('.what-block--third').show();
    $(this).hide();
});

$(".usage-time-step .onboarding-option").click(function(){
    $("#tableUse").val('yes');
    
    $(this).toggleClass('onboarding-option--active');
    if($('.onboarding-option--active').length == 0) {
        $('.cta').attr('disabled', 'disabled');
    } else {
        $('.cta').removeAttr('disabled');
    }
});


$(".onboarding-topics-step .chip").click(function(){
    $("#tableUse").val('yes');
    $(this).toggleClass('border-white').toggleClass('focus:border-green').toggleClass('hover:border-green').toggleClass("border-green");
    if($('.border-green').length == 0) {
        $('.cta').attr('disabled', 'disabled');
    } else {
        $('.cta').removeAttr('disabled');
    }
});

$(".onboarding-topics-step__toggle-all").click(function(){
    $("#tableUse").val('yes');
    $(".onboarding-topics-step .chip").removeClass('border-white').removeClass('focus:border-green').removeClass('hover:border-green').addClass("border-green");
    $('.cta').removeAttr('disabled');
});

$('.start-content-btn').click(function(e){
    let content = $(this).data('content');
    let link = $(this).attr('href');
    localStorage.setItem("contentStart", content);
    e.preventDefault();
    window.location.href = link;
});

// $(".cta-send").click(function(e){
//     e.preventDefault();
//     let link = $(this).attr('href');

//     let region = $("#tableRegion").val();
//     let url = window.location.href;
//     let name = document.location.href.match(/[^\/]+$/)[0];
//     name= name.replace(/.html/g, "");
//     let value = 1;
//     let use = $("#tableUse").val();
    
//     let content;
//     if($(this).hasClass('start-content-btn')) {
//         content = $(this).children('span').text();
//     } else {
//         if ($(".onboarding-option").length) {
//             if ($(".onboarding-option").length) {
//                 $(".onboarding-option--active").each(function(index) {
//                     let val = $(this).text();
//                     if(index >= 1) {
//                         content += " > " + val;
//                     } else {
//                         content = val;
//                     }
//                 });
//                 if ($(".input-content").length) {
//                     $(".input-content").each(function(index) {
//                         if ($(this).val().length) {
//                             let val = $(this).val();
//                             if(content === undefined) {
//                                 content = val;
//                             } else {
//                                 content += " > " + val;
//                             }
//                         }
//                     });
//                 }
//             } 
//         }
//         else if ($(".chip.border-green").length) {
//             $(".chip.border-green").each(function(index) {

//                     let val
//                     if($(this).children('span').length) {
//                         val = $(this).children('span').text();
//                     } else {
//                         val = $(this).text();
//                     }
//                     if(index >= 1) {
//                         content += " > " + val;
//                     } else {
//                         content = val;
//                     }
//             });
//             if ($(".input-content").length) {
//                 $(".input-content").each(function(index) {
//                     if ($(this).val().length) {
//                         let val = $(this).val();
//                         if(content === undefined) {
//                             content = val;
//                         } else {
//                             content += " > " + val;
//                         }
//                     }
//                 });
//             }
//         }
//         else if ($(".input-content").length) {
//                 $(".input-content").each(function(index) {
//                     let val;
//                     if ($(this).val().length) {
//                         val = $(this).val();
//                     } else {
//                         val = 'no data';
//                     }
//                     if(index >= 1) {
//                         content += " > " + val;
//                     } else {
//                         content = val;
//                     }
//                 });
//         }
       
//         else {
//             content = 'no data';
//         }
//     }
//     $.ajax({
//         type: "POST",
//         url: "/sendTable.php",
//         data: {
//           "region": region, 
//           "url": url,
//           "name": name,
//           "value": value,
//           "use": use,
//           "content": content,
//           "utmSource": localStorage.getItem("utmSource"),
//           "utmCampaign": localStorage.getItem("utmCampaign"),
//         }
//     }).done(function() {
//         window.location.href = link;
//     });


//     console.log(use);
//     console.log(content);
//     // 
// });

$(".input-content").keyup(function(){
    $("#tableUse").val('yes');
});

if ($(".specialty").length){
    if (typeof localStorage.getItem("contentStart") !== 'undefined' && localStorage.getItem("contentStart") !== null) {
        let content = localStorage.getItem("contentStart");
        let title = $("h3.headline").data(content);
        $("h3.headline").text(title);
        $('title').text(title);
    }
}

$('.review__more').click(function() {
    $('.review-item').slideDown(300);
    $('.review__more').hide();
});
if ($(".sell-btn").length) {
    localStorage.setItem("contentSell", 'products');
}
$('.sell-btn').click(function(){
    $("#tableUse").val('yes');
    let content = $(this).data('content');
    $('.sell-btn').removeClass('onboarding-option--active');
    $(this).addClass('onboarding-option--active');
    localStorage.setItem("contentSell", content);
});



if ($(".sell").length){
    if (typeof localStorage.getItem("contentSell") !== 'undefined' && localStorage.getItem("contentSell") !== null) {
        let content = localStorage.getItem("contentSell");
        $("title").text($("h3.headline").data(content));
        $("h3.headline").text($("h3.headline").data(content));
        $("p.b-paragraph").text($("p.b-paragraph").data(content));

        $(".what-block--first input").attr('placeholder', $(".what-block--first input").data(content));
        $(".what-block--first textarea").attr('placeholder', $(".what-block--first textarea").data(content));

        $(".what-block--second p").text($(".what-block--second p").data(content));
        $(".what-block--second input").attr('placeholder', $(".what-block--second input").data(content));
        $(".what-block--second textarea").attr('placeholder', $(".what-block--second textarea").data(content));


        $(".what-block--third p").text($(".what-block--third p").data(content));
        $(".what-block--third input").attr('placeholder', $(".what-block--third input").data(content));
        $(".what-block--third textarea").attr('placeholder', $(".what-block--third textarea").data(content));

    } else {
        // $(".investment-btn").attr('href', 'what.html');
    }
}
if ($(".cost").length){
    if (typeof localStorage.getItem("contentSell") !== 'undefined' && localStorage.getItem("contentSell") !== null) {
        let content = localStorage.getItem("contentSell");
        $("title").text($("h3.headline").data(content));
        $("h3.headline").text($("h3.headline").data(content));
    } else {
        // $(".investment-btn").attr('href', 'what.html');
    }
}



if ($(".price-block").length){
    var rangeSliderBudget = document.getElementById("rs-range-line");
    var rangeBulletBudget = document.getElementById("rs-bullet");
    var rangeSlider = document.getElementById("rs-range-line1");
    var rangeBullet = document.getElementById("rs-bullet1");




    rangeSliderBudget.addEventListener("input", showSliderBudgetValue, false);

    function showSliderBudgetValue() {
    var budget = rangeSliderBudget.value;
    var days = rangeSlider.value;

    var clientsMin = budget * days * 110;
    var clientsMax = budget * days * 290;
    $('.price-block-output--days strong').text(`$${budget} per day for ${days} days`);
    $('.price-block-output--clients strong').text(`${numberWithCommas(clientsMin)} - ${numberWithCommas(clientsMax)}`);
    rangeBulletBudget.innerHTML = rangeSliderBudget.value;
    var bulletPosition = (rangeSliderBudget.value /rangeSliderBudget.max);
    rangeBulletBudget.style.left = (bulletPosition * 85) + "%";
    }




    rangeSlider.addEventListener("input", showSliderValue1, false);

    function showSliderValue1() {
    var budget = rangeSliderBudget.value;
    var days = rangeSlider.value;
    $('.price-block-output--days strong').text(`$${budget} per day for ${days} days`);
    var clientsMin = budget * days * 110;
    var clientsMax = budget * days * 290;
    $('.price-block-output--days strong').text(`$${budget} per day for ${days} days`);
    $('.price-block-output--clients strong').text(`${numberWithCommas(clientsMin)} - ${numberWithCommas(clientsMax)}`);
    rangeBullet.innerHTML = rangeSlider.value;
    var bulletPosition = (rangeSlider.value /rangeSlider.max);
    rangeBullet.style.left = (bulletPosition * 90) + "%";
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
/**
 * paymentForm
 *
 * A plugin that validates a group of payment fields.  See jquery.payment.js
 * Adapted from https://gist.github.com/Air-Craft/1300890
 */
 
// if (!window.L) { window.L = function () { console.log(arguments);} } // optional EZ quick logging for debugging

(function( $ ){
    
    /**
     * The plugin namespace, ie for $('.selector').paymentForm(options)
     * 
     * Also the id for storing the object state via $('.selector').data()  
     */
    var PLUGIN_NS = 'paymentForm';

    var Plugin = function ( target, options )  { 
        this.$T = $(target); 
        this._init( target, options ); 

        /** #### OPTIONS #### */
       this.options= $.extend(
            true,               // deep extend
            {
                DEBUG: false
            },
            options
        );
        
        this._cardIcons = {
            "visa"          : "fa fa-cc-visa",
            "mastercard"    : "fa fa-cc-mastercard",
            "amex"          : "fa fa-cc-amex",
            "dinersclub"    : "fa fa-cc-diners-club",
            "discover"      : "fa fa-cc-discover",
            "jcb"           : "fa fa-cc-jcb",
            "default"       : "fa fa-credit-card-alt"
        };
        
        return this; 
    }

    /** #### INITIALISER #### */
    Plugin.prototype._init = function ( target, options ) { 
        var base = this;
        
        base.number = this.$T.find("[data-payment='cc-number']");
        base.exp = this.$T.find("[data-payment='cc-exp']");
        base.cvc = this.$T.find("[data-payment='cc-cvc']");
        base.brand = this.$T.find("[data-payment='cc-brand']");
        
        // Set up all payment fields inside the payment form
        base.number.payment('formatCardNumber').data('payment-error-message', 'Please enter a valid credit card number.');
        base.exp.payment('formatCardExpiry').data('payment-error-message', 'Please enter a valid expiration date.');
        base.cvc.payment('formatCardCVC').data('payment-error-message', 'Please enter a valid CVC.');
        
        // Update card type on input
        base.number.on('input', function() {
            base.cardType = $.payment.cardType(base.number.val());
            var fg = base.number.closest('.form-group');
            fg.toggleClass('has-feedback', true);
            fg.find('.form-control-feedback').remove();
            fg.children('.form-group-number').prepend("<i class='fa fa-credit-card-alt fa-lg payment-form-icon form-control-feedback'></i>");
            if (base.cardType) {
                base.brand.text(base.cardType);
                // Also set an icon
                var icon = base._cardIcons[base.cardType] ? base._cardIcons[base.cardType] : base._cardIcons["default"];
                fg.find('.form-control-feedback').remove();
                fg.children('.form-group-number').prepend("<i class='" + icon + " fa-lg payment-form-icon form-control-feedback'></i>");
            } 
        });
        
        // Validate card number on change
        base.number.on('change', function () {
            base._setValidationState($(this), !$.payment.validateCardNumber($(this).val()));
        });

        // // Validate card expiry on change
        // base.exp.on('change', function () {
        //     base._setValidationState($(this), !$.payment.validateCardExpiry($(this).payment('cardExpiryVal')));
        // });
        
        // Validate card cvc on change
        base.cvc.on('change', function () {
            base._setValidationState($(this), !$.payment.validateCardCVC($(this).val(), base.cardType));
        });   
    };

    /** #### PUBLIC API (see notes) #### */
    Plugin.prototype.valid = function () {
        var base = this;
        
        var num_valid = $.payment.validateCardNumber(base.number.val());
        var exp_valid = $.payment.validateCardExpiry(base.exp.payment('cardExpiryVal'));
        var cvc_valid = $.payment.validateCardCVC(base.cvc.val(), base.cardType);
        
        base._setValidationState(base.number, !num_valid);
        base._setValidationState(base.exp, !exp_valid);
        base._setValidationState(base.cvc, !cvc_valid);
        
        return num_valid && exp_valid && cvc_valid;
    }
 
    /** #### PRIVATE METHODS #### */
    Plugin.prototype._setValidationState = function(el, erred) {
        var fg = el.closest('.form-group');
        fg.toggleClass('has-error', erred).toggleClass('has-success', !erred);

        $('.payment-error-message').hide();
        $('.enter-card-input').removeClass('error');
        if (erred) {
            $('.enter-card-input').addClass('error');
            $('.payment-error-message').css('display', 'flex');
            $('.payment-error-message span').html(el.data('payment-error-message'));
            // fg.append("<span class='text-danger payment-error-message'>" + el.data('payment-error-message') + "</span>");
        }
        return this;
    }  
    
    /**
     * EZ Logging/Warning (technically private but saving an '_' is worth it imo)
     */    
    Plugin.prototype.DLOG = function () 
    {
        if (!this.DEBUG) return;
        for (var i in arguments) {
            console.log( PLUGIN_NS + ': ', arguments[i] );    
        }
    }
    Plugin.prototype.DWARN = function () 
    {
        this.DEBUG && console.warn( arguments );    
    }


/*###################################################################################
 * JQUERY HOOK
 ###################################################################################*/

    /**
     * Generic jQuery plugin instantiation method call logic 
     * 
     * Method options are stored via jQuery's data() method in the relevant element(s)
     * Notice, myActionMethod mustn't start with an underscore (_) as this is used to
     * indicate private methods on the PLUGIN class.   
     */    
    $.fn[ PLUGIN_NS ] = function( methodOrOptions ) {
        if (!$(this).length) {
            return $(this);
        }
        var instance = $(this).data(PLUGIN_NS);
            
        // CASE: action method (public method on PLUGIN class)        
        if ( instance 
                && methodOrOptions.indexOf('_') != 0 
                && instance[ methodOrOptions ] 
                && typeof( instance[ methodOrOptions ] ) == 'function' ) {
            
            return instance[ methodOrOptions ]( Array.prototype.slice.call( arguments, 1 ) ); 
                
                
        // CASE: argument is options object or empty = initialise            
        } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {

            instance = new Plugin( $(this), methodOrOptions );    // ok to overwrite if this is a re-init
            $(this).data( PLUGIN_NS, instance );
            return $(this);
        
        // CASE: method called before init
        } else if ( !instance ) {
            $.error( 'Plugin must be initialised before using method: ' + methodOrOptions );
        
        // CASE: invalid method
        } else if ( methodOrOptions.indexOf('_') == 0 ) {
            $.error( 'Method ' +  methodOrOptions + ' is private!' );
        } else {
            $.error( 'Method ' +  methodOrOptions + ' does not exist.' );
        }
    };
})(jQuery);

/* Initialize validation */
var payment_form = $('#payment-stripe').paymentForm();

$('#validate').on('click', function(){
  var valid = $('#payment-stripe').paymentForm('valid');
  if (valid)
    alert('CC info is good!');
  else
    alert('Badman Cardfaker');
});

$('.enter-card-input  input').focus(function() {  
    $('.enter-card-input').addClass("focus");
 });

 $('.enter-card-input  input').blur(function() {  
     $('.enter-card-input').removeClass("focus");  
 }); 


 $('.form-group-number').click(function(){
    $('#cc-number').show();
    $('#cc-number').focus();
    $('.fake-inputNumber').hide();

    $('.form-group:nth-child(2)').fadeIn();
    $('.form-group:nth-child(3)').fadeOut();
 });
 $('#cc-exp').focus(function(){
    let fakeInput = $('#cc-number').val();
    $('.form-group:nth-child(3)').fadeIn();
    $('#cc-number').hide();
    $('.fake-inputNumber').text(fakeInput.slice(-4));
    $('.fake-inputNumber').show();
    // if($(window).width() > 767) {
    //     $('#cc-number').css('width','43px');
    //  } else {
    //     $('#cc-number').css('width','37px');
    //  }
 });

 $('#cc-exp').keyup(function(){
    if($(this).val().length == 7) {
        $('#cc-cvc').focus();
    }
 });

$('.enter-form input[name="email"]').focus(function(){
    $('.enter').addClass('blur');
});

// $('.enter-form input[name="email"]').focus(function(){
//     // $('.signup-form__input--password').fadeIn();
// });

// $('.enter-form input[name="password"]').focus(function(){
//     if($('.enter-form input[name="email"]').hasClass('error') || $('.enter-form input[name="email"]').val().length == 0) {
//         $('.enter-form input[name="email"]').addClass('error').focus();
//     } else {
//         $('.enter-card').fadeIn();
//         sendRegistration();
//     }
// });

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



//timer
var timeInSecs;
var ticker;

function startTimer(secs) {
timeInSecs = parseInt(secs);
ticker = setInterval("tick()", 1000); 
}

function tick( ) {
var secs = timeInSecs;
if (secs > 0) {
timeInSecs--; 
}

if (secs == 120) {
    $('.enter-timer').addClass("yellow");
}
if (secs == 60) {
    $('.enter-timer').removeClass("yellow").addClass("red");
}
var mins = Math.floor(secs/60);
secs %= 60;
var pretty = ( (mins < 10) ? "0" : "" ) + mins + ":" + ( (secs < 10) ? "0" : "" ) + secs;

document.getElementById("countdown").innerHTML = pretty;
}

startTimer(5*60); 




//Добавление click_id куки
const urlParams = new URLSearchParams(window.location.search),
	  clickId = urlParams.get('clickid');

if (null !== clickId && undefined === getCookie(name)) {
	createCookie('c_id', clickId, 365);
}


let count = 1;                 

function progressBar() {        
  setTimeout(function() {   
    $('.progress-bar-step__progress-bar-percentage').text(count+'%');
    $('.circle-progress-bar__progress').css("stroke-dasharray", 477*count/100 + " 483.80526865282815"); 
    count++;                    
    if (count < 101) {          
    progressBar();            
    } else {
        fathom.trackGoal('ZHWHJRBY', 0);
        window.location.href = 'gift.html';
    }
  }, 50);
}



let child = 1;

function progressBarStep() {        
    setTimeout(function() {   
        $('.progress-bar-step__step:nth-child('+ child +')').addClass('progress-bar-step__step--active');
       
        child++;
        if (child < 6) {          
            progressBarStep();            
        }
    }, 1000);
}

if ($(".progress-bar-step").length){
    progressBar(); 
    progressBarStep();
}

$('.book-list__show').click(function(e) {
    e.preventDefault();
    $('.mb-4[data-v-4c7b585e]').slideDown('100');
    $('.book-list__show').hide().removeClass('flex');
    $('.book-list__sign').show();
    
});

$('.user-reviews__show-all-reviews').click(function(e){
    e.preventDefault();
    $('.user-reviews__hidden-reviews').show();
    $('.user-reviews__show-all-reviews').hide();
});


// $('.form-1').each(function() {

//     var form = $(this);

//     $(this).validate({
//       rules: {
//         fio: {
//           required: true,
//         },
//         phone: {
//           required: true,
//           minlength: 10
//         },
//         // email: {
//         //     required: true,
//         //     minlength: 5
//         // }
//       },
//       messages: {
//         fio: {
//             required: $('.form__name').data('required'),
//           },
//           phone: {
//             required: $('.form__name').data('required'),
//             minlength: jQuery.validator.format($('.form__name').data('msg')),
//           },
//         //   email: {
//         //     required: "Заполните пожалуйста поле",
//         //   }

//         },
//         submitHandler: function() {
            
//             var fio = form.find('input[name="fio"]').val();
//             var phone = form.find('input[name="phone"]').val();

//             var number = $('.iti__selected-dial-code').html() + ' ' + phone;
//             number = number.replace('+', '');
           
//             // var emailAddress = form.find('input[name="email"]').val();

//             $('.footer-form input[name="fio"], .enter-form input[name="fio"]').attr('value', fio);
//             $('.footer-form input[name="phone"], .enter-form input[name="phone"]').attr('value', number);
//             // $('.footer-form input[name="email"]').attr('value', emailAddress);
//             $('.footer-form input[name="utmCampaign"], .enter-form input[name="utmCampaign"]').attr('value', localStorage.getItem("utmCampaign"));
//             $('.footer-form input[name="utmMedium"], .enter-form input[name="utmMedium"]').attr('value', localStorage.getItem("utmMedium"));
//             $('.footer-form input[name="utmSource"], .enter-form input[name="utmSource"]').attr('value', localStorage.getItem("utmSource"));
//             $('.footer-form input[name="utmContent"], .enter-form input[name="utmContent"]').attr('value', localStorage.getItem("utmContent"));
//             $('.footer-form input[name="utmTerm"], .enter-form input[name="utmTerm"]').attr('value', localStorage.getItem("utmTerm"));
//             $('.send-email').trigger('click');
//             $('.signup-form__cta').addClass('loading').addClass('active');
//         }
//     });

// });

// $(".footer-form").submit(function() { //Change
//     var th = $(this);
//     $.ajax({
//         type: "POST",
//         url: "/send.php", //Change
//         data: th.serialize()
//     }).done(function() {
//         window.location.href = 'receipt.html';
//     });
//     return false;
// });

// $(".enter-form").submit(function() { //Change
//     var th = $(this);
//     $.ajax({
//         type: "POST",
//         url: "/send.php", //Change
//         data: th.serialize()
//     }).done(function() {
//         window.location.href = 'receipt.html';
//     });
//     return false;
// });

$('.enter-form form').validate({
          rules: {
            // fio: {
            //   required: true,
            // },
            // phone: {
            //   required: true,
            //   minlength: 10
            // },
            email: {
                required: true,
                minlength: 5
            },
            password: {
                required: true,
                minlength: 5
            },
            cardNumber: {
                required: false,
            },
            expiryDate: {
                required: false,
            },
            cvv: {
                required: false,
            }
          },
          messages: {
            // fio: {
            //     required: $('.form__name').data('required'),
            //   },
            //   phone: {
            //     required: $('.form__name').data('required'),
            //     minlength: jQuery.validator.format($('.form__name').data('msg')),
            //   },
              email: {
                required: "Please fill in the field",
                email: "Please fill in the field",
              },
              password: {
                required: "Please fill in the field",
                minlength: 'The field must contain at least 5 characters.',
            },
            },
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
  
  function sendEmail() {
    $.ajax({
        type: "POST",
        url: "/send-2.php",
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
        $('.signup-form__cta').removeClass("signup-form__cta-disable");
        $('.enter-title').fadeIn();
        $('.enter-form-error').fadeOut();
        fathom.trackGoal('BE3Y3VJ3', 0);
     	document.location.href = "thankyou.html";
    });
  }
    
$('.expendable-faq__item').click(function(){
    if(!$(this).hasClass('expendable-faq__item--active')) {
        $('.expendable-faq__item').removeClass('expendable-faq__item--active');
        $('.expendable-faq__item').children('.expendable-faq__text-wrapper').slideUp(300);
        $(this).addClass('expendable-faq__item--active');
        $(this).children('.expendable-faq__text-wrapper').slideDown(300);
    } else {
        $(this).removeClass('expendable-faq__item--active');
        $(this).children('.expendable-faq__text-wrapper').slideUp(300);
    }
    
});


$(function() {
    $('.lazy').lazy({
      afterLoad: function(element) {
        element.parent('.loading-img').addClass('hide');
      }
    });
});

if(window.location.href.match('utm_*')) {
    const getUtmParameter = (sParam) => {
        const url = window.location.search.substring(1);
        const urlVariables = url.split('&');
    
        for (let i = 0; i < urlVariables.length; i++) {
        const variables = urlVariables[i].split('=');
    
        if (variables[0] === sParam) {
            return variables[1]
        }
        }
    };
    
    const utmCampaign = getUtmParameter('utm_campaign');
    localStorage.setItem("utmCampaign", utmCampaign);

    const utmMedium = getUtmParameter('utm_medium');
    localStorage.setItem("utmMedium", utmMedium);

    const utmSource = getUtmParameter('utm_source');
    localStorage.setItem("utmSource", utmSource);

    const utmContent = getUtmParameter('utm_content');
    localStorage.setItem("utmContent", utmContent);

    const utmTerm = getUtmParameter('utm_term');
    localStorage.setItem("utmTerm", utmTerm );

}
    var d = new Date();

    var month = d.getMonth()+1;
    var day = d.getDate();


    $('.start-date').html((day<10 ? '0' : '') + day + '.' + (month<10 ? '0' : '') + month + '.' + d.getFullYear());

    var days = 7; 
    var dtms = d.valueOf();
    var newdate = new Date(dtms + ((24 * 60 * 60 * 1000) * days)); // желаемая дата

    var newMonth = newdate.getMonth()+1;
    var newDay = newdate.getDate();

    $('.end-date').html(  (newDay<10 ? '0' : '') + newDay + '.' + (newMonth<10 ? '0' : '') + newMonth + '.' + newdate.getFullYear() );

    days = 2; 
    newdate = new Date(dtms + ((24 * 60 * 60 * 1000) * days)); // желаемая дата

    newMonth = newdate.getMonth()+1;
    newDay = newdate.getDate();

    $('.cancel-date').html(  (newDay<10 ? '0' : '') + newDay + '.' + (newMonth<10 ? '0' : '') + newMonth + '.' + newdate.getFullYear() );



//     $(function () {


//         /*
//          * International Telephone Input v16.0.0
//          * https://github.com/jackocnr/intl-tel-input.git
//          * Licensed under the MIT license
//         */
//         var input = document.querySelectorAll("input[name=phone]");
//         var iti_el = $('.iti.iti--allow-dropdown.iti--separate-dial-code');
//         if(iti_el.length){
//             iti.destroy();
			
// 			// Get the current number in the given format

			

//         }
//        for(var i = 0; i < input.length; i++){
//             iti = intlTelInput(input[i], {
//                 autoHideDialCode: false,
//                 autoPlaceholder: "aggressive" ,
//                 initialCountry: "auto",
//                 separateDialCode: true,
//                 preferredCountries: ['gb', 'us', 'es', 'mx'],
//                 customPlaceholder:function(selectedCountryPlaceholder,selectedCountryData){
//                     return ''+selectedCountryPlaceholder.replace(/[0-9]/g,'_');
//                 },
//                 geoIpLookup: function(callback) {
//                     $.get('https://ipinfo.io', function() {}, "jsonp").always(function(resp) {
//                       var countryCode = (resp && resp.country) ? resp.country : "";
//                       callback(countryCode);
//                   });
//                 },
//                 utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/16.0.0/js/utils.js" // just for 
//         });

		   
//         $('input[name="phone"]').on("focus click countrychange", function(e, countryData) {
//             var pl = $(this).attr('placeholder') + '';
//             var res = pl.replace( /_/g ,'9');
//             if(res != 'undefined'){
//                 $(this).inputmask(res, {placeholder: "_", clearMaskOnLostFocus: true});
//             }
//         });
		   
// 		   $('input[name="phone"]').on("focusout", function(e, countryData) {
// 			   var intlNumber = iti.getNumber();
// 			   console.log(intlNumber);
    
// 		   });
		   
//     }


// });

    let W = window.innerWidth;
    let H = window.innerHeight;
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const maxConfettis = 150;
    const particles = [];

    const possibleColors = [
    "DodgerBlue",
    "OliveDrab",
    "Gold",
    "Pink",
    "SlateBlue",
    "LightBlue",
    "Gold",
    "Violet",
    "PaleGreen",
    "SteelBlue",
    "SandyBrown",
    "Chocolate",
    "Crimson"
    ];

    function randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
    }

    function confettiParticle() {
    this.x = Math.random() * W; // x
    this.y = Math.random() * H - H; // y
    this.r = randomFromTo(11, 33); // radius
    this.d = Math.random() * maxConfettis + 11;
    this.color =
        possibleColors[Math.floor(Math.random() * possibleColors.length)];
    this.tilt = Math.floor(Math.random() * 33) - 11;
    this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
    this.tiltAngle = 0;

    this.draw = function() {
        context.beginPath();
        context.lineWidth = this.r / 2;
        context.strokeStyle = this.color;
        context.moveTo(this.x + this.tilt + this.r / 3, this.y);
        context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
        return context.stroke();
    };
    }

    function Draw() {
    const results = [];

    // Magical recursive functional love
    requestAnimationFrame(Draw);

    context.clearRect(0, 0, W, window.innerHeight);

    for (var i = 0; i < maxConfettis; i++) {
        results.push(particles[i].draw());
    }

    let particle = {};
    let remainingFlakes = 0;
    for (var i = 0; i < maxConfettis; i++) {
        particle = particles[i];

        particle.tiltAngle += particle.tiltAngleIncremental;
        particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
        particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

        if (particle.y <= H) remainingFlakes++;

        // If a confetti has fluttered out of view,
        // bring it back to above the viewport and let if re-fall.
        
    }
    
    return results;
    }

    window.addEventListener(
    "resize",
    function() {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    },
    false
    );

    // Push new confetti objects to `particles[]`
    for (var i = 0; i < maxConfettis; i++) {
    particles.push(new confettiParticle());
    }


    // Initialize
    canvas.width = W;
    canvas.height = H;
    Draw();

    function createCookie(name, value, days) {
        let expires = "";
    
        if (days) {
            let date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            expires = "; expires="+date.toGMTString();
        }
    
        document.cookie = `${name}=${value}${expires}; path=/`;
    }
    
    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
    
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }