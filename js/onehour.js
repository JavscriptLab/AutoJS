(function ($){

if(window.location.href.split('open-project-freelance-translator').length>1){
setInterval(function(){
if($("#open_projects .table-jobs tbody").html()||$("#bonus_projects .table tbody").html()||$("#qa_projects .table tbody").html()||$("#bundle_projects .table tbody").html()){
if(document.hidden){
    if (Notification.permission !== "granted")
        Notification.requestPermission();
      else {
        var notification = new Notification('Notification title', {
          icon: 'https://www.onehourtranslation.com/public/frontend/i/logo.png',
          body: "Hey there! New translation!",
        });
    
        notification.onclick = function () {
        // //   window.open("http://stackoverflow.com/a/13328397/1269037");      
        };
        setTimeout(notification.close.bind(n), 3000);
      }
          

}
}
},3000);


}







    })(myjQuery);