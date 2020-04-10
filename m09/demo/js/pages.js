// ASYNC
const showListPage = async () => {
    let d = await query({
        type: 'animals_from_user',
        params: [sessionStorage.userId]
    });

    console.log(d);

    $("#list-page .animallist")
        .html(makeAnimalList(d.result));
}


const showUserPage = async () => {
    let d = await query({
        type: 'user_by_id',
        params: [sessionStorage.userId]
    });

    console.log(d);

    $("#profile-page .profile-content")
        .html(makeUserProfile(d.result));
}


const showAnimalPage = async () => {
    if (sessionStorage.animalId === undefined) {
        throw ("No animal id defined");
    }

    let d = await query({
        type: 'animal_by_id',
        params: [sessionStorage.animalId]
    });

    console.log(d);

    $("#animal-profile-page .profile-content")
        .html(makeAnimalProfile(d.result));
}