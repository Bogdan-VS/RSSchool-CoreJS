const pictureContainer = document.querySelector('.picture-inner-container');

const arrayImg = [
	'assets/images/jpg/Gallery/optima/galery1.jpg',
	'assets/images/jpg/Gallery/optima/galery2.jpg',
	'assets/images/jpg/Gallery/optima/galery3.jpg',
	'assets/images/jpg/Gallery/optima/galery4.jpg',
	'assets/images/jpg/Gallery/optima/galery5.jpg',
	'assets/images/jpg/Gallery/optima/galery6.jpg',
	'assets/images/jpg/Gallery/optima/galery7.jpg',
	'assets/images/jpg/Gallery/optima/galery8.jpg',
	'assets/images/jpg/Gallery/optima/galery9.jpg',
	'assets/images/jpg/Gallery/optima/galery10.jpg',
	'assets/images/jpg/Gallery/optima/galery11.jpg',
	'assets/images/jpg/Gallery/optima/galery12.jpg',
	'assets/images/jpg/Gallery/optima/galery13.jpg',
	'assets/images/jpg/Gallery/optima/galery14.jpg',
	'assets/images/jpg/Gallery/optima/galery15.jpg',
];

function addImg() {
	shuffle(arrayImg);
	let images = '';
	for (let i = 0; i < arrayImg.length; i++) {
		images += `<img class="gallery-img" src="${arrayImg[i]}" alt="galery${i}">`;
	}
	pictureContainer.innerHTML = images;
}

addImg();

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}
