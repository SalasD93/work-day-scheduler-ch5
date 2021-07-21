// This function sets and displays the current date
function getCurrentDate() {
    // Thursday September 3 format
    var currentDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentDate);
}

// Object Array to hold information for each timeblock
var reminder = [
    // $('.input').text(reminder[i].time + reminder[i].meridiem)
    {   
        time: '9',
        hour: '09',
        meridiem: 'am',
        text: '',
    },
    {   
        time: '10',
        hour: '10',
        meridiem: 'am',
        text: '',
    },
    {
        time: '11',
        hour: '11',
        meridiem: 'am',
        text: '',
    },
    {
        time: '12',
        hour: '12',
        meridiem: 'pm',
        text: '',
    },
    {
        time: '1',
        hour: '13',
        meridiem: 'pm',
        text: '',
    },
    {
        time: '2',
        hour: '14',
        meridiem: 'pm',
        text: '',
    },
    {
        time: '3',
        hour: '15',
        meridiem: 'pm',
        text: '',
    },
    {
        time: '4',
        hour: '16',
        meridiem: 'pm',
        text: '',
    },
    {
        time: '5',
        hour: '17',
        meridiem: 'pm',
        text: '',
    },
];
console.log(reminder);

// timeblock container
var timeBlocksContainer = $('.container');
$('.container').addClass('time-block');

// loop through each timeblock
for (var i = 0; i < reminder.length; i++) {
    var currentBlock = $('<div>');
    currentBlock.addClass("row");

    var reminderHour = $('<div>');
    reminderHour.addClass("col-sm-1 hour");
    reminderHour.text(reminder[i].time + reminder[i].meridiem);
    currentBlock.append(reminderHour);

    var textArea = $(`<textarea id="${reminder[i].hour}">`);
    $(textArea).val(localStorage.getItem(`${reminder[i].hour}`));
    // console.log(localStorage.getItem(`${reminder[i].hour}`));
    textArea.addClass("col-sm-10 input description");
    currentBlock.append(textArea);

    var saveButton = $(`<button id="${reminder[i].hour}"><i class="fas fa-save"></i>`);
    saveButton.addClass("col-sm-1 saveBtn");
    currentBlock.append(saveButton);
    
    timeBlocksContainer.append(currentBlock);
    // Save text area value to localStorage
    $('.saveBtn').on('click', function(){
        var buttonSubmit = $(this).attr('id');
        var reminderKey = $(this).siblings('textarea').attr('id');
        var textReminder = $(this).siblings('textarea').val().trim();
        if (buttonSubmit === reminderKey) {
            $(textArea).each(function(setReminder){
                // console.log(reminderKey, textReminder);
                localStorage.setItem(reminderKey, textReminder);
                // console.log(setReminder);
                // needed to remove to prevent display of current text in last array object
                // $(textArea).val(localStorage.getItem(reminderKey));
                // console.log(localStorage.getItem(reminderKey));
            })
        }
    });
}

// need past present future color time blocks
// need to set the time to current time
// if time is < .past
// if time is === .present
// if time is > .future
// This function sets the timeblock color coding for past, present, and future
var currentHour = moment().format('HH');
$('.input').each(function (index, element) {
    if ($(element).attr('id') < currentHour) {
        $(element).addClass('past');
    } else if ($(element).attr('id') == currentHour) {
        $(element).addClass('present');
    } else {
        $(element).addClass('future');
    }
    // console.log(element);
});

// Old code
// This function sets local storage when save button clicked
// var reminder = [];
// $('.saveBtn').on('click', function(event) {
//     event.preventDefault();

//     const input = $(this).siblings('textarea').val().trim();
//     const time = $(this).siblings("div").text();

    
//     localStorage.setItem(time, JSON.stringify(input));
// });

// Old
// This calls each item from local storage for the text to persist in textarea on page refresh
// $("#09").val(JSON.parse(localStorage.getItem("9AM")));
// $("#10").val(JSON.parse(localStorage.getItem("10AM")));
// $("#11").val(JSON.parse(localStorage.getItem("11AM")));
// $("#12").val(JSON.parse(localStorage.getItem("12PM")));
// $("#13").val(JSON.parse(localStorage.getItem("1PM")));
// $("#14").val(JSON.parse(localStorage.getItem("2PM")));
// $("#15").val(JSON.parse(localStorage.getItem("3PM")));
// $("#16").val(JSON.parse(localStorage.getItem("4PM")));
// $("#17").val(JSON.parse(localStorage.getItem("5PM")));
// given by askBCS
// $("#10").val(localStorage.getItem('10AM'));
getCurrentDate();