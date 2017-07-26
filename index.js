/**
 * Created by mayan on 2017/7/24.
 */

// // init Masonry
// var $grid = $('.grid').masonry({
//     // options...
//     itemSelector: '.grid-item',
//     columnWidth: '.grid-sizer',
//     percentPosition: true
// });
// // layout Masonry after each image loads
// $grid.imagesLoaded().progress( function() {
//     $grid.masonry('layout');
// });

(function() {
    // Masonry grid setup
    $(".grid").masonry({
        itemSelector: ".grid__item",
        columnWidth: ".grid__sizer",
        gutter: 15,
        percentPosition: true
    });
    // Image replacement handler
    $(document).on("click", ".js-button", function() {
        var imageSrc = $(this).parents(".grid__item").find("img").attr("src");
        $(".js-download").attr("href", imageSrc);
        $(".js-modal-image").attr("src", imageSrc);
        $(document).on("click", ".js-heart", function() {
            $(this).toggleClass("active");
        });
    });
})();