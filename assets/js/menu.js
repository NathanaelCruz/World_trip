$(document).ready(function() {
    function openCloseMenu() {

        $('#icon-menu-mobile').css('animation', '')
        $('#header-top > ul').toggle(1000)

        if ($('#icon-menu-mobile img').attr('src') == 'assets/icon/icon_menu.svg') {
            setTimeout(function() {
                $('#icon-menu-mobile').css('animation', 'rodar 1s linear')
            }, 300)
            setTimeout(function() {
                $('#icon-menu-mobile img').attr('src', 'assets/icon/icon_menu_white.svg')
            }, 500)
        } else {

            setTimeout(function() {
                $('#icon-menu-mobile').css('animation', 'rodar-inverso 1s linear')
            }, 300)
            setTimeout(function() {
                $('#icon-menu-mobile').css('animation', 'rodar-inverso 1s linear')
                $('#icon-menu-mobile img').attr('src', 'assets/icon/icon_menu.svg')
            }, 500)
        }
    }
    $('#icon-menu-mobile').click(function() {
        openCloseMenu()
    })
    $('#header-top ul li a').on('click', function(e) {
        e.preventDefault();
        var element = $(this).attr('href'),
            targetOffset = $(element).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset - 100
        }, 500);
        if (window.innerWidth <= 788) {
            openCloseMenu()
        }
    });
})