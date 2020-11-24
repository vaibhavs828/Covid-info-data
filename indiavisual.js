//https://www.trackcorona.live/api/provinces
//function updateMap(){
//    fetch("https://www.trackcorona.live/api/provinces")
//    .then

//}
/*async function updateMap(){
    const jsondata = await fetch("https://www.trackcorona.live/api/provinces");
    const jsdata = await jsondata.json()
    console.log(jsdata);

}
updateMap();*/

function updateMap() {
    var space = "    ";
    fetch("https://www.trackcorona.live/api/provinces")
        .then(response => response.json())
        .then(rsp => {
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                cases = element.confirmed;
                recovered = element.recovered;
                var popup = new mapboxgl.Popup({offset:25}).setText(
                    `Number of confirmed cases : ${cases} ; ${space} Number of recoveries : ${recovered}`
                );
    
                    // create DOM element for the marker
                    var el = document.createElement('div');
                    el.id = 'marker';
    
                    // create the marker
                    new mapboxgl.Marker(el)
                    .setLngLat([longitude,latitude])
                    .setPopup(popup)
                    .addTo(map); 
                });
            })
    }
    let interval = 20000;
    setInterval(updateMap() , interval);
    