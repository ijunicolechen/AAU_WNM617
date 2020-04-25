$(() => {
    checkUserId();

    // Event Delegation
    $(document)
        // ROUTING
        .on('pagecontainerbeforeshow', function (e, ui) {
            console.log(ui.toPage[0].id);
            switch (ui.toPage[0].id) {
                case 'mapPage':
                    showMapPage();
                    break;
                case 'breedPage':
                    showBreedPage();
                    break;
                case 'collectPage':
                    showCollectionPage($('.collection-filter.active').data('name'));
                    break;
                case 'profileDisplayPage':
                    showProfilePage();
                    break;
                case "catsInfoPage":
                    showcatsInfoPage();
                    break;
            }
        })

        /* FORMS */
        .on('submit', '#loginForm', function (e) {
            e.preventDefault();
            checkLoginForm();
        })

        /* CLICKS */
        .on('click', '#logOut', function (e) {
            sessionStorage.removeItem('userId');
            checkUserId();
        })
        .on('click', '.jump-catInfo', function (e) {
            
            if ($(this).data('id') == undefined) {
                throw ("No id defined on this element!")
            }
            sessionStorage.catId = $(this).data('id');
        })
        .on('click', '#catsInfoPage .cat-profile-nav a',function(e){
            let navIndex = $(this).parent().index();
            $(this).parent().addClass("active").siblings().removeClass("active");
            $(this).parent().parent().parent().next().children().eq(navIndex).addClass("active").siblings().removeClass("active");
        })
        .on('click', '#catsInfoPage .button-circle span',function(e){
            let circleIndex = $(this).index();
             $(this).addClass("active").siblings().removeClass("active");
             $(this).parent().prev().children().eq(circleIndex).addClass("active").siblings().removeClass("active");
            
        })

        /* DATA ACTIVATE */
        .on('click', '[data-activate]', function (e) {
            $($(this).data('activate')).addClass('active');
        })
        .on('click', '[data-deactivate]', function (e) {
            $($(this).data('deactivate')).removeClass('active');
        })
        .on('click', '[data-toggle]', function (e) {
            $($(this).data('toggle')).toggleClass('active');
        })
        .on('click', '[data-activateone]', function (e) {
            $($(this).data('activateone'))
                .addClass('active')
                .siblings('li')
                .removeClass('active');
            showCollectionPage($(this).data('name'));
        });

    $('.collection-filter').on('click', function (e) {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active').siblings('li').removeClass('active');
            showCollectionPage($(this).data('name'));
        }
    });

    $('[data-template]').each(function () {
        let template_id = $(this).data('template');
        let template_str = $(template_id).html();
        $(this).html(template_str);
    });
});