/*eslint-env browser*/
/*jslint browser: true*/
/*global $, alert*/

//JS
$('document').ready(function () {
    "use strict";
    //Script Here

    //Automatically hide header on scroll
    //Hide Header on on scroll down
    function hide() {
        $('header').addClass('hide');
    }
    //Unhide Header on on scroll up
    function unhide() {
        $('header').removeClass('hide');
    }

    var startPos = 0,
        winScrollTop = 0,
        flug = true;

    //This function checks the direction of scroll, up or down
    //Then perform hide or unhide header.
    function checkScroll() {

        if (winScrollTop > startPos) {
            hide();
        } else {
            unhide();
        }
        startPos = winScrollTop;

    }

    $(window).scroll(function () {
        if (flug) {
            flug = false;
            winScrollTop = $(window).scrollTop();
            //Timeout is for delaying judgement of scroll up or down. 
            //Otherwise, scroll bouncing on Safari gives unwanted behavior. 
            setTimeout(function () {
                // Script Here 
                checkScroll();
                flug = true;
                return flug;
            }, 700);
        }
    });

});
