$(document).ready(function () {
    $(document).on('click', '.jsAsideItem', function () {
        $('.jsAsideItem').removeClass('active');
        $(this).addClass('active');
        $(this).closest('.info__inner').find('.info__inner-box').remove();
        $(this).closest('.info__inner').find('.jsAjaxToggler').load($(this).attr('data-ajax'));
    })
})