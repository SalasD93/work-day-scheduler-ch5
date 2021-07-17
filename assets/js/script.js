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

// var reminder = [
//     {
//         time: '9',
//         hour: '09',
//         meridiem: 'am',
    
//     },
//     {
//         time: '10',
//         hour: '10',
//         meridiem: 'am',
    
//     },
//     {
//         time: '11',
//         hour: '11',
//         meridiem: 'am',
    
//     },
//     {
//         time: '12',
//         hour: '12',
//         meridiem: 'pm',
    
//     },
//     {
//         time: '1',
//         hour: '13',
//         meridiem: 'pm',
    
//     },
//     {
//         time: '2',
//         hour: '14',
//         meridiem: 'pm',
    
//     },
//     {
//         time: '3',
//         hour: '15',
//         meridiem: 'pm',
    
//     },
//     {
//         time: '4',
//         hour: '16',
//         meridiem: 'pm',
    
//     },
//     {
//         time: '5',
//         hour: '17',
//         meridiem: 'pm',
    
//     },
// ];


var currentHour = moment().format('HH');
$('.input').each(function (index, element){
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

var reminder = [];
$('.saveBtn').on('click', function(event) {
    event.preventDefault();

    var reminder = $('.input')
    .val()
    .trim();

    // JSON.stringify(document.querySelector('#09').val().trim());
    localStorage.setItem("reminder", JSON.stringify(reminder));
});

// var reminderArray = [
//     {
//         id: $('.input').attr('#09'),
//         text: '',
//     },
//     {
//         id: `$('.input').attr('#10')`,
//         text: '',
//     },
//     {
//         id: `$('.input').attr('#11')`,
//         text: '',
//     },
//     {
//         id: `$('.input').attr('#12')`,
//         text: '',
//     },
//     {
//         id: `$('.input').attr('#13')`,
//         text: '',
//     },
//     {
//         id: `$('.input').attr('#14')`,
//         text: '',
//     },
//     {
//         id: `$('.input').attr('#15')`,
//         text: '',
//     },
//     {
//         id: `$('.input').attr('#16')`,
//         text: '',
//     },
//     {
//         id: `$('.input').attr('#17')`,
//         text: '',
//     },
    
// ];console.log(reminderArray.id[0]);


// var reminder = $('textarea').val().trim();
// function saveReminders() {
//     for (var i = 0; i < reminderArray.length; i++) {
//         if (reminder[i])

//     }
    
// }
// get the text area add class from reminderArray
// push value to the array


// function saveReminders(reminder) {
//     $('.input').forEach(function (_hour) {
//     localStorage.setItem('reminder', JSON.stringify(_hour));
//     });
// }






// function renderReminders(reminders) {
//     var reminders = JSON.parse(localStorage.getItem(reminder) || []);
//     $('.input').empty();

//     for (var i = 0; i < reminders.length; i++) {
//         var setText = $('.input');
//         setText.innerHTML(reminders[i]);
//     }
// }

// $('.saveBtn').on('click', function(event) {
//     event.preventDefault();
   
//     function setReminders(reminder) {
//         var reminder = $('.input')
//         .val()
//         .trim();

//         for (var i = 0; i < reminder.length; i++) {
//         localStorage.setItem("reminder", JSON.stringify(reminder))
    
//             .then(function(reminders) {
//                 var reminders = JSON.parse(localStorage.getItem(reminder));
//                 // $('.input').empty();

//                 for (var i = 0; i < reminders.length; i++) {
//                     var setText = $('.input');
//                     setText.innerHTML(reminders[i]);
//                     $('textarea').append('setText');
//                 }
//             })
//         }
//     }
//     return setReminders();
// })
    // JSON.stringify(document.querySelector('#09').val().trim());









// $(document).on('reload', function(get, getItems) {
//     JSON.parse(localStorage.getItem(reminder));
// });


// $('.saveBtn').on('click', function(event) {
//     event.preventDefault();
//     var reminder1 = $('#09').val().trim();
//     // JSON.stringify(document.querySelector('#09').val().trim());
//     localStorage.setItem("reminder1", JSON.stringify(reminder1))
//     .then(function(event){
//         console.log(event);
//         var reminders = JSON.parse(localStorage.getItem(reminder1));
//         var setText = $('.input');
//         setText.innerHTML(reminders);
//         $('textarea').append('setText');
//     })
// })
// $('.saveBtn').on('click', function(event) {
//     event.preventDefault();
//     var reminder2 = $('#10').val().trim();
//     // JSON.stringify(document.querySelector('#09').val().trim());
//     localStorage.setItem("reminder2", JSON.stringify(reminder2));
// });
// $('.saveBtn').on('click', function(event) {
//     event.preventDefault();
//     var reminder3 = $('#12').val().trim();
//     // JSON.stringify(document.querySelector('#09').val().trim());
//     localStorage.setItem("reminder3", JSON.stringify(reminder3));
// });
// $('.saveBtn').on('click', function(event) {
//     event.preventDefault();
//     var reminder4 = $('#13').val().trim();
//     // JSON.stringify(document.querySelector('#09').val().trim());
//     localStorage.setItem("reminder4", JSON.stringify(reminder4));
// });
// $('.saveBtn').on('click', function(event) {
//     event.preventDefault();
//     var reminder5 = $('#14').val().trim();
//     // JSON.stringify(document.querySelector('#09').val().trim());
//     localStorage.setItem("reminder5", JSON.stringify(reminder5));
// });
// $('.saveBtn').on('click', function(event) {
//     event.preventDefault();
//     var reminder = $('#15').val().trim();
//     // JSON.stringify(document.querySelector('#09').val().trim());
//     localStorage.setItem("reminder6", JSON.stringify(reminder));
// });
// $('.saveBtn').on('click', function(event) {
//     event.preventDefault();
//     var reminder = $('#1').val().trim();
//     // JSON.stringify(document.querySelector('#09').val().trim());
//     localStorage.setItem("reminder", JSON.stringify(reminder));
// });
// $('.saveBtn').on('click', function(event) {
//     event.preventDefault();
//     var reminder = $('#1').val().trim();
//     // JSON.stringify(document.querySelector('#09').val().trim());
//     localStorage.setItem("reminder", JSON.stringify(reminder));
// });
// $('.saveBtn').on('click', function(event) {
//     event.preventDefault();
//     var reminder = $('#1').val().trim();
//     // JSON.stringify(document.querySelector('#09').val().trim());
//     localStorage.setItem("reminder", JSON.stringify(reminder));
// });

        // } else if ($('.saveBtn').on('click', function(event) {
        //     event.preventDefault();
        //     var reminder = $('#09').val().trim()
        //     // JSON.stringify(document.querySelector('#09').val().trim());
        //     localStorage.setItem("reminder", JSON.stringify(reminder));
        // });) {
        //     // JSON.stringify(document.querySelector('#09').val().trim());
        //     localStorage.setItem("reminder", JSON.stringify(reminder));
        // } else if (reminder = $('#11').val().trim()) {
        //     // JSON.stringify(document.querySelector('#09').val().trim());
        //     localStorage.setItem("reminder", JSON.stringify(reminder));
        // } else if (reminder = $('#12').val().trim()) {
        //     // JSON.stringify(document.querySelector('#09').val().trim());
        //     localStorage.setItem("reminder", JSON.stringify(reminder));
        // } else if (reminder = $('#13').val().trim()) {
        //     // JSON.stringify(document.querySelector('#09').val().trim());
        //     localStorage.setItem("reminder", JSON.stringify(reminder));
        // } else if (reminder = $('#14').val().trim()) {
        //     // JSON.stringify(document.querySelector('#09').val().trim());
        //     localStorage.setItem("reminder", JSON.stringify(reminder));
        // } else if (reminder = $('#15').val().trim()) {
        //     // JSON.stringify(document.querySelector('#09').val().trim());
        //     localStorage.setItem("reminder", JSON.stringify(reminder));
        // } else if (reminder = $('#16').val().trim()) {
        //     // JSON.stringify(document.querySelector('#09').val().trim());
        //     localStorage.setItem("reminder", JSON.stringify(reminder));
        // } else if (reminder = $('#17').val().trim()) {
        //     // JSON.stringify(document.querySelector('#09').val().trim());
        //     localStorage.setItem("reminder", JSON.stringify(reminder));
        // } else {
        //     console.log('empty');
        // }


// if day = currentset getItem


getCurrentDate();