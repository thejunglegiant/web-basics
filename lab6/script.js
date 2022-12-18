"Use strict";
async function fetchInfo() {
  const node = document.getElementById("container");
  node.textContent = "";

  for (let i = 0; i < 5; i++) {
    await fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((data) => {
        let personInfo = data.results["0"];
        let personBox = document.createElement("div");
        personBox.class = "personBox";

        let image = document.createElement("img");
        image.src = personInfo.picture.large;
        personBox.append(image);

        let cell = document.createElement("p");
        cell.innerText = `Cell: ${personInfo.cell}}`;
        personBox.append(cell);

        let city = document.createElement("p");
        city.innerText = `City: ${personInfo.location.city}`;
        personBox.append(city);

        let email = document.createElement("p");
        email.innerText = `Email: ${personInfo.email}`;
        personBox.append(email);

        let coordinates = document.createElement("p");
        coordinates.innerText = `Coordinates: ${personInfo.location.coordinates.latitude}, ${personInfo.location.coordinates.longitude}`;
        personBox.append(coordinates);

        container.append(personBox);
      });
  }
}