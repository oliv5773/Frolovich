/*Navigationsmenu - undermenuer */

$(document).ready(
    function () {
        $('.menu-toggle').click(function () {
            $('nav').toggleClass('active')
            document.querySelector(".menu-toggle").classList.toggle("toggle");
        })

        $('ul li').click(function (toggleBurger) {
            $(this).siblings().removeClass('active');
            $(this).toggleClass('active');

        })

    }
)




        /*Navigationsmenu - transparent før scroll */

$(document).ready(function () {
    // Transition effect for navbar
    $(window).scroll(function () {
        // checks if window is scrolled more than 500px, adds/removes solid class
        if ($(this).scrollTop() > 1) {
            $('.navbar').addClass('solid');
        } else {
            $('.navbar').removeClass('solid');
        }
    });
});

