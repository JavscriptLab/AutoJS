chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  
  if (request.method =="putDataByKey")
  {
    var obj = {};
    obj[request.key] = request.value;
    chrome.storage.sync.set(obj,
      function () {
        ////sendResponse(request);
      });
  } 
  if (request.method == "getDataByKey") {
    chrome.storage.sync.get([request.key], function (result)
    {
     
     var storageresult = result[request.key];
      sendResponse(storageresult);
    });
    return true;
  } 
});
