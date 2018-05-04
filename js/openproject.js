(function ($){
localStorage.timetoescapeupdated = "";
var datetimenow = new Date();
var starttime = datetimenow;
var timetoescape = 0;
var lastTime = (new Date()).getTime();
if (localStorage.getItem("timetoescape")) {
    timetoescape = localStorage.getItem("timetoescape");
}
var starttimeindate = new Date(starttime);
if (new Date().getTime() < starttimeindate.getTime()) {
    debugger;
    starttimeindate = new Date();
}

if (localStorage.getItem("lasttimeupdate")) {
    var lastdatetime = localStorage.getItem("lasttimeupdate");
    lastdatetime = new Date(lastdatetime);
    if (lastdatetime.getDate() == datetimenow.getDate()) {
        starttimeindate = lastdatetime;
    } else {
        timetoescape = 0;
        localStorage.removeItem("timetoescape");
    }

}
setInterval(function () {
    if (localStorage.getItem("timetoescape")) {
        timetoescape = localStorage.getItem("timetoescape");
    }
    var currentTime = (new Date()).getTime();
    if (currentTime > (lastTime + 2000 * 2)) {  // ignore small delays

        currentTime = (new Date()).getTime();
        console.log("You are last inactive on " + new Date(lastTime));
        console.log("You are last active on " + new Date(currentTime));
        // Probably just woke up!
        if (localStorage.getItem("timetoescape")) {
            if (localStorage.timetoescapeupdated) {

            } else {
                localStorage.timetoescapeupdated = "true";
                localStorage.setItem("timetoescape", parseInt(timetoescape) + (currentTime - lastTime));
                setTimeout(function () {
                    localStorage.timetoescapeupdated = "";
                }, 100000);
            }

        } else {
            if (localStorage.timetoescapeupdated) {

            } else {
                localStorage.timetoescapeupdated = "true";
                localStorage.setItem("timetoescape", currentTime - lastTime);
                setTimeout(function () {
                    localStorage.timetoescapeupdated = "";
                }, 100000);
            }

        }

    }
    lastTime = currentTime;





    datetimenow = new Date();
    var diffMs = datetimenow - starttimeindate;
    diffMs = diffMs - timetoescape;


    var diffDays = Math.floor(diffMs / 86400000); // days
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000); // minutes

    $("#time_entry_hours").closest("div").find(".timedetails").remove();
    $("#time_entry_hours").closest("div").append("<div class='timedetails'><br/><br/><p style='width:100%'>Time Spend = " + diffHrs + ":" + diffMins + "</p><div></div><p style='width:100%'>Intervals = " + Math.floor((timetoescape % 86400000) / 3600000) + ":" + Math.round(((timetoescape % 86400000) % 3600000) / 60000) + "</p></div>");

    $("#time_entry_hours").val((diffHrs + parseFloat((diffMins / 60).toFixed(2))).toFixed(2));






}, 2000);

localStorage.setItem("lasttimeupdate", starttimeindate);
$("body").on("click", "#new_time_entry [type=submit]", function () {

    localStorage.setItem("lasttimeupdate", datetimenow);
    localStorage.setItem("timetoescape", 0);
});
})(myjQuery);