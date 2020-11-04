//When the page loads, display current day and time
$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    //Save Button; When clicked, stores both text and time to local storage
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

    //Get values from each hour of the day from local storage
    $("#hr9 .description").val(localStorage.getItem("hr9"));
    $("#hr10 .description").val(localStorage.getItem("hr10"));
    $("#hr11 .description").val(localStorage.getItem("hr11"));
    $("#hr12 .description").val(localStorage.getItem("hr12"));
    $("#hr13 .description").val(localStorage.getItem("hr13"));
    $("#hr14 .description").val(localStorage.getItem("hr14"));
    $("#hr15 .description").val(localStorage.getItem("hr15"));
    $("#hr16 .description").val(localStorage.getItem("hr16"));
    $("#hr17 .description").val(localStorage.getItem("hr17"));



    function trackHour() {
        //Current time
        var currentHr = moment().hour();
        
        //Store the hour of each time block as a number in a variable
        $(".time-block").each(function () {
            var hrBlock = parseInt($(this).attr("id").split("hour")[1]);
            console.log(hrBlock, currentHr)
        
        //If the current time has moved past the hour in the block, 
        //Set the "past" class on that block and remove any other classes
            if (hrBlock < currentHr) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");

        //If the current time is equal to the time on the block
        //Set the "present" class on that block and remove any other classes
            } else if (hrBlock === currentHr) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");

        //Otherwise, remove any other classes and add the "future" class to the other block        
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    trackHour();
});