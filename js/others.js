(function ($) {
  var injs = function (location, callback) {
    var valid=false;
    var chances=location.split("|");
    for(var key in chances){
if(window.location.href.split(chances[key]).length > 1){
valid=true;
}
    }
    if (valid && (location != "" || window.top == window.self))
    {
      callback();
    }
  }
  injs("hotstar",
    function()
    {
      var sheet=document.createElement('style');
      sheet.innerHTML=
        ".master-container { overflow:hidden; }.content-detail-header-container #HotstarPlayer{width:100%;height: auto;}";
      document.body.appendChild(sheet);
    });
  injs("jobstreet.com.sg",
    function () {
      if(window.delaySubmitForm&&$("#apply-now-link:visible").length>0){
      delaySubmitForm();
      $("#apply-now-link").submit();
    }
    });
     injs("reed.co.uk",
    function () {  
      setTimeout(function () {
      $("#applyButtonSide").click();
      },5000);
    });
  injs("myjobstreet.jobstreet.com.sg",
    function () {
  $("#pitch_text").val('My technical expertise also includes proficient experience in Dot Net, and advanced knowledge of Server-side and Client-side technologies (HTML/CSS, TypeScript, Javascript, jQuery, Angular, Bootstrap, Ajax) and Software Construction (Design Patterns). I am comfortable with various of web frameworks.');
  $("#btnAction").trigger("click");
    });

  injs("wearenolte.workable.com",
    function () {
  if (!$("#candidate_firstname").val()) {
    $(".js-linkedin-apply").click();
  } else {
    $("#resume_cache [data-toggle='modal']").click();
    setTimeout(function ()
    {
      $(".js-resume-picker").click();
    }, 1000);
      }
    });

  injs("aplitrak.com",
    function () {
  setTimeout(function () {
    $("#applicant_name").val("Justin Jose");
    $("#from_email").val("justnshalom@gmail.com");
    $("#phone").val("919605656508");
    $('[name="psa1"]').last().prop("checked", true);
    $("#file").click();
    $("body").on("change", "[type=file]", function () {
      setTimeout(function () {

        $(".form-actions input").click();
      }, 5000);

    });

    if (window.location.href.split("submit.cgi").length > 1) {
      window.close();
    }
      }, 5000);
    });

  injs("accounts.google.com",
    function()
    {
      
      
      if($('[data-third-party-email="team@stackoverflow.com"]').length>0)
        {
          if($('[data-authuser="1"]').length>0){
            $('[data-authuser="1"]').trigger("click");
          }else{
            $("#identifierId").val("justnshalom@gmail.com");
            $("#identifierNext").click();
setTimeout(function(){
  if($('[data-email="justnshalom@gmail.com"]').length>0)
    {
      $("[name='password']").val("Kinglives@11");
      $("#passwordNext").click();
    }
  },5000);
            
          }
          
        }
      if($('[data-third-party-email="info@truecaller.com"]').length>0)
      {
        var currentauth=localStorage.getItem("authuser");
        if(currentauth&&currentauth=="0")
        {
          $('[data-authuser="1"]').trigger("click");
          localStorage.setItem("authuser", 1);
        }
        else
        {
          $('[data-authuser="0"]').trigger("click");
          localStorage.setItem("authuser", 0);
        }
      }
    });
  injs("play.google.com",
    function () {
  if ($(".otainstall-nothanks-button").length > 0) {
    $(".otainstall-nothanks-button").trigger("click");
  }
});


injs("work|job|career|apply|vacancies|vacancy|application",
function () {
  if(window.location.href.split("google").length==1){
  ////function for apply any links with apply now title
var link="";
var valid=true;
  $('a[name*=apply],a[title*=apply],a:contains("apply"):contains("job"),a:contains("Apply"):contains("job"),a:contains("Apply"):contains("Job")').each(function(){
    if(link!=""){
      if(link!=$(this).attr("href")){
valid=false;
      }
    }
    link=$(this).attr("href");
  })
  if(valid&&link!=""&&$("input[type=text]:visible").length==0){
    window.location.href=link;
  }

////function for apply any links with linkedin import button

var linkedinselector=$('a[class*=import][class*=linkedin],a:contains("import"):contains("linkedin"),a:contains("apply"):contains("linkedin"),a:contains("Apply"):contains("LinkedIn")');
if(linkedinselector.length>0&&!sessionStorage.getItem("linkedinimported")){

window.location.href=linkedinselector.attr("href");
sessionStorage.setItem("linkedinimported",true);
}

  }
});
injs("monster",function(){
$("body").on("click","section.card-content:not('.is-applied')",function(){
  setTimeout(function () {
    if($("#PrimaryJobApply").length>0&&$("#PrimaryJobApply").attr("href")){
  var popup = window.open($("#PrimaryJobApply").attr("href"), '_blank');
  window.focus();
    }else{
      $("#PrimaryJobApply").parent().click();
    }
  },5000) ;
  
});
    
  $("#CoverLetter").addClass("is-expanded");
  setTimeout(function () {
    $("#applyForm").submit();
  },10000) 
  setTimeout(function () {
    window.close();
  },100000); 
});

injs("smartrecruiters",function(){
  $("#st-apply").click();
  setTimeout(function () {
    $("#st-connect-linkedin").click();
  },5000)
  $("body").on("click","#js-resume-upload",function(){
    
      setTimeout(function () {
        $("#js-popup-form").submit();
      },10000)
    })
});
injs("linkedin",function(){
  
  setTimeout(function () {
    $("#oauth__auth-form__submit-btn").click();
  },2000)
})
var linkcontains=function(word,tag){
  return tag+":contains('"+word+"')";
}
var attrcontains=function(word,tag,attr){
  return tag+"["+attr+"*='"+word+"']";
}
var disabledwords=["sex","porn","movie","film","cinema","actress","actor","hollywood","mollywood","bollywood","entertainment","fashion","lifestyle"];
var generateselectors=function(tag,attr){
  var selectors=[];
  for(var wordindex in disabledwords){
    var word=disabledwords[wordindex];
    var capitalize = word.charAt(0).toUpperCase() + word.slice(1);
                        var upper = word.toUpperCase();
                        var lower = word.toLowerCase();
                        if(attr){
                        selectors.push(attrcontains(capitalize+" ",tag,attr));
                        selectors.push(attrcontains(" "+capitalize,tag,attr));
                        selectors.push(attrcontains(upper+" ",tag,attr));
      selectors.push(attrcontains(" "+upper,tag,attr));
      selectors.push(attrcontains(lower+" ",tag,attr));
      selectors.push(attrcontains(" "+lower,tag,attr));                  
      selectors.push(attrcontains(word,tag,attr));
      selectors.push(attrcontains(word,tag,attr));
                        }else{
                          selectors.push(linkcontains(capitalize+" ",tag));
                        selectors.push(linkcontains(" "+capitalize,tag));
                        selectors.push(linkcontains(upper+" ",tag));
      selectors.push(linkcontains(" "+upper,tag));
      selectors.push(linkcontains(lower+" ",tag));
      selectors.push(linkcontains(" "+lower,tag));                  
      selectors.push(linkcontains(word+" ",tag));
      selectors.push(linkcontains(" "+word,tag));
                        }
    }
    return selectors;
}
var clearcontent=function(){
 
var selectors=generateselectors("*");
if($(selectors.join(",")).length>0){
  $(selectors.join(",")).each(function(){
    if($(this).find("*").length==0){
      $(this).remove();
    }
  });
}
var selectors=generateselectors("a","href");
  $(selectors.join(",")).remove();
  var selectors=generateselectors("div","data-async-context");
  $(selectors.join(",")).remove();
  
}
 $(document).on('DOMNodeInserted', function (e) {
  ////clearcontent();
    })
clearcontent();
setInterval( clearcontent,15000 );
})(myjQuery);