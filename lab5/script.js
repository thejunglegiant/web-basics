function enableButtonCheck() {
    var button = document.querySelector(".btn");
  
    if (
      document.getElementById("pib").checkValidity() &&
      document.getElementById("group").checkValidity() &&
      document.getElementById("phone").checkValidity() &&
      document.getElementById("address").checkValidity() &&
      document.getElementById("email").checkValidity()
    ) {
      button.removeAttribute("disabled");
    }
  }
  
  function submitInfo() {
    let inputFieldsArray = Array.from(
      document.querySelectorAll("input.inputField")
    );
    let info = {};
  
    for (const field of inputFieldsArray) {
      info = {
        ...info,
        [field.placeholder]: field.value,
      };
    }
  
    window.alert(JSON.stringify(info, null, 2));
  }
  
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function setRandomColor(id) {
    let element = document.getElementById(id);
    element.style.background = getRandomColor();
    element.style.color = getRandomColor();
  }
  
  function resetColor(id) {
    let element = document.getElementById(id);
    element.style.background = "#ffffff";
    element.style.color = "#000000";
  }
  
  function setChosenColor(id) {
    let element = document.getElementById(id);
    let backgroundColor = document.getElementById("backgroundSelector").value;
    let fontColor = document.getElementById("fontSelector").value;
  
    element.style.background = backgroundColor;
    element.style.color = fontColor;
  }
  
  function onDbClick() {
    let backgroundColor = getRandomColor();
    let fontColor = getRandomColor();
  
    let tdArray = [].slice.call(document.querySelectorAll("td"), 0);
    tdArray[11].style.background = backgroundColor;
    tdArray[11].style.color = fontColor;
  }