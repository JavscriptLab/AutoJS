(function ($)
{
  
  $(document).ready(function ()
  {
    if($(".apply_now a:first").length>0)
    {
      window.location.href=$(".apply_now a:first").attr("href");
    }
  });
})(myjQuery);