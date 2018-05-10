(function ($) {
  debugger;
  var interval = setInterval(function () {

    setTimeout(function () {

    }, 5000);
    var appliedjobs = [];
    if (localStorage.getItem("appliedjobs")) {
      appliedjobs = JSON.parse(localStorage.getItem("appliedjobs"));

    }
    if ($(".recommended .row:not(.checkedrow):visible").length > 0) {
      $(".recommended .row:not(.checkedrow):visible:not(.srp_head)").each(function () {


        $(this).addClass("checkedrow");
        if (appliedjobs.indexOf($(this).attr("id")) == -1) {
          appliedjobs.push($(this).attr("id"));

          var text = $(this).text().toLowerCase();
          if (text.split("c#").length > 1 || text.split(".net").length > 1 || text.split("angular").length > 1 || text.split("wordpress").length > 1 || text.split("javascript").length > 1) {
            if (text.split("c#").length > 1 || text.split(".net").length > 1) {


            } else if (text.split("java ").length > 1 || text.split("java ").length > 1 ||
              text.split("java ").length > 1 || text.split("python").length > 1 || text.split("ruby").length > 1) {
              return false;

            }
            if (text.split("hyderabad").length > 1 || text.split("bengaluru").length > 1 ||
              text.split("noida").length > 1 || text.split("cochin").length > 1 || text.split("kochi").length > 1 ||
              text.split("chennai").length > 1 ||
              text.split("delhi").length > 1 ||
              text.split("gurgaon").length > 1 ||
              text.split("pune").length > 1 ||
              text.split("mumbai").length > 1 ||
              text.split("kolkata").length > 1 ||
              text.split("madurai").length > 1 ||
              text.split("ranchi").length > 1 ||
              text.split("ghaziabad").length > 1 ||
              text.split("chennai").length > 1 ||
              text.split("chennai").length > 1 ||
              text.split("chennai").length > 1 ||
              text.split("chennai").length > 1 ||
              text.split("chennai").length > 1 ||
              text.split("chennai").length > 1 ||
              text.split("chennai").length > 1 ||
              text.split("chennai").length > 1 ||
              text.split("chennai").length > 1) {
              return false;
            }
            $(this).find(".action:first").addClass("checked");


          }
        }


      })
      /*
      $("#trig2:not(.clicked)").click();
      $("#trig2").addClass("clicked");*/
    }

  })

  var interval = setInterval(function () {

    setTimeout(function () {
      if ($("#pspSubmit:visible:not(.clicked)").length > 0) {
        debugger;
        $("#pspSubmit").addClass("clicked");
        $("#pspSubmit").click();
        clearInterval(interval);
      }
    }, 5000);


  })





  setTimeout(function () {
    if ($) {
      $("#trig1").click();
      var interval = setInterval(function () {


        if ($("#pspSubmit:visible").length > 0 && $("#pspRad1").prop("checked")) {
          setTimeout(function () {
            $("#pspSubmit").click();

          }, 5000);
          clearInterval(interval);
        }

      })

    }
  }, 6000);
})(myjQuery);