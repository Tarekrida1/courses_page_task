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
                background: "#0097A7"
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
        $(".fixed-option").animate({
            left: 0,
            opacity: 1
                                     }, 800);
                                          });
    $(".close-nav").on('click', function () {
        $(".fixed-option").animate({
            left: "-240",
            opacity: 0
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