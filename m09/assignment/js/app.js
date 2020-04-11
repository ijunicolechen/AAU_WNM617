$(() => {

    checkUserId();

    // Event Delegation
    $(document)

        // ROUTING
        .on("pagecontainerbeforeshow", function (e, ui) {
            console.log(ui.toPage[0].id)
            switch (ui.toPage[0].id) {
                case "mapPage":
                    // some code
                    break;
                case "breedPage":
                    showBreedPage();
                    break;
                    /*
                    case "collectPage":
                        showCollectPage();
                        break;
                    case "profileDisplayPage":
                        showProfilePage();
                        break;
                    case "catsInfoPage":
                        showcatsInfoPage();
                        break;
                    */
            }
        })

        /* FORMS */
        .on("submit", "#loginForm", function (e) {
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
        let template_str = $(template_id).html();
        $(this).html(template_str);
    })

})