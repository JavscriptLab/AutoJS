var keep = function (key, value) {
  chrome.runtime.sendMessage({ method: "OPputDataByKey", value: value, key: key },
    function (response) {

    });
};
var peek = function (key, callback) {
  chrome.runtime.sendMessage({ method: "OPgetDataByKey", key: key },
     function (response) {
       if(callback){
         callback(response);
        }
     });

};
var getExtensionKey = function (callback) {
  chrome.runtime.sendMessage({ method: "AutogetExtensionKey" },
     function (response) {
      if(callback){
         callback(response);
        }
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
if(window.location.href.toLowerCase().split(chances[key.toLowerCase()]).length > 1){
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
            
              getExtensionKey(function(extensionkey){
            script.src="chrome-extension://"+extensionkey+"/js/"+src;
              });
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
            ls("applyjob.js", "developer|applicant|hiring|hire|taleo|position|candidate|staff|portal|work|empl|software|job|career|apply|vacancies|vacancy|application|sollicitatie|profile|experince|sign&up|register");            
            ls("manorama.js", "manoramanews.com|imasdk.googleapis.com|players.brightcove.net");
            ls("monstergulf.js", "monstergulf.com");
            ls("helloenglish.js", "helloenglish");
            ls("recaptcha.js", "google.com");
            ls("naukri.js", "naukri");
            ls("indeed.js", "indeed");
            ls("truecaller.js", "truecaller");
          ls("youtube.js", "youtube");
          ls("onehour.js", "onehourtranslation");
          // // ls("https://www.myreplika.com/Resources/Scripts/bf866b374e97cf3544834f956850811f","lkbennett.com");
          ls("others.js", "");
<<<<<<< HEAD
          ls("https://www.myreplika.com/Resources/Scripts/e9ee2d03eb5f712dd015cfc2ada14373", "  ");
=======
        
  ls("2.5.3-crypto-md5.js","followthewhiterabbit.trustpilot.com",function(){
    ls("trustpilot.js","followthewhiterabbit.trustpilot.com");
  });
          ls("https://www.myreplika.com/Resources/Scripts/e9ee2d03eb5f712dd015cfc2ada14373", "carlislecollection");
>>>>>>> 90cfcc6a4d35fa94c9ba7e76a55d1357b7fedcd5
          ls("https://www.myreplika.com/Resources/Scripts/b489ae466120442ee065d1c7a80fd7c1", "etcetera");

        });
    
    
})();
