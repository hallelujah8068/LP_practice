$(function() {
    $(".dropdown-toggle").click (function() {
        $(".dropdown-menu").slideToggle();
    });
});

$(function() {
    const pagetop = $('.page_top');
     pagetop.hide();
    $(window).scroll(function() {
        if($(this).scrollTop() > 80) {
            pagetop.fadeIn(300);
        }else {
            pagetop.fadeOut(300);
        }
    });

    pagetop.click(function() {
        $('body, html').animate({ scrollTop:0 }, 500);
         return false;
    });
});