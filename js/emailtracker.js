(function ($)
{
  $(document).ready(function ()
  {
    function extractEmails (text)
    {
        return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    }
    function extractEmails2 (text)
    {
        return text.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gi);
    }
    function extractPhone1 (text)
    {
        return text.match(/(?:(?:\+?([1-9]|[0-9][0-9]|[0-9][0-9][0-9])\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([0-9][1-9]|[0-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?/gi);
    }

    

    function trackerfn(){
        
        var existingemails=[];
        peek("extractedemails",function(emails){
            if(emails){
            existingemails=JSON.parse(emails);
        }
        debugger;
            var emails=extractEmails($('html').text());
            
        console.log(extractEmails2($('html').text()).join('\n'));
        console.log(extractPhone1($('html').text()).join('\n'));
        })



        

    }
    


    var interval = setInterval(function () {
    
        trackerfn();
            }, 5000);
            var globalinserti=0;
            $(document).on('DOMNodeInserted', function(e) {
                globalinserti++;
                var localinserti=globalinserti;
                setTimeout(function(){
                    if(globalinserti==localinserti){
                        trackerfn();
            }
                },1000)
            });
            

  });
})(myjQuery);