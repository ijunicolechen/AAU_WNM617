//templater (f=>{}) ([{},{}])

const makeAnimalList = templater(o => `
<li class="animallist-item">
<a href="#animal-profile-page" class="display-flex animal-jump" data-id="${o.id}">
	<div class="flex-none animallist-image"><img src="${o.img}" alt=""></div>
	<div class="flex-stretch animallist-title">${o.name}</div>
</a>
</li>
`);


const makeUserProfile = templater(o => `
<div class="profile-head">
	<div class="profile-image">
		<img src="${o.img}" alt="">
	</div>
</div>
<div class="profile-body">
	<div class="profile-name">${o.name}</div>
	<div class="profile-description">
		<strong>Email</strong> <span>${o.email}</span>
	</div>

	<div>
		<a href="#" class="js-logout ui-link">Logout</a>
	</div>
</div>
`);


const makeAnimalProfile = templater(o => `
<div class="profile-head">
	<div class="profile-image">
		<img src="${o.img}" alt="">
	</div>
</div>
<div class="profile-body">
	<div class="profile-name">${o.name}</div>
	<div class="profile-description">
		<div><strong>Type</strong> <span>${o.type}</span></div>
		<div><strong>Breed</strong> <span>${o.breed}</span></div>
	</div>
</div>
`);