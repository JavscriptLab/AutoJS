(function ($)
{
  $(document).ready(function ()
  {
    $("body").on("change",
    "#SlideType_Transaltion_Box_InputBox",
    function (e) {
        $("#bottomBarButton:visible[check=CHECK]").click();

    });
    
  var interval = setInterval(function () {
    $(".answerScreen:visible [onclick*=hideAnswerScreen],#bottomBarButton:visible[check=CHECK]").attr("accesskey","s");
    $(".removeacesskey").removeAttr("accesskey");
    $(".SlideType_Jumble_Slide.present #jumbleSource .answerListClass:visible,.articlePage [class*=option]:visible,section.present .sectionInnerContainer:visible td[class*=Checked],.questionScreen:visible [class*=option]").each(function(i){
        $(this).addClass(".removeacesskey").attr("accesskey",(i+1));
    });
    
if($(".answerScreen:visible [onclick*=hideAnswerScreen]").length>0){
    $(".answerScreen:visible [onclick*=hideAnswerScreen]").click();
}
if($(".gameEndScreen:visible [onclick*=closeLessonIframe]").length>0){
    $(".gameEndScreen:visible [onclick*=closeLessonIframe]").click();
}
if($(".articlePage .gameCompleteBox [onclick*='.gameCompleteBox']:visible").length>0){
    $(".articlePage .gameCompleteBox [onclick*='.gameCompleteBox']:visible").click();
    
    $(".articleGame .backButton:visible").click();
}
if($(".present .listenDialog:visible").length>0){
    $(".present .listenDialog:visible").click();
}

          if ($("#bottomBarButton:visible[check=CHECK]").length > 0&&$("#bottomBarButton:visible[check=CHECK]").parent().find("#disableBottomBarButton:visible").length==0) {
debugger;
            if(($("section.present .sectionInnerContainer:visible td[class*=_UnChecked]").length>0&&$("section.present .sectionInnerContainer:visible td[class*=_Correct],section.present .sectionInnerContainer:visible td[class*=_Checked]").length>0)){
            $("#bottomBarButton:visible[check=CHECK]").addClass("clicked");
            $("#bottomBarButton:visible[check=CHECK]").click();
            }
            if($(".SlideType_Jelly.present:visible").length>0){
                $("#bottomBarButton:visible[check=CHECK]").click();
            }
           
             
            
          } 
          if($(".SlideType_Last_Slide.present:visible").length>0){
            $(".backToHomework:visible").click();
        }
          if ($(".startLessonButton:visible:not(.clicked)").length > 0) {
            $(".startLessonButton:visible").addClass("clicked");
            $(".startLessonButton:visible").click();
          }
          if ($(".startGameButton:visible:not(.clicked)").length > 0) {
            $(".startGameButton:visible").addClass("clicked");
            $(".startGameButton:visible").click();
          }
          
        }, 5000);
    
    
  });
})(myjQuery);