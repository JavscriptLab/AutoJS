(function ($){
    $(document).ready(function () {

    if ($(".index-hedMessage._success").length > 0) {
        window.close();
    }

    var cacheappliedlinks = [];
    if (localStorage.getItem("cacheappliedlinks")) {
        cacheappliedlinks = JSON.parse(localStorage.getItem("cacheappliedlinks"));
    }

    $(".description").css("cursor", "pointer").text("apply all");
    $(".listResults.jobs >.listResults > .-job-item").each(function () {
        var th = $(this);
        var link = $(this).find(".job-link").attr("href").split("?")[0];
        if (cacheappliedlinks.indexOf(link) != -1) {
            th.css("background-color", "rgba(113, 241, 210, 0.13)");
            th.css("border", "1px solid green");
        }
    });
    $("body").on("click", ".description", function () {
        var timeout = 0;
        $(".listResults.jobs >.listResults > .-job-item").each(function () {
            var th = $(this);
            var link = $(this).find(".job-link").attr("href").split("?")[0];
            if (cacheappliedlinks.indexOf(link) == -1 && $(this).find(".-application-type") != "Applied") {
                var tags = $(this).find(".-tags").first().text().toLowerCase();
                if (tags.split(".net").length > 1 || tags.split("wordpress").length > 1 || tags.split("c#").length > 1 || tags.split("angularjs").length > 1 || tags.split("jquery").length > 1) {
                    if ($(this).find(".-location").text().split("india").length == 1) {
                        if ($(this).find(".-name").text().split("Crossover").length == 1) {
                            cacheappliedlinks.push(link);
                            var joblink = $(this).find(".job-link").attr("href");
                            setTimeout(function () {
                                window.open(joblink, '_blank');
                                th.css("background-color", "rgba(113, 241, 210, 0.33)");
                                th.css("border", "1px solid green");
                            }, timeout);
                            timeout += 10000;
                        }
                    }

                }
            }


        });
        localStorage.setItem("cacheappliedlinks", JSON.stringify(cacheappliedlinks));
    });

    if ($("#action-bar .apply").length > 0 && $(".-previously-applied-icon").length == 0) {
        if ($("#fav-share").text().split("Saved").length == 1) {
            $("#fav-share").click();

            setTimeout(function () {
                window.location.href = $("#action-bar .apply a").attr("href");
            }, 30000);
        } else {
            window.close();
        }
    }
    if ($(".-previously-applied-icon").length == 1) {
        window.close();
    }

    if ($(".has-error").length == 0 && $(".message:visible").length == 0) {
        if ($('.btn._medium.j-apply-btn[type="submit"][value="Apply"]').length > 0) {
            $("#CandidatePhoneNumber").val("9605656508");
            setTimeout(function () {
                $('.btn._medium.j-apply-btn[type="submit"][value="Apply"]').trigger("click");
            }, 30000);
        }
    } else {
        setTimeout(function () {

            $('.btn._medium.j-apply-btn[type="submit"][value="Apply"]').trigger("click");
        }, 30000);
    }
    })
})(myjQuery);