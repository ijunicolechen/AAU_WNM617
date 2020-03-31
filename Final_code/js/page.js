const includePage = (id) => {
    $("#sectionPage").empty();
    $("#sectionPage").attr("data-name", id);

    let file = "page/" + id + ".html";
    $.get(file, function (data) {
        $("#sectionPage").append(data);
        templateHtml(id);
    })

}

const templateHtml = (id) => {
    const noFooterPage = ["logIn", "signUp", "forgetPass", "catInfo", "edit"];
    let templateFile = "page/template.html";
    $.get(templateFile, function (data) {
        $("#sectionPage").append(data);
        if (!noFooterPage.includes(id)) {
            templateInsert();
        }
    })
}

const templateInsert = () => {
    $("[data-template]").each(function () {
        let template_id = $(this).data("template");
        let template_str = $(template_id).html();
        $(this).html(template_str);
    })
}