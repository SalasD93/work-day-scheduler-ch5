function getCurrentDate() {
    // Thursday September 3 format
    var currentDate = moment().format('dddd, MMMM d');
    $("#currentDay").text(currentDate);
}


// need past present future color time blocks
// need to set the time to current time
// if time is < .past
// if time is === .present
// if time is > .future

var timeBlocksObj = [
    {
        time: '9',
        hour: '09',
        meridiem: 'am',
    
    },
    {
        time: '10',
        hour: '10',
        meridiem: 'am',
    
    },
    {
        time: '11',
        hour: '11',
        meridiem: 'am',
    
    },
    {
        time: '12',
        hour: '12',
        meridiem: 'pm',
    
    },
    {
        time: '1',
        hour: '13',
        meridiem: 'pm',
    
    },
    {
        time: '2',
        hour: '14',
        meridiem: 'pm',
    
    },
    {
        time: '3',
        hour: '15',
        meridiem: 'pm',
    
    },
    {
        time: '4',
        hour: '16',
        meridiem: 'pm',
    
    },
    {
        time: '5',
        hour: '17',
        meridiem: 'pm',
    
    },
];

// function setCurrentTime() {
//     let currentTIme = moment().format('HH');
//     for (var i = 0; i < timeBlocksObj.length; i++) {
//         if (currentTIme < timeBlocksObj[i].hour.length) {
            
//         }
//     }
// }

// var currentHour = moment().format('HH');
// $()
//     .each(function(){
//     var val = parseInt($(this).prop('id'));
//     if(val > currentHour && val < currentHour + 6){
//         $(this).css('background-color','Blue');
//     }else if(val < currentHour && val > currentHour-6){
//         $(this).css('background-color','Red');
//     }else if(val === currentHour){
//         $(this).css('background-color','Green');
//     }else{
//         $(this).css('background-color','White');
//     }
// });
var currentHour = 11;
$('textarea').each(function (index, element){
    // $(element).css('background-color', 'red');
    if ($(element).attr('id') < currentHour) {
        // $(element).css('background-color', 'red');
        $(element).addClass('past');
    } else if ($(element).attr('id') == currentHour) {
        $(element).addClass('present');
    } else {
        $(element).addClass('future');
    }
    console.log(element);
});



// $('.saveBtn').on('click', function() {
//     var userInput = document.querySelector('#09').value.trim();
//     JSON.stringify(localStorage.setItem(userInput));
// });


getCurrentDate();