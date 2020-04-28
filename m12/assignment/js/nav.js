function navActive(page) {
    switch (page) {
        case "collectPage":
            if (!$("footer .collection-icon").hasClass("active")) {
                $(this).addClass("active");
            } else {
                $(".map-icon,.profile-icon").removeClass("active");
            }
            break;
        case "mapPage":
            if (!$("footer .map").hasClass("active")) {
                $(this).addClass("active");
            } else {
                $(".collection-icon,.profile-icon").removeClass("active");
            }
            break;
        case "profileDisplayPage":
            if (!$("footer .profile-icon").hasClass("active")) {
                $(this).addClass("active");
            } else {
                $(".collection-icon,.map-icon").removeClass("active");
            }
            break;
    }
}