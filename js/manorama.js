(function ($)
{
  $(document).on('DOMNodeInserted', function (e) {
   
    setTimeout(function () {
      if($(".videoAdUiSkipButton ").length>0)
      {
        $(".videoAdUiSkipButton ").click();
      }
    }, 1000);

  });
  $(document).ready(function () {

    $("#mmi_incontent_video").remove();


    setTimeout(function ()
    {
      $("iframe")
        .each(function()
        {
          if($(this).attr("src"))
          {
            $(this).attr("src", $(this).attr("src").replace("muted", ""));
          }
        });
    }, 0);

    
  });
})(myjQuery);