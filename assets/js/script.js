function getCurrentDate() {
    // Thursday September 3 format
    var currentDate = moment().format('dddd, MMMM d');
    $("#currentDay").text(currentDate);
}








getCurrentDate();