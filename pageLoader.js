$(document).ready(function () {
    $.getJSON("Grokking the Object Oriented Design Interview.json", function (data) {
        $('#banner').append("<h1>" + data.title + "</h1>" + "<p>" + data.summary + "</p>" + "<p>" + data.details + "</p>");
        $("#bodyContainer").append("<br/>");
        $.each(data['categories'], function (index, category) {
            $("#bodyContainer").append("<div>");
            $("#bodyContainer").append("<h1>" + category.title + "</h1>");
            $.each(category['pages'], function (index, page) {
                $("#bodyContainer").append("<h2>" + page.summary.title + "</h2>")
                $.each(page['components'], function (index, component) {
                    if (component.type === "MarkdownEditor") {
                        $("#bodyContainer").append(component.content.mdHtml);
                    }
                })
            })
            $("#bodyContainer").append("</div>");
        })
    })
});