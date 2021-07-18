// This function sets and displays the current date
function getCurrentDate() {
    // Thursday September 3 format
    var currentDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentDate);
}

// need past present future color time blocks
// need to set the time to current time
// if time is < .past
// if time is === .present
// if time is > .future
// This function sets the timeblock color coding for past, present, and future
var currentHour = moment().format('HH');
$('.input').each(function (index, element){
    if ($(element).attr('id') < currentHour) {
        $(element).addClass('past');
    } else if ($(element).attr('id') == currentHour) {
        $(element).addClass('present');
    } else {
        $(element).addClass('future');
    }
    console.log(element);
});

// This function sets local storage when save button clicked
var reminder = [];
$('.saveBtn').on('click', function(event) {
    event.preventDefault();

    const input = $(this).siblings('textarea').val().trim();
    const time = $(this).siblings("div").text();

    
    localStorage.setItem(time, JSON.stringify(input));
});

// This calls each item from local storage for the text to persist in textarea on page refresh
$("#09").val(JSON.parse(localStorage.getItem("9AM")));
$("#10").val(JSON.parse(localStorage.getItem("10AM")));
$("#11").val(JSON.parse(localStorage.getItem("11AM")));
$("#12").val(JSON.parse(localStorage.getItem("12PM")));
$("#13").val(JSON.parse(localStorage.getItem("1PM")));
$("#14").val(JSON.parse(localStorage.getItem("2PM")));
$("#15").val(JSON.parse(localStorage.getItem("3PM")));
$("#16").val(JSON.parse(localStorage.getItem("4PM")));
$("#17").val(JSON.parse(localStorage.getItem("5PM")));
// given by askBCS
// $("#10").val(localStorage.getItem('10AM'));
getCurrentDate();