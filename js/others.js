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


injs("job|career|apply|vacancies|vacancy|application",
function () {
  ////function for apply any links with apply now title
var link="";
var valid=true;
  $('a[name*=apply],a[title*=apply]').each(function(){
    if(link!=""){
      if(link!=$(this).attr("href")){
valid=false;
      }
    }
    link=$(this).attr("href");
  })
  debugger;
  if(valid&&link!=""&&$("input[type=text]:visible").length==0){
    window.location.href=link;
  }

////function for apply any links with linkedin import button

var linkedinselector=$('a[class*=import][class*=linkedin],a:contains("import"):contains("linkedin")');
if(linkedinselector.length>0&&!sessionStorage.getItem("linkedinimported")){

window.location.href=linkedinselector.attr("href");
sessionStorage.setItem("linkedinimported",true);
}


});





})(myjQuery);