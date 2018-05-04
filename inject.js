
(function () {
    
    var ls=function(src, location,callback)
    {
        if (window.location.href.split(location).length > 1)
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
            script.src="chrome-extension://cchkipmfgpadgadjmaclbkhkodnljjkf/js/"+src;
            document.head.appendChild(script);
        }
    }
    ls("jquery.js", "",
        function()
        {
            ls("auto.js", "");
            ls("openproject.js", "openproject.fingent.net");
            ls("stackoverflow.js", "stackoverflow");
            ls("applyjob.js", "");
        });
    
    
})();
