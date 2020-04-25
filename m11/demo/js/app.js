$(() => {

    checkUserId();

    // Event Delegation
    $(document)


        // ROUTING
        .on("pagecontainerbeforeshow", function (e, ui) {
            console.log(ui.toPage[0].id)
            switch (ui.toPage[0].id) {
                case "recent-page":
                    showRecentPage();
                    break;
                case "list-page":
                    showListPage();
                    break;
                case "animal-profile-page":
                    showAnimalPage();
                    break;
                case "add-location-page":
                    showAddLocationPage();
                    break;
                case "profile-page":
                    showUserPage();
                    break;
            }
        })


        /* FORMS */
        .on("submit", "#login-form", function (e) {
            e.preventDefault();
            checkLoginForm();
        })



        /* CLICKS */
        .on("click", ".js-logout", function (e) {
            sessionStorage.removeItem("userId")
            checkUserId();
        })
        .on("click", ".animal-jump", function (e) {
            if ($(this).data("id") === undefined) {
                throw ("No id defined on this element");
            }
            sessionStorage.animalId = $(this).data("id");
        })

        .on("click", ".nav-tabs a", function (e) {
            let id = $(this).parent().index();
            $(this).parent().addClass("active")
                .siblings().removeClass("active");

            $(this).parent().parent().parent().next().children()
                .eq(id).addClass("active")
                .siblings().removeClass("active")
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
        });









    $("[data-template]").each(function () {
        let template_id = $(this).data("template");
        let template_str = $(template_id).html();
        $(this).html(template_str);
    })

})