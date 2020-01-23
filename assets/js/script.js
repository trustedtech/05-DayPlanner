//Captures the current moment and extracts global references for later comparison
var currentMoment = moment();
var currentDateTime = currentMoment.format("YYYY-MM-DDTHH:mm:ss");
var currentDateHour = currentMoment.format("YYYY-MM-DDTHH");
console.log(currentDateTime);
console.log(currentDateHour);

//Displays current day on the page
$('#currentDay').text(currentMoment.format("dddd, MMMM Do"));

//Builds the timeMap object to facilitate dynamic behaviors 
var workHours = ["9AM","10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var timeMap = {};

workHours.forEach(function(hour){
var hourMark = currentMoment.clone().
//slotmap.hour = 0;

})

//
function createTimeslots() {
    var slot = $('<div></div>');

}