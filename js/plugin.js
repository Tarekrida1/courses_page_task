$(function () {
    'use strict';
    $("body").niceScroll({
        cursorcolor: "#0097A7",
        cursorwidth: "10px"
                         });
    // head
    $(window).scroll(function () { 
        if ($(document).scrollTop() > 200) { 
            $(".main-header").css("box-shadow", "0 0rem 1rem 0rem");
            $(".main-header").css({
                background: "#fff"
                                    });
        } else {
            $(".main-header").css("box-shadow", "0 0 0 0");
            $(".main-header").css({
                background: "none"
                                 });
             }
                                });
    // logout 
    $("#logout").click(function () {
        $(".user-pic").hide();
    });
    // nav bar
    $(".open-nav").on('click', function () {
        $(".fixed-option").css({
            transform: "translateX(0)",
            opacity: 1
                                     });
                                          });
    $(".close-nav").on('click', function () {
        $(".fixed-option").css({
            transform: "translateX(-100%)",
            opacity: .3
                                    }, 800);
                                         });

    // scroll to div

    $("#start").click(function () {
        $("html, body").animate({
            scrollTop: $("#feat-h").offset().top
        }, 1000);
    });
    $(".go-up").click(function () {
        $("html, body").animate({
            scrollTop: $("#header").offset().top
        }, 1500);
    });

    $(window).scroll(function () { 
        if ($(document).scrollTop() > 1000) {
            $(".fixed-footer").css({
                transform: 'translateY(0)'
                                 }, 1000);
    } else {

            $(".fixed-footer").css({
                transform: 'translateY(40px)'
                                   }, 1000);
            }
                                    });
    $(window).scroll(function () { 
        if ($(document).scrollTop() > 1700) {
            $(".message-click").css({
                transform: 'translateX(0)'
                                      }, 2000);
        } else {

            $(".message-click").css({
                transform: 'translateX(90px)'

            }, 2000);
        }
    });
    var previousScroll = 0;
    $(window).scroll(function (event) {
        var scroll = $(this).scrollTop();
        if (scroll > previousScroll) {
            $(".main-header").css({
                transform: 'translateY(-60px)'

            }, 1000);


        } else {
            $(".main-header").css({
                transform: 'translateY(0)'

            }, 1000);


        }
        previousScroll = scroll;
    });


});
$(window).load(function(){
    $("body").css("overflow","auto");
    $(".loading-head").fadeOut(100, function(){
        $(".loading-container").fadeOut(300, function(){
            $(this).parent().fadeOut(500, function(){
                $(this).remove();
            });
        });
    });



/*
// get the click li  id and cache in myId varible
 $("#my-tabs li")./click(function()
 {
var myID = $(this).attr("id");
// remove class inactive frome clicked li and add it to other li in the same UL
$(this).removeClass("inactive").siblings().addClass("inactive");
$(".the-tabs div").hide();
// hide all divs when click on the li
$("#"+myID+"-content").fadeIn(1500);
});
// tabs

*/
$(".grades .table a").on("click", function(even){
    event.preventDefault();
$("." + $(this).data("popup")).fadeIn(300);
$("body").css({
    overflow: "hidden"
});
});
$(".close-popup, .login-content .close-login").on("click", function(event) {
    event.preventDefault();
$(".popup").fadeOut(300);
$("body").css({
    overflow: "auto"
});
});
$(".close-popup, .login-content .close-login").on("click", function(event) {
    event.preventDefault();
$(".popup").fadeOut(300);
$("body").css({
    overflow: "auto"
});
});

$(".message-click").on("click", function() {
    event.preventDefault();
    $(".message").fadeIn();
    $("body").css({
        overflow: "hidden"
    });
});

$(".close-message").on("click", function() {
    event.preventDefault();
    $(".message").fadeOut();
    $("body").css({
        overflow: "auto"
    });
});
// inputs 
$(".first-name input").on("focusout", function() {
if ($(this).val() != "") {
    $(".first-name label").addClass("has-data");
} else {
    $(".first-name label").removeClass("has-data");
}
});
$(".last-name input").on("focusout", function() {
    if ($(this).val() != "") {
        $(".last-name label").addClass("has-data");
    } else {
        $(".last-name label").removeClass("has-data");
    }
    });
    $(".email input").on("focusout", function() {
        if ($(this).val() != "") {
            $(".email label").addClass("has-data");
        } else {
            $(".email label").removeClass("has-data");
        }
        });
        $(".phone input[type=number]").on("focusout", function() {
            if ($(this).val() != "") {
                $(".phone label").addClass("has-data");
            } else {
                $(".phone label").removeClass("has-data");
            }
            });
            $(".password input").on("focusout", function() {
                if ($(this).val() != "") {
                    $(".password label").addClass("has-data");
                } else {
                    $(".password label").removeClass("has-data");
                }
                });
                $(".repassword input").on("focusout", function() {
                    if ($(this).val() != "") {
                        $(".repassword label").addClass("has-data");
                    } else {
                        $(".repassword label").removeClass("has-data");
                    }
                    });
});