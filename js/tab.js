$(document).ready(function () {
    let tabsItem = $('.tabs__item');
    let contentItem = $('.content__item');

    tabsItem.on("click", function (event){
        let activeContent = $(this).attr("data-target");
        tabsItem.removeClass("tabs__item--active");
        contentItem.removeClass("content__item--active"); 
        $(activeContent).toggleClass("content__item--active");
        $(this).addClass("tabs__item--active")
    });
});


$(document).ready(function () {
    let tabsItem = $('.product-tabs__item');
    let contentItem = $('.product-content__item');

    tabsItem.on("click", function (event){
        let activeContent = $(this).attr("data-target");
        tabsItem.removeClass("product-tabs__item--active");
        contentItem.removeClass("product-content__item--active"); 
        $(activeContent).toggleClass("product-content__item--active");
        $(this).addClass("product-tabs__item--active")
    });
});