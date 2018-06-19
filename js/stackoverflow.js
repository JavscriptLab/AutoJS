// // var element = document.getElementsByClassName("apply-captcha");
// // for (var i = 0; i < element.length; i++) {
// //         element[i].parentNode.removeChild(element[i]);
// // }
(function ($){
    // // $(".apply-captcha").remove();
    $(document).ready(function () {

        if ($(".index-hedMessage._success .post-apply-message").length > 0) {
            window.close();
        }
    setTimeout(function () {
        if ($(".index-hedMessage._success .post-apply-message").length > 0) {
            window.close();
        }
    },10000)
    var cacheappliedlinks = [];
    if (localStorage.getItem("cacheappliedlinks")) {
        cacheappliedlinks = JSON.parse(localStorage.getItem("cacheappliedlinks"));
    }

    $("#index-hed .description").css("cursor", "pointer").text("apply all");
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
        $(".listResults > .-job.-item").each(function () {
            var th = $(this);
            var link = $(this).find(".job-link").attr("href").split("?")[0];
            if (cacheappliedlinks.indexOf(link) == -1 && $(this).find(".-application-type") != "Applied") {
                var tags = $(this).find(".post-tag").first().parent().text().toLowerCase();
                if (tags.split(".net").length > 1 || tags.split("wordpress").length > 1 || tags.split("c#").length > 1 || tags.split("angularjs").length > 1 || tags.split("jquery").length > 1) {
                    if ($(this).text().split("india").length == 1) {
                        if ($(this).text().split("Crossover").length == 1) {
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

    if ($(".js-apply-container").length > 0 && $(".-previously-applied-icon").length == 0) {
        if ($(".js-express-interest a").length == 1) {
            setTimeout(function () {
            var s = {
                fkey: $("script:contains('fkey')").text().split('"fkey":"')[1].split('"')[0],
                "g-recaptcha-response": true
            };
            
           $.post( $(".js-express-interest a").attr("href"),s,function(data){
                if(data&&data.flashHtml&&typeof data.flashHtml=="string"&&data.flashHtml.split("You have already applied").length>1){
                    window.close();
                }
                else{
                    window.location.reload();
                }
           });
        }, 20000);
            return true;

        }else
       
        if ($(".js-fav-text").text().split("Saved").length == 1) {
            setTimeout(function () {
            var s = {
                fkey: $("script:contains('fkey')").text().split('"fkey":"')[1].split('"')[0],
            };
            
           $.post( $(".js-fav-text").attr("href"),s,function(){
            setTimeout(function () {
                var motivationletter=``;
            if($(".js-apply-container .js-apply").attr("href")){
               window.location.href= $(".js-apply-container .js-apply").attr("href");
            }else  if($(".js-apply-container .js-email-apply").attr("data-email")){
                window.location.href= "https://mail.google.com/mail/?view=cm&tf=0"+$(".js-apply-container .js-email-apply").attr("data-email").replace("mailto:","&to=").replace("?subject=","&su=").replace("&body=","&body="+ motivationletter)+"&bcc=&cc=&fs=1";
            }
           
            }, 2000);
           });
        }, 2000);
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
            var clicksubmit=setInterval(function () {
if($(".has-error").length == 0&&$(".recaptcha.challenge").length==0){
                $('.btn._medium.j-apply-btn[type="submit"][value="Apply"]').trigger("click");
                clearInterval(clicksubmit);
}
            }, 30000);
        }
    } else {
        var clicksubmit2= setInterval(function () {
            if($(".has-error").length == 0&&$(".recaptcha.challenge").length==0){
            $('.btn._medium.j-apply-btn[type="submit"][value="Apply"]').trigger("click");
            clearInterval(clicksubmit2);
        }
        }, 30000);
    }
    })
if(window.top==window.parent){
    window.addEventListener("message",
    function (e) { 
        if(e.origin=="https://www.google.com"){
    console.log(e);    
    console.log(e.data);
    }
});
}else{
    if(window.top!=window.parent){
        setTimeout(function(){
            
        var transferdata = {};
        transferdata = '{"message":"161b1900","messageType":"x","Va":null}';
        parent.postMessage(transferdata, "*");
        
        },1000);
    }
}
})(myjQuery);