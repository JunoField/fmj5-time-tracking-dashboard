document.getElementById("button-daily").addEventListener("click", () => {
    timeSelect("day");
    document.getElementById("button-daily").classList.add("time-active");
});
document.getElementById("button-weekly").addEventListener("click", () => {
    timeSelect("week");
    document.getElementById("button-weekly").classList.add("time-active");
});
document.getElementById("button-monthly").addEventListener("click", () => {
    timeSelect("month");
    document.getElementById("button-monthly").classList.add("time-active");
});

function timeSelect(timeFrame){
    console.log("time clicked");
    let elementsToHide = document.querySelectorAll(".time-current, .time-previous");
    elementsToHide.forEach(element => {
        element.classList.add("hidden");
    });
    
    
    let elementsToShow = document.querySelectorAll(".current-" + timeFrame + ", .previous-" + timeFrame);
    elementsToShow.forEach(element => {
        element.classList.remove("hidden");
    });

    document.querySelectorAll(".time-button").forEach(element => {
        element.classList.remove("time-active");
    })

}