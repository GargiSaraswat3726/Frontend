let images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];
let index = 0;
let slide = document.getElementById("slide");

function showImage() {
  slide.src = images[index];
}

// Next button
document.getElementById("next").onclick = () => {
  index = (index + 1) % images.length;
  showImage();
};

// Previous button
document.getElementById("prev").onclick = () => {
  index = (index - 1 + images.length) % images.length;
  showImage();
};

// Auto slide every 3 seconds
let auto = setInterval(() => {
  index = (index + 1) % images.length;
  showImage();
}, 3000);

// Pause on hover (bonus)
slide.onmouseenter = () => clearInterval(auto);
slide.onmouseleave = () => {
  auto = setInterval(() => {
    index = (index + 1) % images.length;
    showImage();
  }, 3000);
};
