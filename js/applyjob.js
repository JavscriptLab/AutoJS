
(function ($) {



    function fillbycondition(keys, value) {
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
                  debugger;
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
                          input = $("#" + $(this).attr("for"));
                      } else if ($(this).parent().find("input:visible,select:visible,textarea:visible").not("[type=hidden]").length == 1) {
                          input = $(this).parent().find("input:visible,select:visible,textarea:visible").not("[type=hidden]");
                      }
                  }
                  if ($(this).prop("tagName").toLowerCase() == "select") {
                      var capitalize = value.charAt(0).toUpperCase() + value.slice(1);
                      var selectableoption = input.find("option:contains('" + value + "'),option:contains('" + capitalize + "'),option:contains('" + value.toLowerCase() + "'),option:contains('" + value.toUpperCase() + "'),option[value='" + value + "']")
                      if (selectableoption.length > 0) {
                          if (selectableoption.attr('value')) {
                              value = selectableoption.attr('value');
                          } else {
                              value = selectableoption.text();
                          }
                      }
                  }
                  input = input.filter(":visible").not("[type=file]")
                  if ((input&&input.length>0 && !input.val()) || input.attr("data-value-set-by-auto-js")) {
                      if (input.hasClass("hasDatepicker") && input.attr("id") && jQuery("#" + input.attr("id")).datepicker) {
                          input.attr("data-value-set-by-auto-js", "true");
                          jQuery("#" + input.attr("id")).datepicker().datepicker("setDate", new Date(value));
                      } else {
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
    function processformfill() {
        dominserti++;
        var localdominserti = dominserti;
        
        setTimeout(function () {
            if (localdominserti == dominserti) {
                if ($("input,select,textarea").filter(":visible").not("[data-processed-by-auto-js]").length > 0) {
                    $("input,select,textarea").filter(":visible").attr("data-processed-by-auto-js", true);
                    fillbycondition("Id&Card", "NMZ0092247");
                    fillbycondition("title", "Mr");
                    fillbycondition("password", "KingLives@11");
                    fillbycondition("phone|mobile|telefon", "+919605656508");
                    fillbycondition("full&Name|Full&name", "Justin Jose");
                    fillbycondition("first&Name|vor&Name|name", "Justin");
                    fillbycondition("last&Name|nach&Name|sur&Name", "Jose");
                    fillbycondition("user&Name|user&name", "justnshalom");
                    fillbycondition("birth|dob", "1988-06-01");                    
                    fillbycondition("gender", "Male");
                    fillbycondition("Religion", "Christian");
                    fillbycondition("Marital", "Married");

                    fillbycondition("nationality", "Indian");
                    fillbycondition("Country", "India");
                    fillbycondition("State", "Kerala");
                    fillbycondition("District", "Kottayam");
                    fillbycondition("location|City", "Kottayam");
                    fillbycondition("strasse|address", "Koonamackel House,  South Pampady PO");
                    fillbycondition("plz|Pin&Code|Zip&Code|Postal&Code", "686521");

                    fillbycondition("Current&District", "Ernakulam");
                    fillbycondition("Current&address", `Livra No 14,
Link Valley,
Opposite Kusumagiri Hospital,
Kakkanad`);

                    fillbycondition("Current&Pin&Code|Current&Zip&Code|Current&Postal&Code", "682030");
                    fillbycondition("Current&City", "Kochi");

                    fillbycondition("linkedin|LinkedIn", "https://linkedin.com/in/justnshalom/");
                    fillbycondition("GitHub", "https://github.com/JavscriptLab/");
                    fillbycondition("Website|WebSite", "http://justinshalom.com/");



                    fillbycondition("Education>Major", "Computer Applications");
                    fillbycondition("Education>Start", "2010 August");
                    fillbycondition("Education>End", "2013 August");
                   
                    fillbycondition("Education>gpa", "6%");
                    fillbycondition("Education>Institution", "MG University");
                    fillbycondition("job&Title", "Senior Software Engineer");
                    fillbycondition("Experience", "5");
                    fillbycondition("Qualification", "MCA");
                    fillbycondition("Expected&Salary", "As Per Industrial Standard");
                    fillbycondition("current&Employer|Employer", "Fingent Technologies");
var motivationletter=`Dear HR,
As a young and motivated individual, I am extremely interested to submit an application for the position of Software Engineer in your Company.
In November 2013, I completed my studies in Master of Computer Applications ( MCA ). This has given me a range of practical capabilities that will meet the needs of this role.
While completing my MCA, I worked full-time as a Trainee for Hightrax. My responsibilities in this role included providing support for clients and complete their projects in .Net. After that, I worked full-time as a Junior Software Engineer for Caxita and am now a Senior Software Engineer. My responsibilities in this role included developing their Web application projects. This position has given me key employability skills while also allowing me to experience working in a professional and fast-paced work environment.
With regard to my ability to meet the specific requirements of this job:
Fast Learning: Fast Learning and  Implementation.
Programming Logic: Not become stuck in any situation. Have good logic and creative ideas.
Support Others: Support everyone to solve issues and improve knowledge.
My employers have commended me for my high level of interpersonal skills and naturally engaging personality. My motivations include learning new things and the challenge of meeting key targets. My current and previous managers can be contacted to provide more information about my ability to meet the needs of this job.
I understand that you will receive a large number of applications for this role. I do, however, believe that my motivation, commitment and pre-existing skills will allow me to fit into your work environment and immediately start supporting the needs of your organisation.
I would appreciate the opportunity to meet with you to discuss my application at an interview. I have attached a copy of my resume for your consideration. I can be contacted at all times on the details provided above.
Thanking you in advance for your time,

Justin Jose
Mobile.+919605656508`;
                    fillbycondition("motivation|cover&Letter|message&Employer|job>comment",motivationletter );
                    fillbycondition("job>comment",motivationletter );


fillbycondition("Cover&Letter&Id","Cover Letter 2");
fillbycondition("mail", "justnshalom@gmail.com");
fillbycondition("Passport", "K7226562");
fillbycondition("Passport&Expiry", "02/01/2023");
fillbycondition("Passport>Expiry", "02/01/2023");
fillbycondition("Issue&Date", "03/01/2013");
fillbycondition("Place&Issue", "Cochin");
fillbycondition("Aadhar", "435634958632");
fillbycondition("Pan&Card", "AUSPJ1560G");


                }
            }
        }, 5000);
    }

   
    $(document).on('DOMNodeInserted', function (e) {
        processformfill();
       
           
    })
    $(document).trigger('DOMNodeInserted');
    $("#resumator-apply-with-linkedin-wrapper a").click();
    $("#resumator-address-value").val("Koonammakkel House");
    $("#resumator-city-value").val("Kottayam");
    $("#resumator-state-value").val("Kerala");
    $("#resumator-postal-value").val("685521");


    $("[type=checkbox][name*=accept],[type=checkbox][value*=accept],[type=checkbox][value*=terms]").prop("checked", "true");
    $("[type=password]").val("KingLives@11");
    css(".autojsicon", "position: fixed;z-index: 99999999;background-color: #fffdfd;width: 31px;height: 31px;right: 0px;top: 89px;border-radius: 36px;color: black;cursor: pointer;    text-align: center;font-size: 21px;");
    css(".autojs", "display:none;position: fixed;z-index: 99999999999;background-color: #fffdfd;width: 20%;max-width:250px;min-width:150px;height: 100%;overflow-y:scroll;right: 0px;top: 0px;color: black;");
    $("body").append('<div class="autojsicon">A</div><div class="autojs ">' +
      '<a href="" class="autojsiconclose">Close</a>' +
      '</div>');
    if (localStorage.getItem("autojsshow")) {
        $(".autojs").show();
    }

    $("body")
      .on("click", ".autojsicon",
        function () {
            $(".autojs").show();
            localStorage.setItem("autojsshow", true);
        });
    $("body")
        .on("blur", "[data-value-set-by-auto-js],[data-processed-by-auto-js]",
          function (e) {
              if (e.originalEvent) {
                  $(this).removeAttr("data-value-set-by-auto-js").removeAttr("data-processed-by-auto-js");
                  if (!$(this).val()) {
                  processformfill();
              }
              }
              
          });
    $("body")
      .on("click", ".autojsiconclose",
      function (e) {
          e.preventDefault();
          $(".autojs").hide();
          localStorage.removeItem("autojsshow");
      });

    $("body")
      .on("focus click", "input,select,textarea",
      function (e) {
          return true;
          var th = $(this);
          var selectors = getgeneratedselectors(th);
          th
            .closest("div")
            .css("position", "relative")
            .append(
              '<div class="profiledetails" style="position: absolute;width: 100%;top: 78px;z-index: 23;background-color: rgba(255, 255, 255, 0.94);min-height: 32px;padding: 15px;box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.22);">' +
            '');
          $(".profiledetails");
      });
    $(window).click(function () {
        $(".reppathmaker").remove();
    });
    $("body").on("click",
      ".reppath,.urlmaker,.reppathmaker",
      function (e) {
          e.stopPropagation();

      });



})(myjQuery);