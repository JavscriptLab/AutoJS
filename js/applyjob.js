
(function ($) {
    var validclasses ={};
    validclasses.classes = [];
    validclasses.id = [];
    function createclassobj(mt, allclasses, nestedallclasses, requesti, childclassnamekey, ciobj, cvobj) {
        if (cvobj) {
            //try {
            var mycount;
            var classname = "." + cvobj;

            if (ciobj == -1) {
                classname = cvobj;
            }
            var tempclassname = classname;
            var classid = cvobj.replace(/\./g, "").replace(/ /g, "");
            if (nestedallclasses) {
                classname = classname + " " + nestedallclasses;
            } else {
            }
            var t1 = mt.parents("[class]:not([class=''])").first();
            var idgen = false;
            if (!mt.attr('id')) {
                idgen = true;
                mt.attr('id', "Id" + new Date().getTime());
            }
            var t1Classess = t1.attr("class");
                ////cvobj = '<option data-childclassname="' +
                ////    ((childclassnamekey) ? childclassnamekey : false) +
                ////    '" data-nested="' +
                ////    ((nestedallclasses) ? false : true) +
                ////    '" data-tagname="' +
                ////    ((ciobj == -1) ? true : false) +
                ////    '"  value="' +
                ////    classname +
                ////    '" >' +
                ////    classname +
                ////    '</option>';

                validclasses.classes.push(classname);
                if (!childclassnamekey) {
                    childclassnamekey = classid;
                }
                if (t1.length > 0 && t1Classess != allclasses) {
                    mycount = 1;
                    if (requesti)
                        mycount = requesti + 1;
                    if (mycount < 4) {
                        appendclasses(t1, t1Classess, classname, mycount, childclassnamekey);
                    }
                    if (t1.find(tempclassname).length > 1) {
                        t1.find(tempclassname).each(function (nesti, nestv) {
                            if (mt.attr('id') == $(this).attr('id')) {
                                if (nestedallclasses) {
                                    classname = tempclassname + ':eq(' + nesti + ')' + " " + nestedallclasses;
                                } else {
                                    classname = tempclassname + ':eq(' + nesti + ')';
                                }
                                ////cvobj = '<option data-childclassname="' +
                                ////    ((childclassnamekey) ? childclassnamekey : false) +
                                ////    '" data-nested="' +
                                ////    ((nestedallclasses) ? false : true) +
                                ////    '" data-tagname="' +
                                ////    ((ciobj == -1) ? true : false) +
                                ////    '"  value="' +
                                ////    classname +
                                ////    '" >' +
                                ////    classname +
                                ////    '</option>';
                                validclasses.classes.push(classname);
                                if (mycount < 4) {
                                    appendclasses(t1, t1Classess, classname, mycount, childclassnamekey);
                                }
                            }
                        });
                    
                }
            }
            if (idgen == true) {
                mt.removeAttr('id');
            }
        }
    }

    function appendclasses(t, classes, nestedclasses, reqi, childclassname) {
            $.each(classes.split(' '),
                function (ci, cv) {
                    createclassobj(t, classes, nestedclasses, reqi, childclassname, ci, cv);
                });
        
    }
    function getgeneratedselectors(t) {
        if(t.length>0)
        {
            var classes=t.attr('class');
            if(t.attr('id'))
            {
                var id=t.attr('id');
                validclasses.id.push(id);
            }
            appendclasses(t, classes);
            if(validclasses.length==0)
            {
                var tagname=t.prop("tagName").toLowerCase();
                createclassobj(t, false, false, 0, tagname, -1, tagname);
            }
            validclasses.classes = validclasses.classes.sort(function (a, b)
            {
                return a.length-b.length;
            });
      }
      var tempvalidclasses = validclasses;
      validclasses = {};
      validclasses.classes = [];
      validclasses.id = [];
      return tempvalidclasses;
    }

    
    var selectors=getgeneratedselectors($("body").find("input:visible"));
    console.log(selectors);


  function fillbycondition(keys,value)
  {
    $.each(keys.split("|"),
      function(i, v)
      {
        var selectors={};
        selectors["n"]="";
        selectors["u"]="";
        selectors["c"]="";
        selectors["l"] = "";
        selectors["pln"] = "";
        selectors["plu"] = "";
        selectors["plc"] = "";
        selectors["pll"] = "";
        selectors["lbn"] = "";
        selectors["lbu"] = "";
        selectors["lbc"] = "";
        selectors["lbl"] = "";
        $.each(v.split("&"),
          function(i1, v1)
          {
            var capitalize=v1.charAt(0).toUpperCase()+v1.slice(1);
            var upper=v1.toUpperCase();
            var lower=v1.toLowerCase();
            selectors["n"]+="[name*="+v1+"]";
            selectors["u"]+="[name*="+upper+"]";
            selectors["c"]+="[name*="+capitalize+"]";
            selectors["l"] += "[name*=" + lower + "]";
            selectors["lbn"] += "label:contains(" + v1 + ")";
            selectors["lbu"] += "label:contains(" + upper + ")";
            selectors["lbc"] += "label:contains(" + capitalize + ")";
            selectors["lbl"] += "label:contains(" + lower + ")";
            selectors["pln"] += "[placeholder*=" + v1 + "]";
            selectors["plu"] += "[placeholder*=" + upper + "]";
            selectors["plc"] += "[placeholder*=" + capitalize + "]";
            selectors["pll"] += "[placeholder*=" + lower + "]";
          });
        var selectorsarray=[];
        $.each(selectors,
          function(i2, v2)
          {
            selectorsarray.push(v2);
          });

        $(selectorsarray.join(",")).each(function()
        {
            var input = $(this);
            if ($(this).prop("tagName").toLowerCase() == "label") {
                input = $("#" + $(this).attr("for"));
            } 

            if (!input.val()) {
                input.val(value);
                }
            
          
        });
  });
    
  }
  function css(selector, stylevalue) {
    $("head")
      .append("<style class='autostyles' type='text/css'>" + selector + "{ "+stylevalue+ "}</style>");
  }
  setInterval(function () {
      fillbycondition("mail", "justnshalom@gmail.com");
      fillbycondition("phone|mobile|telefon", "+919605656508");
      
      fillbycondition("full&Name|Full&name", "Justin Jose");
      fillbycondition("first&Name|vor&Name|name", "Justin");
      fillbycondition("last&Name|nach&Name|sur&Name", "Jose");
      fillbycondition("job&Title", "Senior Software Engineer");
      fillbycondition("linkedin|LinkedIn", "https://linkedin.com/in/justnshalom/");
      fillbycondition("GitHub", "https://github.com/JavscriptLab/");
      
      fillbycondition("strasse|address", "Koonamackel House,  South Pampady PO");
      fillbycondition("plz|Pin&code", "686521");
      fillbycondition("birth|dob", "1988-06-01");
      fillbycondition("location|ort", "Kottayam");
      fillbycondition("motivation|cover&Letter|message&Employer", `Dear HR,
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
Mobile. +919605656508`);

  }, 5000);


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
    '<a href="" class="autojsiconclose">Close</a>'+
    '</div>');
  if(localStorage.getItem("autojsshow"))
  {
    $(".autojs").show();
  }
  $("body")
    .on("click",".autojsicon",
      function()
      {
        $(".autojs").show();
        localStorage.setItem("autojsshow",true);
    });
  $("body")
    .on("click", ".autojsiconclose",
    function (e)
    {
      e.preventDefault();
        $(".autojs").hide();
        localStorage.removeItem("autojsshow");
    });

  $("body")
    .on("focus click", "input,select,textarea",
    function (e)
    {
      return true;
      var th=$(this);
      var selectors = getgeneratedselectors(th);
      th
        .closest("div")
        .css("position", "relative")
        .append(
          '<div class="profiledetails" style="position: absolute;width: 100%;top: 78px;z-index: 23;background-color: rgba(255, 255, 255, 0.94);min-height: 32px;padding: 15px;box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.22);">'+
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