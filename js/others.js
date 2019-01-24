(function($) {
    var injs = function(location, callback) {
        var valid = false;
        var chances = location.split("|");
        for (var key in chances) {
            if (window.location.href.split(chances[key]).length > 1) {
                valid = true;
            }
        }
        if (valid && (location != "" || window.top == window.self)) {
            callback();
        }
    }
    injs("goodnews.com",
        function() {
         ////   window.location.reload();
        })
    injs("buy.mi.com",
        function() {
            $(document).ready(function() {

                jQuery(".J_bankCardCode").val("5369076451451649").trigger("blur");
                jQuery('[data-model="ccexpmon"]').val("06").trigger("change");
                jQuery('[data-model="ccexpyr"]').val("2021").trigger("change");
                jQuery('[data-model="ccname"]').val("Justin Jose").trigger("blur");
                jQuery('[data-model="ccvv"]').val("654").trigger("blur");
                $('.newcard-submit.J_linksign-customize button').click();
            })
        });

    ////injs("x",
    ////    function () {
    ////        setInterval(function () {
    ////            $("img").attr("src", "");
    ////            $("style*='background-image'").attr("style", "");
    ////            $("meta").remove();
    ////            $("title").remove();
    ////        })
    ////    });

    injs("hotstar",
        function() {
            var sheet = document.createElement('style');
            sheet.innerHTML =
                ".master-container { overflow:hidden; }.content-detail-header-container #HotstarPlayer{width:100%;height: auto;}";
            document.body.appendChild(sheet);
        });
    injs("jobstreet.com.sg",
        function() {
            if (window.delaySubmitForm && $("#apply-now-link:visible").length > 0) {
                delaySubmitForm();
                $("#apply-now-link").submit();
            }
        });
    injs("reed.co.uk",
        function() {
            setTimeout(function() {
                    $("#applyButtonSide").click();
                },
                5000);
        });
    injs("myjobstreet.jobstreet.com.sg",
        function() {
            $("#pitch_text")
                .val(
                    'My technical expertise also includes proficient experience in Dot Net, and advanced knowledge of Server-side and Client-side technologies (HTML/CSS, TypeScript, Javascript, jQuery, Angular, Bootstrap, Ajax) and Software Construction (Design Patterns). I am comfortable with various of web frameworks.');
            $("#btnAction").trigger("click");
        });

    injs("wearenolte.workable.com",
        function() {
            if (!$("#candidate_firstname").val()) {
                $(".js-linkedin-apply").click();
            } else {
                $("#resume_cache [data-toggle='modal']").click();
                setTimeout(function() {
                        $(".js-resume-picker").click();
                    },
                    1000);
            }
        });

    injs("aplitrak.com",
        function() {
            setTimeout(function() {
                    $("#applicant_name").val("Justin Jose");
                    $("#from_email").val("justnshalom@gmail.com");
                    $("#phone").val("919605656508");
                    $('[name="psa1"]').last().prop("checked", true);
                    $("#file").click();
                    $("body").on("change",
                        "[type=file]",
                        function() {
                            setTimeout(function() {

                                    $(".form-actions input").click();
                                },
                                5000);

                        });

                    if (window.location.href.split("submit.cgi").length > 1) {
                        window.close();
                    }
                },
                5000);
        });

    injs("accounts.google.com",
        function() {


            if ($('[data-third-party-email="team@stackoverflow.com"]').length > 0) {
                if ($('[data-authuser="1"]').length > 0) {
                    $('[data-authuser="1"]').trigger("click");
                } else {
                    $("#identifierId").val("justnshalom@gmail.com");
                    $("#identifierNext").click();
                    setTimeout(function() {
                            if ($('[data-email="justnshalom@gmail.com"]').length > 0) {
                                $("[name='password']").val("Kinglives@11");
                                $("#passwordNext").click();
                            }
                        },
                        5000);

                }

            }
            if ($('[data-third-party-email="info@truecaller.com"]').length > 0) {
                var currentauth = localStorage.getItem("authuser");
                if (currentauth && currentauth == "0") {
                    $('[data-authuser="1"]').trigger("click");
                    localStorage.setItem("authuser", 1);
                } else {
                    $('[data-authuser="0"]').trigger("click");
                    localStorage.setItem("authuser", 0);
                }
            }
        });
    injs("play.google.com",
        function() {
            if ($(".otainstall-nothanks-button").length > 0) {
                $(".otainstall-nothanks-button").trigger("click");
            }
        });


    injs("work|job|career|apply|vacancies|vacancy|application",
        function() {
            if (window.location.href.split("google").length == 1) {
                ////function for apply any links with apply now title
                var link = "";
                var valid = true;
                $(
                        'a[name*=apply],a[title*=apply],a:contains("apply"):contains("job"),a:contains("Apply"):contains("job"),a:contains("Apply"):contains("Job")')
                    .each(function() {
                        if (link != "") {
                            if (link != $(this).attr("href")) {
                                valid = false;
                            }
                        }
                        link = $(this).attr("href");
                    })
                if (valid && link != "" && $("input[type=text]:visible").length == 0) {
                    ////window.location.href=link;
                }

////function for apply any links with linkedin import button

                var linkedinselector =
                    $(
                        'a[class*=import][class*=linkedin],a:contains("import"):contains("linkedin"),a:contains("apply"):contains("linkedin"),a:contains("Apply"):contains("LinkedIn")');
                if (linkedinselector.length > 0 && !sessionStorage.getItem("linkedinimported")) {

                    window.location.href = linkedinselector.attr("href");
                    sessionStorage.setItem("linkedinimported", true);
                }

            }
        });
    injs("monster",
        function() {
            $("body").on("click",
                "section.card-content:not('.is-applied')",
                function() {
                    setTimeout(function() {
                            if ($("#PrimaryJobApply").length > 0 && $("#PrimaryJobApply").attr("href")) {
                                var popup = window.open($("#PrimaryJobApply").attr("href"), '_blank');
                                window.focus();
                            } else {
                                $("#PrimaryJobApply").parent().click();
                            }
                        },
                        5000);

                });

            $("#CoverLetter").addClass("is-expanded");
            setTimeout(function() {
                    $("#applyForm").submit();
                },
                10000)
            setTimeout(function() {
                    window.close();
                },
                100000);
        });
    injs("bayt",
        function() {

            $("body").on("click",
                ".card a",
                function(e) {
                    e.preventDefault();
                    var newindow = window.open($(this).attr("href"), "_blank");
                    alert("Window opened in new tab");
                });
            setTimeout(function() {
                    if ($("#apply_1 #applyLink_1:visible").length > 0) {
                        window.location.href = $("#apply_1 #applyLink_1").attr("href");
                    } else if ($("a.btn:contains(Continue):visible").length > 0) {
                        window.location.href = $("a.btn:contains(Continue):visible").attr("href");
                    } else if ($("#feedBackMessages .t-success:visible").length > 0 ||
                        $(".application-sent:visible").length > 0 ||
                        window.location.href.split('https://www.bayt.com/en/job/apply/local').length > 1) {
                        window.close();
                    } else {
                        $("#mobPhoneAreaCode").val(91).trigger("change");
                        $("#applyToJobForm_visa_status").val(7).trigger("change");
                        $("#applyToJobForm_phoneNum").val("9605656508").trigger("change");

                        if ($("footer.form-footer [name=submit]:visible").length > 0 &&
                            $("#applyToJobFormID .form-item").length <= 4) {
                            $("footer.form-footer [name=submit]:visible").click();
                        }
                    }

                },
                5000);
        });
    injs("smartrecruiters",
        function() {
            $("#st-apply").click();
            setTimeout(function() {
                    $("#st-connect-linkedin").click();
                },
                5000)
            $("body").on("click",
                "#js-resume-upload",
                function() {

                    setTimeout(function() {
                            $("#js-popup-form").submit();
                        },
                        10000)
                })
        });

    injs("www.cricbuzz.com/live-cricket-scores", function () {
        var notInterval=setInterval(function() {

            Notification.requestPermission().then(function(result) {
                if (result === 'denied') {
                    console.log('Notification permission not allowed');
                    return;
                }
                if (result === 'default' || result === 'granted') {
                    var notificationbody = $('[ng-include="'+"'commentary'"+'"]:first').text();
                    var options = {
                        body: notificationbody,
                        tag: 'soManyNotification',
                    }
                    var lastnotification = new Notification($(".cb-min-bat-rw:last").text(), options);
                    lastnotification.onclick = function (x) {
                        clearInterval(notInterval);

                    }
                }
            });
        },2000);
    });
    
    injs("pay.vivo.com", function () {
        $(".pay-btn").trigger("click");
    })
    injs("shop.vivo.com/in/cart", function () {
        setInterval(function() {
            jQuery("#btn-submit").trigger("click");
            },
            5000);
    })
    ////rbl

    
    injs("RTN_card", function () {
        setTimeout(function() {

            $("#ccrdno [name='CardNum1'],#rccrdno [name='ReCardNum1']").val(5369).removeAttr("onkeypress").removeAttr("onkeyup");
            $("#ccrdno [name='CardNum2'],#rccrdno [name='ReCardNum2']").val(0764).removeAttr("onkeypress").removeAttr("onkeyup");
            $("#ccrdno").prepend("0764");
            $("#ccrdno [name='CardNum3'],#rccrdno [name='ReCardNum3']").val(5145).removeAttr("onkeypress").removeAttr("onkeyup");
            $("#ccrdno [name='CardNum4'],#rccrdno [name='ReCardNum4']").val(1649).removeAttr("onkeypress").removeAttr("onkeyup");
            

        }, 2000)

    })
    ////Remove ads
    injs("com", function () {
        var removei = 0;
        var removeads=function()
        {
            $(".adsbygoogle,[src*=disqusads],[id*=rcjsload],[id*=native_rec],[id*=div-clmb],[id*=taboola],[id*=outbrain],.advertisement,[onload*=googleads],[src*=googleads],[src*=googlesyndication],[data-google-query-id]").remove();
        }
        
        var removeint=setInterval(function () {
            removeads();
            removei++;
                if (removei > 500) {
                    clearInterval(removeint);
                }
            },
            1000);
    })
    injs("shop.vivo.com/in/product", function () {
        setInterval(function () {
                
            if (jQuery(".J_prodinf_addcart,.J_prodinf_addcart_mini").find(".J_btn_addtocart_fast").length == 0) {
                setTimeout(function() {
                   /// window.location.reload();
                },1000)
            }
                jQuery(".J_prodinf_addcart,.J_prodinf_addcart_mini").find(".J_btn_addtocart_fast").trigger("click");
            },
            500);
    })
    injs("ccavenue.com", function () {
        setInterval(function() {
                $("#creditCardNumber").val("5459648809737290").trigger("change");
                $("#CVVNumberCreditCard").val("915");
                $("#expiryYearCreditCard").val("2020");
                $("#expiryMonthCreditCard").val("05");
                $("#creditCardNumber1").val("Justin Jose");
                ////if ($(".SubmitBillShip:visible").length > 0) {
                    
                ////    $(document).trigger({
                ////        type: 'click',
                ////        target: $(".SubmitBillShip:visible")[0]
                ////    });
                ////}
            },
            1000);
    })
injs("linkedin",function(){
  
  setTimeout(function () {
      $("#oauth__auth-form__submit-btn").click();
      $(".jobs-s-apply__button:visible").click();
      setTimeout(function () {
          $(".jobs-s-apply__button:visible").click();
      }, 2000)
  },2000)
})
var linkcontains=function(word,tag){
  return tag+":contains('"+word+"')";
}
var attrcontains=function(word,tag,attr){
  return tag+"["+attr+"*='"+word+"']";
}
var disabledwords=["sex","porn","movie","film","cinema","actress","actor","hollywood","mollywood","bollywood","entertainment","fashion","lifestyle","models","taboola","celebrity","adult","romance","kiss","romantic","suck","fuck","xxx"];
$.fn.exceptchild = function () {
  if (this.length !== 0) {
      var html = $(this)[0].outerHTML;
      return $(html).find("*").remove().end().text();
  }
  return "";
};
var generateselectors=function(tag,attr){
  var selectors=[];
  for(var wordindex in disabledwords){
    var word=disabledwords[wordindex];
    var capitalize = word.charAt(0).toUpperCase() + word.slice(1);
                        var upper = word.toUpperCase();
                        var lower = word.toLowerCase();
                        if(attr){
                        selectors.push(attrcontains(capitalize,tag,attr));
                        selectors.push(attrcontains(upper,tag,attr));
      selectors.push(attrcontains(lower,tag,attr));               
      selectors.push(attrcontains(word,tag,attr));
                        }else{
                          selectors.push(linkcontains(capitalize,tag));
                        selectors.push(linkcontains(upper,tag));
      selectors.push(linkcontains(lower,tag));      
      selectors.push(linkcontains(word,tag));
                        }
    }
    return selectors;
}
var timeinterval=2000;
var removecontent=true;
function clearbyattributeselectors(tagname,attribute){

  var selectors=generateselectors(tagname,attribute);
  var removefilter=$(selectors.join(",")).not("[data-"+tagname.replace("*","star")+attribute+"-processedbyautojstoremoveinapropriatecontent]");
  removefilter.attr("data-"+tagname.replace("*","star")+attribute+"-processedbyautojstoremoveinapropriatecontent",true);
  if(removecontent){
    removefilter.remove();
    }else{
      removefilter.removeAttr(attribute);
      removefilter.html("opacity","0.01");
    }
}
var clearcontent=function(){

var selectors=generateselectors("*");
var removefilter=$(selectors.join(",")).not("html,body,link,meta,title,script,head,[data-content-processedbyautojstoremoveinapropriatecontent]");
if(removefilter.length>0){
  timeinterval=2000;
  removefilter.each(function(){
    $(this).attr("data-content-processedbyautojstoremoveinapropriatecontent",true);
    
    if($(this).find("*").length==0||($(this).exceptchild()&&new RegExp(disabledwords.join("|")).test($(this).exceptchild()))){
      if(removecontent){
      $(this).remove();
      }else{
        $(this).css("opacity","0.05");
      }

    }
  });
}else{
  timeinterval+=2000;
}

clearbyattributeselectors("a","href");
clearbyattributeselectors("div","data-async-context");
clearbyattributeselectors("img","src");
clearbyattributeselectors("*","style");
clearbyattributeselectors("*","title");

if(timeinterval>15000){
  timeinterval=15000;
}
  setTimeout( clearcontent,timeinterval );  
}
    $(document).on('DOMNodeInserted',
        function(e) {
            ////clearcontent();
        });
////clearcontent();
////setTimeout( clearcontent,timeinterval );
})(myjQuery);