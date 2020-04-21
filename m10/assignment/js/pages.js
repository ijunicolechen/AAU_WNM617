// ASYNC
const showBreedPage = async () => {
    let d = await query({
        type: 'cat_breed'
    });

    //console.log(d);

    $("#breedPage .breed-list")
        .append()
        .html(makeBreedList(d.result));
}

const showCollectionPage = async (filter) => {
    let filterType, catType;
    console.log(filter);
    switch (filter) {
        case 'ALL':
            filterType = "cat_collection_all";
            break;
        case 'FERAL':
            filterType = "cat_collection_type";
            catType = 0;
            break;
        case 'PET':
            filterType = "cat_collection_type";
            catType = 1;
            break;
    }
    let d = await query({
        type: filterType,
        params: [catType]
    });

    //console.log(d);

    $("#collectPage .collection-list")
        .html(makeCollectionList(d.result));
}

const showProfilePage = async () => {
    let d = await query({
        type: 'user_by_id',
        params: [sessionStorage.userId]
    });

    //console.log(d);

    $("#profileDisplayPage .user-container")
        .html(makeProfileList(d.result));
}



const showcatsInfoPage = async () => {
  // let di = await query({
  //     type: 'cat_by_id_image',
  //     params: [sessionStorage.catId]
  // })
 
  let dc = await query({
    type: 'cat_by_id',
    params: [sessionStorage.catId],
  });
  console.log(dc.result);
  // $("#profileDisplayPage .user-container")
  //     .html(makeCatInfoList(dc.result, di.result));
  $('#catsInfoPage #catInfoBox').html(makeCatInfoPage(dc.result));
};

const showRecentPage = async () => {
    let d = await query({
        type: 'recent_animal_locations',
        params: [sessionStorage.userId]
    });

    // console.log(d);

    let map_el = await makeMap("#mapPage #googleMap");

    makeMarkers(
        map_el,
        d.result.map(o => {
            o.icon = o.img;
            // o.icon = `img/icons/icon_${o.type}.svg`;
            return o;
        })
    );
}