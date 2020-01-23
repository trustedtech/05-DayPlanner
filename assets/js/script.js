//Captures the current moment and extracts global references for later comparison
var currentMoment = moment();
var currentDate = currentMoment.format("YYYY-MM-DD");
//var currentDateTime = currentMoment.format("YYYY-MM-DDTHH:mm:ss");
var currentDateHour = currentMoment.format("YYYY-MM-DDTHH");
currentDateHour = "2020-01-22T13";
console.log(currentDateHour);

//Displays current day on the page
$('#currentDay').text(currentMoment.format("dddd, MMMM Do"));

//Collects all timeslots into an array
var timeslots = $('div');

//Colors the timeslots in relation to the current time
paintSlots();





function paintSlots() {

    $(timeslots).each(function(slot){
        var field = $(this).children('textarea');
        var hour = currentDate + "T" + $(field).attr('data-hour');
        console.log(hour + " ~~~ " + currentDateHour);

        if ( moment(hour) < moment(currentDateHour) ) {
            $(field).addClass("past");
        } 
        else 
        if ( moment(hour).isSame(moment(currentDateHour)) ) {
            $(field).addClass("present");
        } 
        else
        if ( moment(hour) > moment(currentDateHour) ) {
            $(field).addClass("future");
        }

    })
    
}