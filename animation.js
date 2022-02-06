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

$(function() {
    $("#main img").click(function() {
        $("#graydisplay").html($(this).prop('outerHTML'));
        $("#graydisplay").fadeIn(200);
    });
    $("#graydisplay, #graydisplay img").click(function() {
        $("#graydisplay").fadeOut(200);
        return false;
    });
});