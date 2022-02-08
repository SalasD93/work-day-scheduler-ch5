// This function sets and displays the current date
function getCurrentDate() {
    var currentDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentDate);
}

// Object Array to hold information for each timeblock
var reminder = [
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
                localStorage.setItem(reminderKey, textReminder);
            })
        }
    });
}

var currentHour = moment().format('HH');
$('.input').each(function (index, element) {
    if ($(element).attr('id') < currentHour) {
        $(element).addClass('past');
    } else if ($(element).attr('id') == currentHour) {
        $(element).addClass('present');
    } else {
        $(element).addClass('future');
    }
});

getCurrentDate();