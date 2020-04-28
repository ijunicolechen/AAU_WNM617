// ASYNC
const showListPage = async () => {
    let d = await query({
        type: 'animals_from_user',
        params: [sessionStorage.userId]
    });

    // console.log(d);

    $("#list-page .animallist")
        .html(makeAnimalList(d.result));
}


const showUserPage = async () => {
    let d = await query({
        type: 'user_by_id',
        params: [sessionStorage.userId]
    });

    // console.log(d);

    $("#profile-page .profile-content")
        .html(makeUserProfile(d.result));
}


const callAnimalProfile = (id, target) => {
    query({
        type: 'animal_by_id',
        params: [id]
    }).then(d => {
        console.log(d);

        $(target).html(makeAnimalProfile(d.result));
    });
}
const callAnimalMap = (id, target) => {
    query({
        type: 'locations_from_animal',
        params: [id]
    }).then(async d => {
        let map_el = await makeMap(target);
        makeMarkers(
            map_el,
            d.result
        );
    });
}

const showAnimalPage = async () => {
    if (sessionStorage.animalId === undefined) {
        throw ("No animal id defined");
    }

    callAnimalProfile(
        sessionStorage.animalId,
        "#animal-profile-page .profile-content"
    );
    callAnimalMap(
        sessionStorage.animalId,
        "#animal-profile-page .map"
    );

}




const showRecentPage = async () => {
    let d = await query({
        type: 'recent_animal_locations',
        params: [sessionStorage.userId]
    });

    // console.log(d);

    let map_el = await makeMap("#recent-page .map");
    let animals = d.result.map(o => {
        o.icon = o.img;
        // o.icon = `img/icons/icon_${o.type}.svg`;
        return o;
    });
    makeMarkers(
        map_el,
        animals
    );
    map_el.data("markers").forEach((o,i)=>{
        o.addListener("click",function(e){
            //example 1
            $("#recent-page .basin").toggleClass("active");
            //example2
            map_el.data("infoWindow").open(map_el.data("map"),o);
            map_el.data("infoWindow").setContent(makeRecentWindow(animals[i]));
        })
    })
}