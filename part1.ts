let map : any;

interface LatLng{
    lat : number,
    lng : number
}

interface GoogleMapsConfig{
    center : LatLng,
    zoom : number
}

let Toronto : LatLng = { lat: 43, lng: -79.38 }
let initMapConfig: GoogleMapsConfig = { center: Toronto, zoom: 8};

function initMap(){
    map = new google.maps.Map(
        document.getElementById("map"), initMapConfig
        
    );

}