
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
        selectors["l"]="";
        $.each(v.split("&"),
          function(i1, v1)
          {
            var capitalize=v1.charAt(0).toUpperCase()+v1.slice(1);
            var upper=v1.toUpperCase();
            var lower=v1.toLowerCase();
            selectors["n"]+="[name*="+v1+"]";
            selectors["u"]+="[name*="+upper+"]";
            selectors["c"]+="[name*="+capitalize+"]";
            selectors["l"]+="[name*="+lower+"]";
          });
        var selectorsarray=[];
        $.each(selectors,
          function(i2, v2)
          {
            selectorsarray.push(v2);
          });

        $(selectorsarray.join(",")).each(function()
        {
          if(!$(this).val())
          {
            $(this).val(value);
          }
        });
  });
    
  }
  function css(selector, stylevalue) {
    $("head")
      .append("<style class='autostyles' type='text/css'>" + selector + "{ "+stylevalue+ "}</style>");
  }
  
  fillbycondition("mail", "justnshalom@gmail.com");
  fillbycondition("phone|mobile", "+919605656508");
  fillbycondition("first&name", "Justin");
  fillbycondition("last&name", "Jose");
  fillbycondition("job&title", "Senior Software Engineer");
  fillbycondition("linkedin", "https://linkedin.com/in/justnshalom/");
  fillbycondition("first&name", "Justin");
  fillbycondition("first&name", "Justin");

  
  $("#resumator-apply-with-linkedin-wrapper a").click();
  $("#resumator-address-value").val("Koonammakkel House");
  $("#resumator-city-value").val("Kottayam");
  $("#resumator-state-value").val("Kerala");
  $("#resumator-postal-value").val("685521");

  
  $("[type=checkbox][name*=accept],[type=checkbox][value*=accept]").prop("checked", "true");
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