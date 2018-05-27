(function ($) {
  var dominserti = 0;
var notificationtext="";
var lastnotification;
var lastnotificationtext="";
  setTimeout(function()
    {
      $('body')
        .on('DOMNodeInserted',
          '.caption-window',
          function(e)
          {
            dominserti++;
            var localdominserti=dominserti;
            setTimeout(function()
              {
                if(dominserti>=localdominserti)
                {
                  if(notificationtext!=$(".caption-window").text())
                  {
                    var notificationhtml=$(".caption-window").html();
                    notificationtext=$(".caption-window").text();
                    var mylocalnotificationtext=notificationtext;
                    var mylocallastnotificationtext=lastnotificationtext;
                    debugger;
                    var textpieces=$(notificationhtml.replace(/<br ?\/?>/g, " ")
                        .replace(/&nbsp;/ig, " ")
                        .replace("  ", " "))
                      .text()
                      .split(" ")
                      .filter(function(e, y)
                      {
                        e=e.trim();
                        return e!=""
                      });

                    var found=false;
                    if(mylocallastnotificationtext)
                    {
                      var lastpieces=
                        $(mylocallastnotificationtext.replace(/<br ?\/?>/g, " ")
                            .replace(/&nbsp;/ig, " ")
                            .replace("  ", " "))
                          .text()
                          .split(" ")
                          .filter(function(e, y)
                          {
                            e=e.trim();
                            return e!=""
                          });
                      var lastthree=lastpieces.splice(-3);
                      var foundcount=0;
                      for(var i=0; i<textpieces.length; i++)
                      {
                        if(lastthree.indexOf(textpieces[i])>-1)
                        {
                          foundcount++;

                          if(foundcount==3)
                          {
                            found=true;
                            break;
                          }
                        }
                        else
                        {
                          foundcount=0;
                        }
                      }
                    }

                    if(!found)
                    {
                      if(textpieces.length>2)
                      {
                        lastnotificationtext=notificationhtml;
                      }

                      if(lastnotification)
                      {
                        var locallastnotification=lastnotification;
                        secondlastnotification=locallastnotification;
                        setTimeout(function()
                          {
                            locallastnotification.close();
                          },
                          3000);
                      }
                      var options={
                        body:notificationtext,
                      }
                      lastnotification=new Notification("Youtube", options);
                    }
                  }
                }
              },
              1000)
          });
    },
    2000);
setInterval(function(){
  $(".close-padding.condensed.contains-svg").click();
  $(".videoAdUiSkipButton").click();
  $(".annotation-close-button").click();
},3000);


})(myjQuery);
