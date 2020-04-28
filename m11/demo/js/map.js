const makeMap = async (target) => {
    await checkData(() => window.google);

    let sf = {
        lat: 37.786217,
        lng: -122.399328
    };
    let map_el = $(target);

    if (!map_el.data("map")) map_el
        .data(
            "map",
            new google.maps.Map(map_el[0], {
                center: sf,
                zoom: 12,
                disableDefaultUI: true,
                styles: mapStyles
            })
        )
        .data(
            "infoWindow",
            new google.maps.InfoWindow({
                content: ''
            })
        );

    console.log(
        map_el.data("map").getCenter().lat(),
        map_el.data("map").getCenter().lng()
    )

    return map_el;
}


const makeMarkers = (map_el, locs) => {

    let map = map_el.data("map");
    let markers = map_el.data("markers");

    if (markers) markers.forEach(o => o.setMap(null));

    markers = [];

    locs.forEach((o, i, a) => {
        if (!o.lat) return;
        let m = new google.maps.Marker({
            position: o,
            map: map,
            icon: {
                url: o.icon,
                scaledSize: {
                    width: 40,
                    height: 40
                }
            }
        });
        markers.push(m);
    });
    map_el.data("markers", markers);

    setTimeout(() => {
        setMapBounds(map, locs)
    }, 100);
}



const setMapBounds = (map, locs) => {
    if (locs.length == 1) {
        console.log(locs[o]);
        map.setCenter(locs[o]);
        map.setZoom(14);
    } else
    if (locs.length == 0) {
        if (window.location.protocol !== "https:") return;
        else {
            
            navigator.geolocation.getCurrentPosition(p => {
                let pos = {
                    lat: p.coords.latitude,
                    lng: p.coords.longitude
                };
                map.setCenter(pos);
                map.setZoom(15);
            }, (...args) => {
                console.log("error?", args);
            }, {
                enableHighAccuracy: false,
                timeout: 5000,
                maximumAge: 0
            })
        }
    } else {
        let bounds = new google.maps.LatLngBounds(null);
        locs.forEach(o => {
            if (o.lat) bounds.extend(o);
        });
        map.fitBounds(bounds);
    }
}




const mapStyles = [{
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [{
            "weight": "2.00"
        }]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [{
            "color": "#9c9c9c"
        }]
    },
    {
        "featureType": "all",
        "elementType": "labels.text",
        "stylers": [{
            "visibility": "on"
        }]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
            "color": "#f2f2f2"
        }]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#ffffff"
        }]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#ffffff"
        }]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#eeeeee"
        }]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#7b7b7b"
        }]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "color": "#ffffff"
        }]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{
            "visibility": "simplified"
        }]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
                "color": "#46bcec"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [{
            "color": "#c8d7d4"
        }]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#070707"
        }]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [{
            "color": "#ffffff"
        }]
    }
];