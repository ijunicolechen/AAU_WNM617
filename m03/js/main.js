$(document).ready(() => {
    $(".accordion dt").on("click", function (e) {
        console.log($(this));
        // $(this).next().toggle();
        $(this).next().slideToggle();
    })
})