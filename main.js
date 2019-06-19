
var count = 0;
$('.navbar-toggler').click(function () {
    count++;
    if (count % 2 == 0) {
        $(this).removeClass('on');
        $('.nav-resp').hide();
    } else {
        $(this).addClass('on');
        $('.nav-resp').show();
    }

})