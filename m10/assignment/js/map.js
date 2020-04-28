const makeMap = async (target) => {
    await checkData(() => window.google);

    let sf = {
        lat: 37.786217,
        lng: -122.399328
    };
    let map_el = $(target);

    if (!map_el.data("map"))
        map_el.data(
            "map",
            new google.maps.Map(map_el[0], {
                center: sf,
                zoom: 12,
                disableDefaultUI: true
            })
        );

    return map_el;
}


const makeMarkers = (map_el, locs) => {
    let map = map_el.data("map");
    let markers = map_el.data("markers");

    if (markers) markers.forEach(o => o.setMap(null));


    markers = [];
    locs.forEach((o, i, a) => {
        if (!o.l_lat) return;
        let m = new google.maps.Marker({
            position:{lat:o.l_lat,lng:o.l_lng},
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
         console.log(locs[0]);
         let pos={
            lat: locs[0].l_lat,
            lng: locs[0].l_lng
         };
        map.setCenter(pos);
        map.setZoom(15);
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
            if (o.l_lat) bounds.extend(o);
        });
        map.fitBounds(bounds);
    }
}