$(document).ready(function() {

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 430) {
            $('#arrow-top').fadeIn(1000);
        } else {
            $('#arrow-top').fadeOut(500);
        }

    });

    $('#arrow-top').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    })
})