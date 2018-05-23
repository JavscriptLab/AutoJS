chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  
  if (request.method =="AutoputDataByKey")
  {
    var obj = {};
    obj[request.key] = request.value;
    chrome.storage.local.set(obj,
      function () {
        ////sendResponse(request);
      });
  } 
  if (request.method == "AutogetExtensionKey") {
    if(sendResponse){
    sendResponse(chrome.runtime.id);
  }
  }
  if (request.method == "AutogetDataByKey") {
    chrome.storage.local.get([request.key], function (result)
    {
     
     var storageresult = result[request.key];
     if(sendResponse){
      sendResponse(storageresult);
    }
    });
    return true;
  } 
});