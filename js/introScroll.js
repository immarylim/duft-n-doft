$(() => {
    const introElements = $('.introTitle, .introConLine, .introDescript');

    introShow();

    $(window).scroll(() => {
        introShow();
    });

    function introShow() {
        const scrollLocation = $(this).scrollTop();

        const introScroll1 = scrollLocation > 350 ? 0 : '30px';
        const introScroll2 = scrollLocation > 350 ? '52px' : '77px';
        const introScroll3 = scrollLocation > 350 ? 0 : '-33px';

        introElements.css('opacity', scrollLocation > 350 ? 1 : 0);
        introElements.eq(0).css('top', introScroll1);
        introElements.eq(1).css('top', introScroll2);
        introElements.eq(2).css('bottom', introScroll3);
    }
});