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


const animImages = document.querySelectorAll('.gallery-img');
window.addEventListener('scroll', addAnimationImage);
function addAnimationImage () {

	for (let i = 0; i < animImages.length; i++) {
		const itemImage = animImages[i];
		const itemImageHeight = itemImage.offsetHeight;
		const animImagesOffset = offset(itemImage).top;
		const animStart = 4;

		let itemImagePoint = window.innerHeight - itemImageHeight / animStart;
		if (itemImageHeight > window.innerHeight) {
			itemImagePoint = window.innerHeight - window.innerHeight / animStart;
		}

		if ((pageYOffset > animImagesOffset - itemImagePoint) && pageYOffset <(animImagesOffset + itemImageHeight)) {
			itemImage.classList.add('image-active');
		} else {
			itemImage.classList.remove('image-active');
		}

	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
		      scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		return {top: rect.top + scrollTop}
	}
}
