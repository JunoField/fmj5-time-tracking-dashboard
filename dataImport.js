window.addEventListener('load', loadData);

async function loadData(){
    getDataAsJson().then(data => {
        console.log(data);

        for (var section of data){
            let sectionName = section.title.toLowerCase();
            console.log(section.timeframes.daily.current);
            document.getElementById(sectionName + "-current-day").innerHTML = section.timeframes.daily.current;
        };
    })

}


async function getDataAsJson(){
    const data = await (await fetch('./data.json')).json();
    return data; //returns data as array
}