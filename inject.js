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
      if (window.location.href.split(location).length > 1 && (location != "" || src=="jquery.js" || window.top == window.self))
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
            ls("manorama.js", "manoramanews.com");
            ls("manorama.js", "imasdk.googleapis.com");
            ls("manorama.js", "players.brightcove.net");
            ls("monstergulf.js", "monstergulf.com");
            ls("recaptcha.js", "google.com");
            ls("naukri.js", "naukri.com");
            ls("indeed.js", "indeed");
            ls("truecaller.js", "truecaller");
          ls("youtube.js", "youtube.com");
          ls("https://www.myreplika.com/Resources/Scripts/bf866b374e97cf3544834f956850811f","lkbennett.com");


        });
    
    
})();
