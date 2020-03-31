const checkLoginForm = () => {

    let user = $("#loginUser").val();
    let pass = $("#loginPass").val();

    if (user === "user" && pass === "pass") {
        // logged in
        if ($("#loginUser,#loginPass").hasClass("error")) {
            $("#loginUser").removeClass("error");
        }

        sessionStorage.userId = 3;
    } else {

        // not logged in
        if (user !== "user") {
            console.log("error");
            $("#loginUser").addClass("error");
        }
        if (pass !== "pass") {
            $("#loginPass").addClass("error");
        }
        sessionStorage.removeItem('userId');
    }

    checkUserId();
}


const checkUserId = () => {
    let p = ["#loginPage", "#signupPage", ""];

    if (sessionStorage.userId === undefined) {
        // not logged in
        if (!p.some(o => window.location.hash === o))
            $("#loginUser,#loginPass").val("");
        $.mobile.navigate("")
    } else {
        // logged in
        if (p.some(o => window.location.hash === o))
            $.mobile.navigate("#mapPage")
    }
}