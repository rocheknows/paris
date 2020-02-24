const images = [
  "img/1-5.jpg",
  "img/1-2.jpg",
  "img/1-6.jpg",
  "img/1-1.jpg",
  "img/1-10.jpg",
  "img/1-3.jpg",
  "img/1-4.jpg",
  "img/1-8.jpg",
  "img/1-9.jpg",
  "img/1-7.jpg"
];

let i = 0;

changeImage(); // set first image src after page loads

function changeImage() {
  const nextImage = images[i];
  const img = (document.getElementById("imgClickAndChange").src = images[i]);

  i = i + 1;
  if (i >= images.length) {
    i = 0;
  }
}

document.addEventListener("touchend", function(event) {
  changeImage((document.getElementById("imgClickAndChange").src = images[i]));

  i = i + 1;
  if (i >= images.length) {
    i = 0;
  }
});
