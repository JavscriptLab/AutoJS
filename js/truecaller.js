(function ($) {
var iscallerror=false;
  setTimeout(function()
    {
      var contactdetailslist={};
      if(localStorage.getItem("contactdetailslist"))
      {
        contactdetailslist=JSON.parse(localStorage.getItem("contactdetailslist"));
      }
      var addresscountryCode="in";
      if(localStorage.getItem("addresscountryCode"))
      {
        addresscountryCode=localStorage.getItem("addresscountryCode");
      }
      else
      {
        localStorage.setItem("addresscountryCode", "in");
      }
      var contactdetailslistnotavailable={};
      var contactdetailslistspam={};
      if(localStorage.getItem("contactdetailslistspam"))
      {
        contactdetailslistspam=JSON.parse(localStorage.getItem("contactdetailslistspam"));
      }
      if(localStorage.getItem("contactdetailslistnotavailable"))
      {
        contactdetailslistnotavailable=JSON.parse(localStorage.getItem("contactdetailslistnotavailable"));
      }

      var searchkey=parseInt($(".searchbar__query")
        .val()
        .replace(/\)/ig, "")
        .replace(/\(/ig, "")
        .replace(/\-/ig, "")
        .replace(/\+/ig, "")
        .replace(/ /ig, ""));
      if(searchkey.toString()!="NaN")
      {
        var tcstorage=JSON.parse(localStorage.getItem("tcstorage"));
        var contactinfo=tcstorage.search.history[0];
        debugger;
        var contactname=$(".ProfileName").text();
        if(contactname&&
          contactname.split("is not yet available").length==1&&
          $(".ProfileSpamScore").length==0&&
          contactinfo)
        {
          for(var objectid in contactinfo)
          {
            var obj=contactinfo[objectid];
            for(var objectindex in obj)
            {
              var subobject=obj[objectindex];
              for(var subobjindex in subobject)
              {
                var subsubobj=subobject[subobjindex];

                if(subobject.service)
                {
                  contactinfo[subobject.service.toLowerCase()+subobjindex]=subsubobj;
                }
                if(subobject.type)
                {
                  contactinfo[subobject.type.toLowerCase()+subobjindex]=subsubobj;
                }
                if(subobject.numberType)
                {
                  contactinfo[subobject.numberType.toLowerCase()+subobjindex]=subsubobj;
                }
              }
            }
          }
          console.log(tcstorage);
          debugger;

          var phoneitems=$(".ProfileDetails .List:first div.List__Item");
          var mobile=parseInt(phoneitems.find(".List__Info div:first")
            .text()
            .replace(/\)/ig, "")
            .replace(/\(/ig, "")
            .replace(/\-/ig, "")
            .replace(/\+/ig, "")
            .replace(/ /ig, ""));
          if(mobile)
          {
            searchkey=mobile;
          }

          var profilename=$(".ProfileTag__Name").text();

          var contactdetails=contactinfo;
          contactdetails.profilename=profilename;

          contactdetails.contactname=contactdetails.name;
          contactdetails.mobile=contactdetails.openphonee164Format;
          contactdetails.network=contactdetails.openphonecarrier;
          contactdetails.email=contactdetails.emailid;
          contactdetails.location=contactdetails.addresscity;

          contactdetailslist[searchkey]=contactdetails;
          localStorage.setItem("contactdetailslist", JSON.stringify(contactdetailslist));
        }
        else if($(".ProfileSpamScore").length>0)
        {
          contactdetailslistspam[searchkey]=searchkey;
          localStorage.setItem("contactdetailslistspam", JSON.stringify(contactdetailslistspam));
        }
        else
        {
          if(iscallerror)
          {
            function deleteAllCookies()
            {
              var cookies=document.cookie.split(";");

              for(var i=0; i<cookies.length; i++)
              {
                var cookie=cookies[i];
                var eqPos=cookie.indexOf("=");
                var name=eqPos>-1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie=name+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
              }
            }

            deleteAllCookies();

            localStorage.removeItem("tcstorage");

            window.location.reload();
            return false;
          }
          contactdetailslistnotavailable[searchkey]=searchkey;
          localStorage.setItem("contactdetailslistnotavailable", JSON.stringify(contactdetailslistnotavailable));
        }

        if(localStorage.getItem("alllowtrackcontacts")&&localStorage.getItem("alllowtrackcontacts")=="true")
        {
          var nextnumber=parseInt(searchkey);
          if(!localStorage.getItem("alllowrecreatecontacts")||localStorage.getItem("alllowrecreatecontacts")!="true")
          {
            for(i=0; i<=10000000; i++)
            {
              nextnumber++;
              if(!contactdetailslist[nextnumber]&&
                !contactdetailslistnotavailable[nextnumber]&&
                !contactdetailslistspam[nextnumber])
              {
                i=10000000;
              }
            }
          }
          debugger;
          window.location.href="https://www.truecaller.com/search/"+addresscountryCode+"/"+(nextnumber);
        }
      }
      else if($(".ProfileSignIn").length>0)
      {
        $(".ProfileSignIn").trigger("click");
        setTimeout(function()
          {
            $(".sign-in-dialog-provider:first").trigger("click");

            var myVar=setInterval(function()
              {
                if($(".ProfileSignIn").length==0)
                {
                  clearInterval(myVar);
                  window.location.reload();
                }
              },
              1000);
          },
          1000)
      }
    },
    1500);
setTimeout(function(){
    debugger;
    if($(".Notifications__Notification.Notifications__Notification--error").length>0){
iscallerror=true;    
        
    }
    
},100)
})(myjQuery);