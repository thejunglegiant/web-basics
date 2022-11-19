function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeColor() {
  var element = document.getElementById("first");
  element.style.background = getRandomColor();
  element.style.color = getRandomColor();
}

function changeColorQuery() {
  var element = document.querySelector("p.select");
  element.style.background = getRandomColor();
  element.style.color = getRandomColor();
}

function deleteImage() {
  var imageContainter = document.getElementById("image-container");
  if (imageContainter.children.length > 1) {
    imageContainter.removeChild(imageContainter.lastChild);
  }
}

function addImage() {
  var imageContainter = document.getElementById("image-container");
  var element = document.createElement("img");
  element.src = "berlin-city.jpeg";
  imageContainter.append(element);
}

function enlargeImage() {
  var element = document.getElementById("image");
  element.style.height = "200%";
  element.style.width = "200%";
}

function reduceImage() {
  var element = document.getElementById("image");
  element.style.height = "50%";
  element.style.width = "50%";
}
