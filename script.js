// Current time on page load
var calendar = null












function setUp() {
    calendar = localStorage.getItem("calendar");
    if (calendar) {
        calendar = JSON.parse(calendar);
        displayCalendar();
    }
    else {
        calendar = ["", "", "", "", "", "", "", ""];
        saveCalendar();
    }
    $("div[type=button]").on("click", handleBtn);
}

function saveCalendar() {
    localStorage.setItem("calendar", JSON.stringify(calendar));

}

function displayCalendar() {
    var nowHr = moment().hour();
    $("input[type=text]").each(function (index) {
        $(this).val(calendar[index]);
        var tod = +$(this).attr("tod");
        if(tod < nowHr) {
            $(this).css("background-color", "gray");
        } else if(tod > nowHr) {
            $(this).css("background-color", "green");
        } else {
            $(this).css("background-color", "red");
        }
    });
}

function handleBtn() {
    $("input[type=text]").each(function (index) {
        calendar[index] = $(this).val()
    });
    saveCalendar();

}





function setCurrentDate() {
    var today = moment();
    $('#currentDay').text(today.format("MMM Do, YYYY"));
}

setCurrentDate();
setUp();