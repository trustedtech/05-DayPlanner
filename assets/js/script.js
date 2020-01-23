//Captures the current moment and extracts global references for later comparison
var currentMoment = moment();
var currentDate = currentMoment.format("YYYY-MM-DD");
var currentDateHour = currentMoment.format("YYYY-MM-DDTHH");
console.log("Operating Timestamp: " + currentDateHour);
console.log("To verify that the timeslots change color in relation to the current time, set currentDateHour = currentDate + 'T13', then run paintSlots().");

//Displays current day on the page
$('#currentDay').text(currentMoment.format("dddd, MMMM Do"));

//Loads saved entries from local storage
var entries = JSON.parse(localStorage.getItem("entriesDB"));

if ( entries !== null ) {

    for (var [key, value] of Object.entries(entries)) {
        $('#'+ key).children('textarea').val(value);

        if ( value !== "" ) {
            console.log("Restored: " + key + "PM -> " + value);      
}}}
else {
    entries = {9: "", 10: "", 11: "", 12: "", 1: "", 2: "", 3: "", 4: "", 5: ""};
}

//Colors the timeslots in relation to the current time
paintSlots();

$('button').click(function(){
    if ($(this).hasClass("clearBtn")){
        $(this).siblings('textarea').val("");
        var slot = $(this).parent('div').attr('id');
        entries[slot] = "";
        localStorage.setItem("entriesDB", JSON.stringify(entries));
        console.log(slot + "PM -> ~emptied~");
    }
    else
    if ($(this).hasClass("saveBtn")){
        var slot = $(this).parent('div').attr('id');
        var entry = $(this).siblings('textarea').val();
        entries[slot] = entry;
        localStorage.setItem("entriesDB", JSON.stringify(entries));
        console.log(slot + "PM -> " + entry);
    }

})



function paintSlots() {

    //Collects all timeslots into an array that we can loop over
    var timeslots = $('div');

    $(timeslots).each(function(slot){
        var field = $(this).children('textarea');
        var hour = currentDate + "T" + $(field).attr('data-hour');

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