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
window.addEventListener('message', function(event) {
  
  // Only accept messages from same frame
  if (event.source !== window) {
    return;
  }

  var message = event.data;

  // Only accept messages that we know are ours
  if (typeof message !== 'object' || message === null) {
    return;
  }
if(event.data.method=="AutoOpenIncogitowindow"){
  chrome.runtime.sendMessage(message);
}
});
setTimeout(function () {
    peek("owner");
  },
  5000);

  var leavewindow =function(){
    ///console.log(document.hasFocus());
    ////console.log(document.hasFocus);
    var clength=localStorage.getItem("clength");
    if(!clength){
      clength=0;
    }
      
    if (!document.hasFocus()&&(typeof mouseleaved=='undefined'||mouseleaved==true)) {
      clength++;
      localStorage.setItem("clength",clength);
      ///console.log(clength);
      
    chrome.runtime.sendMessage({method:"closeThis"});
  
  } else{
    clength=0;
    localStorage.setItem("clength",clength);
  }
  }
  var mouseleaved=false;
 
 
(function ()
{
 
  if(chrome.extension.inIncognitoContext){

    document.onfocus= function(e){
      mouseleaved=false;
    };
    document.onmousemove= function(e){
      mouseleaved=false;
    };
    document.onmouseenter= function(e){
      mouseleaved=false;
  };
  document.onmouseleave= function(e){
    mouseleaved=true;
    leavewindow();
  };
  document.onkeydown= function(e){
    if (e.altKey) {
    mouseleaved=true;
    leavewindow();
  }
  };
    setInterval( leavewindow, 1000 );
  }

  
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
          ls("others.js", "");
          ls("http://10.10.2.125:9595/Resources/Scripts/e795bfff990df17b02f5ae3c1768b4c6", "http://justinshalom.com/");
  // // ls("2.5.3-crypto-md5.js","followthewhiterabbit.trustpilot.com",function(){
  // //   ls("trustpilot.js","followthewhiterabbit.trustpilot.com");
  // // });
          

        });
    
    
})();
