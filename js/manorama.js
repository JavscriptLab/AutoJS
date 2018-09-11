(function ($)
{
  if (window.location.href.split("imasdk.googleapis.com").length > 1) {
  $(document).on('DOMNodeInserted', function (e) {
   
   
    setTimeout(function ()
    {
     
      if($(".videoAdUiSkipButton ").length>0)
      {
    
        $(".videoAdUiSkipButton ").click();
      }
    }, 1000);

    });
  }
  $(document).ready(function ()
  {
    if(window.location.href.split("players.brightcove.net").length>1)
    {
     
      $(".vjs-vol-0").click();
    }
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
    }, 100);

      
    
  });
})(myjQuery);