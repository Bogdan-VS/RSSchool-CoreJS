const pictureContainer = document.querySelector('.picture-inner-container');

const arrayImg = [
	'assets/images/jpg/Gallery/galery1.jpg',
	'assets/images/jpg/Gallery/galery2.jpg',
	'assets/images/jpg/Gallery/galery3.jpg',
	'assets/images/jpg/Gallery/galery4.jpg',
	'assets/images/jpg/Gallery/galery5.jpg',
	'assets/images/jpg/Gallery/galery6.jpg',
	'assets/images/jpg/Gallery/galery7.jpg',
	'assets/images/jpg/Gallery/galery8.jpg',
	'assets/images/jpg/Gallery/galery9.jpg',
	'assets/images/jpg/Gallery/galery10.jpg',
	'assets/images/jpg/Gallery/galery11.jpg',
	'assets/images/jpg/Gallery/galery12.jpg',
	'assets/images/jpg/Gallery/galery13.jpg',
	'assets/images/jpg/Gallery/galery14.jpg',
	'assets/images/jpg/Gallery/galery15.jpg',
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
