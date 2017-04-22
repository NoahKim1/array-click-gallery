var images = ["assets/image1.jpg", "assets/image2.jpg", "assets/image3.jpg", "assets/image4.jpg", "assets/image5.jpg"]
var titles = ["image 1", "image 2", "image 3", "image 4", "image 5"]
var descriptions = ["image of spirals", "image of car", "image of dragon", "image of paint", "image of color spirals"]
var count = 0;
function myFunction() {
	var title = document.getElementById("title");
	title.innerHTML = titles[count];

	var element = document.getElementById("what");
	element.style.backgroundImage = "url(" + images[count] + ")";


	var paragraph = document.getElementById("paragraph");
	paragraph.innerHTML = descriptions[count];

	count++;

	if(count > 4) {
		count = 0;
	}
}
