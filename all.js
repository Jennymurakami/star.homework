$('.mb_list').slideUp(0);
$('.mb_menu').click(function () {
    $('.mb_list').slideDown(500);
})


$('*').each(function () {
    $(this).click(function () {

        let target = $(this).attr("data-gt-target");

        if (target) {
            let top = $(target).offset().top;
            $('html').animate({
                scrollTop: top
            }), 1000
        }
    })


})

$('.mb_list').click(function () {
    $('.mb_list').slideUp(500);
})

