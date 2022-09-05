//add event listeners for button objects
document.getElementById("button-day").addEventListener("click", () => {timeSelect("day");});
document.getElementById("button-week").addEventListener("click", () => {timeSelect("week");});
document.getElementById("button-month").addEventListener("click", () => {timeSelect("month");});


//when a time frame is selected:
function timeSelect(timeFrame){
    //hide all existing times
    let elementsToHide = document.querySelectorAll(".time-current, .time-previous");
    elementsToHide.forEach(element => {
        element.classList.add("hidden");
    });
    
    //show times that have just been enabled
    let elementsToShow = document.querySelectorAll(".current-" + timeFrame + ", .previous-" + timeFrame);
    elementsToShow.forEach(element => {
        element.classList.remove("hidden");
    });

    //remove active state from buttons
    document.querySelectorAll(".time-button").forEach(element => {
        element.classList.remove("time-active");
    })
    //apply active state to applied button
    document.getElementById("button-" + timeFrame).classList.add("time-active");

}