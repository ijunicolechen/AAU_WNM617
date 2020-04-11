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