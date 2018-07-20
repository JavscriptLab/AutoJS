
(function ($) {



    function fillbycondition(keys, value,notvalue) {
        $.each(keys.split("|"),
          function (i, v) {
              var selectors = {};
              var selectorfirsttime = true;
              var andconditions = v.split("&");
              $.each(andconditions,
                function (i1, v1) {
                    var closestselector = v1.split(">");
                    var closestselectorstring = "";
                    if (closestselector.length > 1) {
                        closestselectorstring = closestselector[0];
                        v1 = closestselector[1];
                    } else {
                        closestselector = [];
                    }
                    var capitalize = v1.charAt(0).toUpperCase() + v1.slice(1);
                    var upper = v1.toUpperCase();
                    var lower = v1.toLowerCase();
                    
                    var valuessuggestions = [v1, capitalize,upper, lower];
                    var closestsuggestions = [];
                    if (closestselectorstring) {
                        closestsuggestions = [closestselectorstring, closestselectorstring.toLowerCase(), closestselectorstring.toUpperCase()];
                    }
                    var selectorssuggestions = ["[id*='{{valuehere}}']", "[class*='{{valuehere}}']", "label:contains('{{valuehere}}')", "[name*='{{valuehere}}']", "[placeholder*='{{valuehere}}']"];

                    if (closestselectorstring) {
                        var newselectorssuggestions = [];
                        $.each(closestsuggestions, function (i5, closestsuggestion) {
                        $.each(selectorssuggestions, function (i4, selectorssuggestion) {
                            
                            $.each(selectorssuggestions, function (i6, selectorssuggestion2) {
                                newselectorssuggestions.push(selectorssuggestion.replace("{{valuehere}}", closestsuggestion) + " " + selectorssuggestion2);
                            })
                        })
                        })
                      ////  selectorssuggestions = newselectorssuggestions;;
                        }

                    var tempselectors = selectors;
                    selectors = {};
                    $.each(selectorssuggestions, function (i4, selectorssuggestion) {

                    if (selectorfirsttime) {
                        for (var i3 = 0; i3 <  valuessuggestions.length ; i3++) {
                            var valuessuggestion = valuessuggestions[i3];
                            var selectorstring = selectorssuggestion.replace("{{valuehere}}", valuessuggestion);
                           
                                
                                if (selectors[selectorssuggestion + i3]) {

                                    selectors[selectorssuggestion + i3] += selectorstring;
                                } else {

                                    selectors[selectorssuggestion + i3] = selectorstring;
                                }
                            

                        }
                    } else {
                      
                        for (var key in tempselectors) {
                            if (tempselectors.hasOwnProperty(key) && key.startsWith(selectorssuggestion)) {
                               for (var i3 = 0; i3 < valuessuggestions.length ; i3++) {
                                   
                                        selectors[key +"_"+ i3] = tempselectors[key];
                                        var valuessuggestion = valuessuggestions[i3];
                                        var selectorstring = selectorssuggestion.replace("{{valuehere}}", valuessuggestion);
                                        if (selectors[key + "_" + i3]) {

                                            selectors[key + "_" + i3] += selectorstring;
                                        }
                                  

                                }


                            }
                        }
                    }
                    });
                    selectorfirsttime = false;
                    ////var arr = [];

                    ////for (var key in selectors) {
                    ////    if (selectors.hasOwnProperty(key)) {
                    ////        arr.push({ key: key, val: selectors[key] });
                    ////    }
                    ////}
                    ////arr = arr.sort(function (a, b) {
                    ////    return a.val.localeCompare(b.val);
                    ////});
                    ////selectors = {};
                    
                    ////for (var i = 0; i < arr.length; ++i) {
                    ////    selectors[arr[i].key] = arr[i].val;
                    ////}
                    
                   
                });
              if (i == "Current&Pin&Code") {
                  
              }
              var selectorsarray = [];
              $.each(selectors,
                function (i2, v2) {
                    selectorsarray.push(v2);
                });
              selectorsarray=selectorsarray.sort();
              $(selectorsarray.join(",")).not("[type=hidden]").filter(":visible").each(function () {
                  
                  var input = $(this);
                  input.attr("data-processed-by-auto-js", true);
                  if ($(this).prop("tagName").toLowerCase() == "label") {
                      if ($(this).attr("for")) {
                          input = $("[id='" + $(this).attr("for")+"']");
                      } else if ($(this).parent().find("input:visible,select:visible,textarea:visible").not("[type=hidden]").length == 1) {
                          input = $(this).parent().find("input:visible,select:visible,textarea:visible").not("[type=hidden]");
                      }
                  }
                  var allowtofilldropdown=true;
                  if (input&&input.length>0&&input.prop("tagName").toLowerCase() == "select") {
                      var capitalize = value.charAt(0).toUpperCase() + value.slice(1);
                      
                      var selectableoption = input.find("option:contains('" + value + "'),option:contains('" + capitalize + "'),option:contains('" + value.toLowerCase() + "'),option:contains('" + value.toUpperCase() + "'),option[value='" + value + "']");
                      if(notvalue){
                        var notvaluecapitalize = notvalue.charAt(0).toUpperCase() + notvalue.slice(1);
                        selectableoption=selectableoption.not("option:contains('" + notvalue + "'),option:contains('" + notvaluecapitalize + "'),option:contains('" + notvalue.toLowerCase() + "'),option:contains('" + notvalue.toUpperCase() + "'),option[value='" + notvalue + "']");
                      }
                      if (selectableoption.length > 0) {
                          if (selectableoption.attr('value')) {
                              value = selectableoption.attr('value');
                          } else {
                              value = selectableoption.text();
                          }
                        }else{
                            allowtofilldropdown=false;
                        }
                  }
                  input = input.filter(":visible").not("[type=file]")
                  if (allowtofilldropdown&&((input&&input.length>0 && !input.val()) || input.attr("data-value-set-by-auto-js"))) {
                      if (input.hasClass("hasDatepicker") && input.attr("id") && jQuery("#" + input.attr("id")).datepicker) {
                          input.attr("data-value-set-by-auto-js", "true");
                          jQuery("#" + input.attr("id")).datepicker().datepicker("setDate", new Date(value));
                      } else {
                          if(input.attr("type")=="number"){
                            value=value.replace(/[^0-9]/ig,"");
                          }
                          input.val(value).attr("data-value-set-by-auto-js", "true").trigger("change");
                      }
                  }


              });
          });

    }
    function css(selector, stylevalue) {
        $("head")
          .append("<style class='autostyles' type='text/css'>" + selector + "{ " + stylevalue + "}</style>");
    }
    var dominserti = 0;
    var proposal = `I'm a senior software engineer in DotNet and Php. I have extensive experience in building high-quality websites.

My experiences range from building responsive mobile sites that work well, cross-browser to building scalable sites for different industries like financial, e-commerce, CMS, HR management, event management etc. I like working on projects with a team that cares about creating beautiful, unique and usable interfaces. I specialize in and am passionate about creating intelligent designs using simple, short, smart and reusable scripts.

It's important for me to build long-term relationships with clients, so I'm primarily looking for long-term projects. When it comes to clients, their ideas are of utmost importance, and I love to apply my imagination to bring their vision to life.

I'm flexible with my working hours and am happy to work closely with any existing freelancers you work with.

I can promise me that whatever your idea, I’ll be able to deliver a satisfying result on time and on budget. I also welcome any opportunity to showcase my coding abilities.

I look forward to hearing from you!
`;
    var motivationletter = `Dear HR,
         I'm a senior software engineer in DotNet C#. I have extensive experience in building high-quality websites.
         My experiences range from building responsive mobile sites that work well, cross-browser to building scalable sites for different industries like financial, e-commerce, CMS, HR management, event management etc. I like working on projects with a team that cares about creating beautiful, unique and usable interfaces. I specialize in and am passionate about creating intelligent designs using simple, short, smart and reusable scripts.

         My employers have commended me for my high level of interpersonal skills and naturally engaging personality. My motivations include learning new things and the challenge of meeting key targets. My current and previous managers can learn more about my ability to meet the needs of this job.
         I understand that you are looking for a role for this role. I do, however, believe that my motivation, commitment, and pre-existing skills will allow you to fit into your work environment and immediately start supporting the needs of your organization,
         I have attached a copy of my resume for your consideration. I can be contacted at any time.
         Thanking you for your time,

         Justin Jose
         Mobile. + 919605656508`;
    function processformfill(timeout) {
        timeout=!timeout?10000:timeout;
        dominserti++;
        var localdominserti = dominserti;
        
        setTimeout(function () {
            if (localdominserti == dominserti) {
                if ($("input,select,textarea").filter(":visible").not("[data-processed-by-auto-js]").length > 0) {
                    $("input,select,textarea").filter(":visible").attr("data-processed-by-auto-js", true);

                


                    fillbycondition("Id&Card", "NMZ0092247");
                    fillbycondition("title", "Mr");
                    fillbycondition("password", "KingLives@11");
                    fillbycondition("phone|mobile|telefon|Telefoon", "+91");
                    fillbycondition("phone|mobile|telefon|Telefoon", "India");
                    fillbycondition("phone|mobile|telefon|Telefoon", "+919605656508");
                    fillbycondition("full&Name|Full&name", "Justin Jose");
                    fillbycondition("first&Name|vor&Name|name|Voor&naam", "Justin");
                    fillbycondition("last&Name|nach&Name|sur&Name|Achter&naam", "Jose");
                    fillbycondition("user&Name|user&name", "justnshalom");
                    fillbycondition("birth|dob|GeboorteDatum|bday", "01");                    
                    fillbycondition("birth|dob|GeboorteDatum|bday", "Jun");                    
                    fillbycondition("birth|dob|GeboorteDatum|bday", "June");                   
                    fillbycondition("birth|dob|GeboorteDatum|bday", "1988");                    
                    fillbycondition("birth|dob|GeboorteDatum|bday", "1988-06-01");                    

                  
                    fillbycondition("Religion", "Christian");
                    fillbycondition("Marital", "Married");

                    fillbycondition("nationality", "Other");
                    fillbycondition("nationality", "Non US");
                    fillbycondition("nationality", "Non EU");
                    fillbycondition("nationality", "Indian");
                    fillbycondition("Country", "Other");
                    fillbycondition("Country", "India","British India");
                    fillbycondition("State", "KL");
                    fillbycondition("State", "Kerala");
                    fillbycondition("District", "Kottayam");
                    
                    fillbycondition("strasse|address|Adres", "Koonamackel House,  South Pampady PO");
                    fillbycondition("location|City|Woonplaats", "Kottayam");
                    fillbycondition("plz|Pin&Code|Zip&Code|Post&Code", "686521");

                    fillbycondition("Current&District", "Ernakulam");
                    fillbycondition("Current&address", `Livra No 14,
Link Valley,
Opposite Kusumagiri Hospital,
Kakkanad`);

                    fillbycondition("Current&Pin&Code|Current&Zip&Code|Current&Postal&Code", "682030");
                    fillbycondition("Current&City", "Kochi");
                    
                    fillbycondition("skype", "justinshalom");
                    fillbycondition("linkedin|LinkedIn", "https://linkedin.com/in/justnshalom/");
                    fillbycondition("Git&Hub", "https://github.com/JavscriptLab/");
                    fillbycondition("Website|WebSite", "http://justinshalom.com/");
                    fillbycondition("twitter", "https://twitter.com/justnshalom");
                    fillbycondition("stackoverflow", "https://stackexchange.com/users/3252569/justin-jose");
                    
                    fillbycondition("Education>Major", "Computer Applications");
                    fillbycondition("Education>Start", "2010 August");
                    fillbycondition("Education>End", "2013 August");
                    fillbycondition("Gender|Geslacht", "Male");
                    fillbycondition("Education>gpa", "6%");
                    fillbycondition("Institution", "Others");
                    fillbycondition("Institution", "MG University");
                    fillbycondition("job&Title", "Senior Software Engineer");
                    fillbycondition("Experience", "5");
                    
                    fillbycondition("Highest&Education", "Master");
                    fillbycondition("Qualification", "MCA");
                    fillbycondition("Expected&Salary", "As Per Industrial Standard");
                    fillbycondition("current&Employer|Employer", "Fingent Technologies");
                    fillbycondition("Cover&Letter&Id","Cover Letter 2");
                    fillbycondition("motivation|cover&Letter|message&Employer|message&job|comment&employer|comment&job",motivationletter );
                    ////fillbycondition("job>comment",motivationletter );
                    fillbycondition("proposal",proposal );
                    
fillbycondition("mail", "justnshalom@gmail.com");
fillbycondition("Passport", "K7226562");
fillbycondition("Passport&Expiry", "02/01/2023");
fillbycondition("Passport>Expiry", "02/01/2023");
fillbycondition("Issue&Date", "03/01/2013");
fillbycondition("Place&Issue", "Cochin");
fillbycondition("Aadhar", "435634958632");
fillbycondition("Pan&Card", "AUSPJ1560G");
fillbycondition("phone|mobile|telefon", "+919605656508");

                }
            }
        }, timeout);
    }

   
    // // $(document).on('DOMNodeInserted', function (e) {
      //// processformfill();
       
    if (window.location.href.split("mail.google.com").length > 1) {
        ////Auto Send Mail when coming from stackoverflow
        var mailmessagesend=setInterval(function() {
                if ($("div[aria-label='Message Body']").length > 0) {
                    $("div[aria-label='Message Body']").html(motivationletter.replace(/\r?\n/g, "<br />") + "<br/>" + $("div[aria-label='Message Body']").html());

                    ////$("div[aria-label*='Send']").click();
                    ////window.close();
                    clearInterval(mailmessagesend);
                }
            },
            2000);
        

    }
    // // })
    // // $(document).trigger('DOMNodeInserted');
    $("#resumator-apply-with-linkedin-wrapper a").click();
    $("#resumator-address-value").val("Koonammakkel House");
    $("#resumator-city-value").val("Kottayam");
    $("#resumator-state-value").val("Kerala");
    $("#resumator-postal-value").val("685521");
    $("#CoverLetter").val(motivationletter);

    $("[type=checkbox][name*=accept],[type=checkbox][value*=accept],[type=checkbox][value*=terms]").prop("checked", "true");
    $("[type=password]").val("KingLives@11");

    
    
    // // css(".autojsicon", "position: fixed;z-index: 99999999;background-color: #fffdfd;width: 31px;height: 31px;right: 0px;top: 89px;border-radius: 36px;color: black;cursor: pointer;    text-align: center;font-size: 21px;");
    // // css(".autojs", "display:none;position: fixed;z-index: 99999999999;background-color: #fffdfd;width: 20%;max-width:250px;min-width:150px;height: 100%;overflow-y:scroll;right: 0px;top: 0px;color: black;");
    // // $("body").append('<div class="autojsicon">A</div><div class="autojs ">' +
    // //   '<a href="" class="autojsiconclose">Close</a>' +
    // //   '</div>');
    // // if (localStorage.getItem("autojsshow")) {
    // //     $(".autojs").show();
    // // }

    // // $("body")
    // //   .on("click", ".autojsicon",
    // //     function () {
    // //         $(".autojs").show();
    // //         localStorage.setItem("autojsshow", true);
    // //     });
          $(document)
          .on("keyup",
            function (e) {
                if (e.originalEvent) {
                  if (e.ctrlKey) {
                      if (e.keyCode == 81) { // 'A' or 'a'
                    processformfill(1);   
                  }
                }
                }
            });


    // // $("body")
    // //     .on("blur", "[data-value-set-by-auto-js],[data-processed-by-auto-js]",
    // //       function (e) {
    // //           if (e.originalEvent) {
    // //               $(this).removeAttr("data-value-set-by-auto-js").removeAttr("data-processed-by-auto-js");
    // //               if (!$(this).val()) {
    // //              /// processformfill(0);   
    // //             }
    // //             }
    // //       });
    // // $("body")
    // //   .on("click", ".autojsiconclose",
    // //   function (e) {
    // //       e.preventDefault();
    // //       $(".autojs").hide();
    // //       localStorage.removeItem("autojsshow");
    // //   });

    // // $("body")
    // //   .on("focus click", "input,select,textarea",
    // //   function (e) {
    // //       return true;
    // //       var th = $(this);
    // //       var selectors = getgeneratedselectors(th);
    // //       th
    // //         .closest("div")
    // //         .css("position", "relative")
    // //         .append(
    // //           '<div class="profiledetails" style="position: absolute;width: 100%;top: 78px;z-index: 23;background-color: rgba(255, 255, 255, 0.94);min-height: 32px;padding: 15px;box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.22);">' +
    // //         '');
    // //       $(".profiledetails");
    // //   });
    // // $(window).click(function () {
    // //     $(".reppathmaker").remove();
    // // });
    // // $("body").on("click",
    // //   ".reppath,.urlmaker,.reppathmaker",
    // //   function (e) {
    // //       e.stopPropagation();

    // //   });



    })(window.myjQuery?myjQuery:jQuery);