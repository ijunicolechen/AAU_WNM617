//templater (f=>{}) ([{},{}])

const makeBreedList = templater(o => `
<div class = "breed-box">
    <a href = "#addcatPage" data-id = "${o.b_id}" data-breed="${o.b_name}" >
        <div class = "breed-content">
            <div class = "breedImg-set" >
                <div class = "breedImg-single" >
                    <img src = "${o.b_img}" >
                </div> 
            </div> 
            <div class = "breed-title text-center" >
            <h3>${o.b_name}</h3> 
            </div> 
        </div> 
    </a> 
</div>
`);


const makeCollectionList = templater(o => `
<div class="collection-box jump-catInfo" data-id="${o.a_id}" data-type="${o.a_type}"> 
    <a href = "#catsInfoPage"  >
        <div class = "collection-card display-flex">
            <div class = "collection-imgBox">
                <img src = "${o.i_img}" alt = "Cali">
            </div> 
            <div class = "icon-favor" data-favor = "${o.a_favorite}">
                <img src = "img/icon/favorite.svg" alt = "favorite">
            </div> 
            <div class = "collection-infoBox">
                <div class = "col-box">
                    <span> Name </span> 
                    <h3> ${o.a_name} </h3> 
                </div> 
                <div class = "col-box">
                    <span> Breed </span> 
                    <h3> ${o.b_name} </h3> 
                </div> 
                <div class = "col-box">
                    <span> Type / Privacy </span> 
                    <h3> ${getString(o.a_type,"type")} / ${getString(o.a_status,"status")} </h3>
                </div> 
                <div class = "col-box">
                    <span > Create Date </span> 
                    <h3> ${getDate(o.a_create_date)}</h3> 
                </div> 
            </div> 
        </div> 
    </a> 
</div>
`);

const makeProfileList = templater(o => ` <div class="profile-imgBox margin-left-auto margin-right-auto">
                            <img src="${o.u_img}" alt="I-Chen">
                        </div>
                        <div class="profile-content" data-id="${o.u_id}">
                            <div class="edit-icon">
                                <?xml version="1.0" ?>
                                <!DOCTYPE svg
                                    PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>
                                <svg enable-background="new 0 0 24 24" id="Layer_1" version="1.1" viewBox="0 0 24 24"
                                    xml:space="preserve" xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <path
                                        d="M21.635,6.366c-0.467-0.772-1.043-1.528-1.748-2.229c-0.713-0.708-1.482-1.288-2.269-1.754L19,1C19,1,21,1,22,2S23,5,23,5  L21.635,6.366z M10,18H6v-4l0.48-0.48c0.813,0.385,1.621,0.926,2.348,1.652c0.728,0.729,1.268,1.535,1.652,2.348L10,18z M20.48,7.52  l-8.846,8.845c-0.467-0.771-1.043-1.529-1.748-2.229c-0.712-0.709-1.482-1.288-2.269-1.754L16.48,3.52  c0.813,0.383,1.621,0.924,2.348,1.651C19.557,5.899,20.097,6.707,20.48,7.52z M4,4v16h16v-7l3-3.038V21c0,1.105-0.896,2-2,2H3  c-1.104,0-2-0.895-2-2V3c0-1.104,0.896-2,2-2h11.01l-3.001,3H4z" />
                                </svg>
                            </div>
                            <div class="user-information">
                                <h3>Da Miao</h3>
                                <div class="user-location">${o.u_city},${o.u_state}</div>
                                <div class="user-email">${o.u_email}</div>
                            </div>
                            <div class="user-ranking display-flex">
                                <div class="ranking-box">
                                    <h6>Title</h6>
                                    <h4>Novice</h4>
                                </div>
                                <div class="ranking-box">
                                    <h6>Collection</h5>
                                        <h4>10</h4>
                                </div>
                                <div class="ranking-box">
                                    <h6>Login</h6>
                                    <h4>${getDate(o.u_login_date)}</h4>
                                </div>
                            </div>
                        </div>`);