﻿// // var element = document.getElementsByClassName("apply-captcha");
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
    $(".listResults > [data-jobid]").each(function () {
        var th = $(this);
        if ($(this).find(".-job-summary .s-link").attr("href")) {
            var link = $(this).find(".-job-summary .s-link").attr("href").split("?")[0];
            if (cacheappliedlinks.indexOf(link) != -1 || $(this).find(".fs-caption").text() == "Applied") {
                th.css("background-color", "black");
                th.css("border", "1px solid black");
            }
        }
    });
    $("body").on("click", ".description", function () {
        var timeout = 0;
        $(".listResults > [data-jobid]").each(function () {
            var th = $(this);
            if ($(this).find(".-job-summary .s-link").attr("href")) {
                var link = $(this).find(".-job-summary .s-link").attr("href").split("?")[0];
                if (cacheappliedlinks.indexOf(link) == -1 && $(this).find(".fs-caption").text() != "Applied") {
                    var tags = $(this).find(".post-tag").first().parent().text().toLowerCase();
                    if (tags.split(".net").length > 1 ||
                        tags.split("wordpress").length > 1 ||
                        tags.split("c#").length > 1 ||
                        tags.split("angularjs").length > 1 ||
                        tags.split("jquery").length > 1) {
                        if ($(this).text().split("india").length == 1) {
                            if ($(this).text().split("Crossover").length == 1) {
                                cacheappliedlinks.push(link);
                                var joblink = $(this).find(".-job-summary .s-link").attr("href");
                                setTimeout(function() {
                                        window.open(joblink, '_blank');
                                        th.css("background-color", "black");
                                        th.css("border", "1px solid black");
                                    },
                                    timeout);
                                timeout += 120000;
                            }
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
            }, 120000);
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
           
            }, 120000);
           });
            }, 120000);
        } else {
            window.close();
        }  
    }
    if ($(".-previously-applied-icon").length == 1) {
        window.close();
    }
    if($(".major-provider.google-login").length>0){
        $(".major-provider.google-login").click();
        return;
    }
    var timeout=localStorage.getItem("timeoutforapply");


    if ($(".has-error").length == 0 && $(".message:visible").length == 0) {
////login-link
        if ($('.btn._medium.j-apply-btn[type="submit"][value="Apply"]').length > 0) {
            $("#CandidatePhoneNumber").val("9605656508");
                
           
            if($(".login-link").length>0){
                window.location.href=$(".login-link").attr("href");
                return;
            }
            var clicksubmit=setInterval(function () {
if($(".has-error").length == 0&&$("iframe[title='recaptcha challenge']").length==0){

   
                $('.btn._medium.j-apply-btn[type="submit"][value="Apply"]').trigger("click");
                clearInterval(clicksubmit);
            }else if($("iframe[title='recaptcha challenge']").length>0){
                var fs = window.RequestFileSystem || window.webkitRequestFileSystem;
                if (!fs) {
                  result.textContent = "check failed?";
                  return;
                }
                fs(window.TEMPORARY, 100, function(fs) {
                    window.postMessage({ method: "AutoOpenIncogitowindow", url: window.location.href},"*");
                    clearInterval(clicksubmit2);
                    setTimeout(function(){

                       window.close();
                    },4000);
                }, function(err) {
                  result.textContent = "it seems like you are in incognito mode";
                });
              }
            }, 120000);
        }
    } else {
        var clicksubmit2= setInterval(function () {
            if($(".has-error").length == 0&&$("iframe[title='recaptcha challenge']").length==0){
            $('.btn._medium.j-apply-btn[type="submit"][value="Apply"]').trigger("click");
            clearInterval(clicksubmit2);
            }else{
                if($("iframe[title='recaptcha challenge']").length>0){
                    var fs = window.RequestFileSystem || window.webkitRequestFileSystem;
                    if (!fs) {
                      result.textContent = "check failed?";
                      return;
                    }
                    fs(window.TEMPORARY, 100, function(fs) {
                        window.postMessage({ method: "AutoOpenIncogitowindow", url: window.location.href},"*");
                        clearInterval(clicksubmit2);
                        setTimeout(function(){
    
                           window.close();
                        },4000);
                    }, function(err) {
                      result.textContent = "it seems like you are in incognito mode";
                    });
            }
            }
        }, 120000);
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
       //// parent.postMessage(transferdata, "*");
        
        },1000);
    }
}
})(myjQuery);