(function ($) {
  setTimeout(function () {
  if ($(".recaptcha-checkbox-checkmark").length > 0) {
    $(".recaptcha-checkbox-checkmark").click();
    setTimeout(function () {

    }, 2000);

  }
  }, 2000); 
})(myjQuery);