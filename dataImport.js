window.addEventListener('load', loadData);

async function loadData(){
    getDataAsJson().then(data => {
        console.log(data);

        for (var section of data){
            let sectionName = section.title;
            console.log(sectionName);
            document.getElementById("")
        };
    })

}


async function getDataAsJson(){
    const data = await (await fetch('./data.json')).json();
    return data; //returns data as array
}