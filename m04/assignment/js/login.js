const checkLoginForm = () => {

    let user = $("#loginUser").val();
    let pass = $("#loginPass").val();

    if (user === "user" && pass === "pass") {
        // logged in
        sessionStorage.userId = 3;
    } else {
        // not logged in
        sessionStorage.removeItem('userId');
    }

    checkUserId();
}


const checkUserId = () => {
    let p = ["#loginPage", "#signupPage", ""];

    if (sessionStorage.userId === undefined) {
        // not logged in
        if (!p.some(o => window.location.hash === o))
            $.mobile.navigate("#loginPage")
    } else {
        // logged in
        if (p.some(o => window.location.hash === o))
            $.mobile.navigate("#mapPage")
    }
}