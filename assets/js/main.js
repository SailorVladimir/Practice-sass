$('.slider').slick(
    
);








var $button = $('#menu-btn');

$button.on('click', function (e) {
    e.preventDefault();
    if ($button.hasClass('open')) {
        $button.removeClass('open');
        $button.addClass('close');
    } else {
        $button.removeClass('close');
        $button.addClass('open');
    }
});

document.querySelector('#menu-btn').onclick = function () {
    display = document.querySelector('.menu').style.display;

    if (display == 'block') {
        document.querySelector('.menu').style.display = 'none';
    } else {
        document.querySelector('.menu').style.display = 'block';
    }
}