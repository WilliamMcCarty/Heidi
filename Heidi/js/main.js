﻿jQuery(document).ready(function () {
    console.log("jQuery is working!");
});

$(function () {
    $(".thumb").on("click", function () {
        var imgSrc = $(this).attr("src");
        $("#lightbox-content").html('<img src="' + imgSrc + '" class="img-responsive-lightBox maxsize" />');
        $("#lightbox-container").fadeIn(1300);
        $("#lightbox-container").on("click", function () {
            $(this).fadeOut(500);
        });

    });


});