window.addEventListener('load', loadData);

async function loadData(){
    getDataAsJson().then(data => {
        console.log(data);

        for (var section of data){
            let sectionName = section.title.toLowerCase().replace(/ /g,"-"); //change section title from file to lowercase and replace spaces with hyphens

            //put all data into display
            document.getElementById(sectionName + "-current-day").innerHTML = addHrs(section.timeframes.daily.current);
            document.getElementById(sectionName + "-current-week").innerHTML = addHrs(section.timeframes.weekly.current);
            document.getElementById(sectionName + "-current-month").innerHTML = addHrs(section.timeframes.monthly.current);

            document.getElementById(sectionName + "-previous-day").innerHTML = "Yesterday - " + addHrs(section.timeframes.daily.previous);
            document.getElementById(sectionName + "-previous-week").innerHTML = "Last Week - " + addHrs(section.timeframes.weekly.previous);
            document.getElementById(sectionName + "-previous-month").innerHTML = "Last Month - " + addHrs(section.timeframes.monthly.previous);

        };
    })

}

// add correct "hr" or "hrs" to number
function addHrs(number){
    if (number == "1"){
        return number + "hr";
    } else{
        return number + "hrs";
    }
}

//function to get data from json file
async function getDataAsJson(){
    const data = await (await fetch('./data.json')).json();
    return data;
}