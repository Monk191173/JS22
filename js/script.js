'use strict';
let topPos;
let leftPos;

let rand = (max) => {
    return Math.round(Math.random() * max)
}


/*-------------------------------------------------------------------------------------------ClickBox */
$(document).ready(function () {
    $('.clickbox').on('click', function () {
        $(this).animate({
            backgroundColor: `rgb(${rand(255)},${rand(255)},${rand(255)})`,
            width: `${rand(100) + 10}`,
            height: `${rand(100) + 10}`,
            top: `${rand(window.innerHeight - parseInt($(this).css('height')))}px`,
            left: `${rand(window.innerWidth - parseInt($(this).css('width')))}px`
        }, 2000, 'easeInOutElastic')
    });


    /*-------------------------------------------------------------------------------------------DiscoBall */
    function dball() {
        let r, g, b;
        r = rand(255);
        g = rand(255);
        b = rand(255);
        $('.discoball').animate(
            {
                boxShadow: `0 0 15px 15px rgba(${r},${g},${b},.425)`,
                backgroundColor: `rgb(${r},${g},${b})`,
                borderColor: `rgb(${rand(255)},${rand(255)},${rand(255)})`,
                top: `${rand(window.innerHeight - parseInt($('.discoball').css('height')))}px`,
                left: `${rand(window.innerWidth - parseInt($('.discoball').css('width')))}px`
            },
            {
                duration: 1000,
                easing: 'linear'
            })
    }
    setInterval(dball, 1000);
    /*-------------------------------------------------------------------------------------------AnimateGallery */
    $('.small-box').on('click', function () {
        if (parseInt($(this).css('width')) == 100) {
            $(this).css('zIndex', 99);
            $('.modal-container').css({
                zIndex: 90,
                backgroundColor: 'rgba(0,0,0,.8)'
            });
            topPos = $(this).css('top');
            leftPos = $(this).css('left');

            $(this).animate({
                width: `300px`,
                height: '300px',
                top: parseInt($(this).css('height')) + 175, // height main block + margin
                left: parseInt($(this).css('width')) + 20,
            }, 1000, 'easeOutCirc');
        }
        else if (parseInt($(this).css('width')) == 300){
            $(this).css('zIndex', 1);
            $('.modal-container').css({
                zIndex: -1,
                backgroundColor: 'rgba(255,255,255,.8)'
            });
            $(this).animate({
                top: topPos,
                left: leftPos,
                width: `100px`,
                height: '100px',
                zIndex: 0
            }, 1000, 'easeOutCirc');
        }


    });



});/*docReady */
