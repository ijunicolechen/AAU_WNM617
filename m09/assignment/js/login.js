const checkLoginForm = async () => {

    let user = $("#loginUser").val();
    let pass = $("#loginPass").val();

    let u = await query({
        type: 'check_login',
        params: [user, pass]
    });

    if (u.result.length) {
        // logged in
        sessionStorage.userId = u.result[0].u_id;
        $("#loginForm")[0].reset();
    } else {

        // not logged in
        $("#loginUser,#loginPass").addClass("error");
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
        $.mobile.navigate("#loginPage")
    } else {
        // logged in
        if (p.some(o => window.location.hash === o))
            $.mobile.navigate("#mapPage")
    }
}