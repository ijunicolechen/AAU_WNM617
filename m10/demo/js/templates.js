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
<div class="display-flex">
	<div class="profile-image flex-none">
		<img src="${o.img}" alt="">
	</div>
	<div class="flex-stretch">
		<h2>${o.name}</h2>
		<div>
			<div><strong>Type</strong> <span>${o.type}</span></div>
			<div><strong>Breed</strong> <span>${o.breed}</span></div>
		</div>
	</div>
</div>
`);


const makeRecentWindow = templater(o=>`
<div class="display-flex recent-animal">
	<div class="flex-none">
		<div class="recent-image">
			<img src="${o.img}" alt="">
		</div>
	</div>
	<div class="flex-stretch">
		<h2>${o.name}</h2>
		<div><strong>Type</strong> <span>${o.type}</span></div>
		<div><strong>Breed</strong> <span>${o.breed}</span></div>
		<div><a href="#animal-profile-page" class="form-button animal-jump" data-id="${o.id}"></a></div>
	</div>
</div>
`);