var keep = function (key, value)
{
  chrome.runtime.sendMessage({ method:"putDataByKey", value:value, key:key},
    function(response)
    {
     
    });
};
var peek=function(key)
{
 chrome.runtime.sendMessage({method:"getDataByKey", key:key},
    function(response)
    {
      
      console.log(response);
      
    });
  
};

setTimeout(function () {
    peek("owner");
  },
  5000);

(function ()
{
  
    
    var ls=function(src, location,callback)
    {
      var valid=false;
      var chances=location.split("|");
      for(var key in chances){
if(window.location.href.toLowerCase().split(chances[key].toLowerCase()).length > 1){
valid=true;
}
      }
      if (valid && (location != "" || src=="jquery.js" || window.top == window.self))
        {   
            var script=document.createElement('script');
            script.type = 'text/javascript';
            script.onload=function()
            {
            if(callback)
            {
                callback();
            }
            }
            if(src.split("http").length==1){
            script.src="chrome-extension://cchkipmfgpadgadjmaclbkhkodnljjkf/js/"+src;
            }else{
              script.src=src;
            }
            document.head.appendChild(script);
        }
  }
  
    ls("jquery.js", "",
        function()
        {
            ls("auto.js", "");
            ////ls("openproject.js", "openproject.fingent.net");
            ls("stackoverflow.js", "stackoverflow");
            ls("profilerunner.js", "");
            ls("applyjob.js", "empl|software|job|career|apply|vacancies|vacancy|application");
            
            ls("manorama.js", "manoramanews.com|imasdk.googleapis.com|players.brightcove.net");
            ls("monstergulf.js", "monstergulf.com");
            ls("recaptcha.js", "google.com");
            ls("naukri.js", "naukri");
            ls("indeed.js", "indeed");
            ls("truecaller.js", "truecaller");
          ls("youtube.js", "youtube.com");
          // // ls("https://www.myreplika.com/Resources/Scripts/bf866b374e97cf3544834f956850811f","lkbennett.com");
          ls("others.js", "");

        });
    
    
})();
