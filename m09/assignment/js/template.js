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
<div class="collection-box"> 
    <a href = "#catsInfoPage" data-id = "${o.a_id}" data-name = "${o.a_name}" data-type = "${o.a_type}" >
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
                    <h3> ${o.a_bid} </h3> 
                </div> 
                <div class = "col-box">
                    <span> Type / Privacy </span> 
                    <h3> ${o.a_type} / ${o.a_status} </h3>
                </div> 
                <div class = "col-box">
                    <span > Create Date </span> 
                    <h3> ${o.a_create_date}</h3> 
                </div> 
            </div> 
        </div> 
    </a> 
</div>
`);