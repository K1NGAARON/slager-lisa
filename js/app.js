// STICKY LARGE MENU
$(document).scroll(function () {
    const header = $('.header');
    const logo = $('.header .logo');

    if ($(this).scrollTop() > header.height()) {
        header.addClass('active');
    } else {
        header.removeClass('active');
    }
});

// SMALL MENU
$("#menu-toggle").click(function() {
    $(".small-menu-wrapper").toggle("active");
});

function shuffleArray(array) {
    array.sort(() => Math.random() - 0.5);
};