
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
    }

    
    var selectors=getgeneratedselectors($("body").find("input:visible"));
    console.log(selectors);
})(myjQuery);