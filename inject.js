
(function () {
    
    var ls=function(src, location,callback)
    {
        if (window.location.href.split(location).length > 1)
        {   
            var script=document.createElement('script');
            script.type = 'text/javascript';
            if(callback)
            {
                script.onload=callback;
            }
            script.src="chrome-extension://cchkipmfgpadgadjmaclbkhkodnljjkf/"+src;
            var s=document.getElementsByTagName('script')[0];
            s.parentNode.insertBefore(script, s);
        }
    }
    ls("jquery.js", "",
        function()
        {
            ls("auto.js", "");
            ls("openproject.js", "openproject.fingent.net");
        });
    
    
})();
