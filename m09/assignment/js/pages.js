// ASYNC
const showBreedPage = async () => {
    let d = await query({
        type: 'cat_breed'
    });

    console.log(d);

    $("#breedPage .breed-list")
        .append()
        .html(makeBreedList(d.result));
}