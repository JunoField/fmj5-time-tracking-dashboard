window.addEventListener('load', loadData);

async function loadData(){
    getDataAsJson().then(data => {
        console.log(data);

        for (var section of data){
            let sectionName = section.title.toLowerCase().replace(/ /g,"-");

            document.getElementById(sectionName + "-current-day").innerHTML = section.timeframes.daily.current;
            document.getElementById(sectionName + "-current-week").innerHTML = section.timeframes.weekly.current;
            document.getElementById(sectionName + "-current-month").innerHTML = section.timeframes.monthly.current;

            document.getElementById(sectionName + "-previous-day").innerHTML = "Yesterday - " + section.timeframes.daily.previous;
            document.getElementById(sectionName + "-previous-week").innerHTML = "Last Week - " + section.timeframes.weekly.previous;
            document.getElementById(sectionName + "-previous-month").innerHTML = "Last Month - " + section.timeframes.monthly.previous;

        };
    })

}


async function getDataAsJson(){
    const data = await (await fetch('./data.json')).json();
    return data; //returns data as array
}