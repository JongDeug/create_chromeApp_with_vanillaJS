const images = [
    "cityscape.jpg",
    "droplet.jpg",
    "mountain.jpg",
];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `./img/${chosenImage}`;

document.body.appendChild(bgImage);
// console.log(document.images);
// document.body.style.backgroundImage = `url(${bgImage.src})`;