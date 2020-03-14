$(() => {

    checkUserId();

    // Event Delegation
    $(document)

        /* FORMS */
        .on("click", "#login", function (e) {
            e.preventDefault();
            checkLoginForm();
        })



        /* CLICKS */
        .on("click", "#logOut", function (e) {
            sessionStorage.removeItem("userId")
            checkUserId();
        })


        /* DATA ACTIVATE */
        .on("click", "[data-activate]", function (e) {
            $($(this).data("activate"))
                .addClass("active");
        })
        .on("click", "[data-deactivate]", function (e) {
            $($(this).data("deactivate"))
                .removeClass("active");
        })
        .on("click", "[data-toggle]", function (e) {
            $($(this).data("toggle"))
                .toggleClass("active");
        })
        .on("click", "[data-activateone]", function (e) {
            $($(this).data("activateone"))
                .addClass("active")
                .siblings().removeClass("active");
        })



    $("[data-template]").each(function () {
        let template_id = $(this).data("template");
        console.log(template_id);
        let template_str = $(template_id).html();
        console.log(template_str);
        $(this).html(template_str);
    })

})