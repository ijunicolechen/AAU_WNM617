$(document).ready(() => {
    // Accordion
    $(".accordion dt").on("click", function (e) {
        console.log($(this));
        // $(this).next().toggle();
        // $(this).next().slideToggle();
        // $(this).next().slideDown().siblings("dd").slideUp();
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").next().slideUp();
        } else {
            $(this).addClass("active").siblings("dt").removeClass("active");
            $(this).next().slideDown().siblings("dd").slideUp();
        }
    })
    // Tab Group
    $(".tab").on("click", function (e) {
        console.log("click");
        let id = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(this).closest(".tabgroup").find(".content").eq(id).addClass("active").siblings().removeClass("active");
    })
})