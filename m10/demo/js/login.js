const checkLoginForm = async () => {

    let user = $("#login-username").val();
    let pass = $("#login-password").val();

    let u = await query({
        type: 'check_login',
        params: [user, pass]
    });

    console.log(u)
    if (u.result.length) {
        // logged in
        sessionStorage.userId = u.result[0].id;
        $("#login-form")[0].reset();
    } else {
        // not logged in
        sessionStorage.removeItem('userId');
    }

    checkUserId();
}


const checkUserId = () => {
    let p = ["#login-page", "#signup-page", ""];

    if (sessionStorage.userId === undefined) {
        // not logged in
        if (!p.some(o => window.location.hash === o))
            $.mobile.navigate("#login-page")
    } else {
        // logged in
        if (p.some(o => window.location.hash === o))
            $.mobile.navigate("#recent-page")
    }
}