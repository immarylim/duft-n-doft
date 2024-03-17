$('.headMenu').click(function() {
    $(this).hasClass('active') ? closeMenu($(this)) : openMenu($(this));
    $('.downMenuWrap').slideToggle('slow');
});

function openMenu(element) {
    element.addClass('active');
}

function closeMenu(element) {
    element.removeClass('active');
}