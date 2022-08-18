function handlecalcClick1() {
  let numberInput = document.getElementById("numberInput").value;
  if (numberInput >= 0 && numberInput <= 100) {
    console.log("small");
  } else if (numberInput >= 101 && numberInput <= 1000) {
    console.log("medium");
  } else if (numberInput > 1000) {
    console.log("large");
  }
}

function handlecalcClick2() {
  let nameInput = document.getElementById("nameInput").value;
  let lastNameInput = document.getElementById("lastNameInput").value;
  let priceMsg = `hello ${nameInput} ${lastNameInput}, \n
Welcome back to the system`;
  console.log(priceMsg);
}

function handlecalcClick3() {
  let passwordInput = document.getElementById("passwordInput").value;
  const passwordFromServer = "hakeru123";
  if (passwordFromServer == passwordInput) {
    console.log("The identification was performed successfully");
  } else {
    console.log("The password is incorrect, Identification is required");
  }
}

function handlecalcClick4() {
  let ageInput = document.getElementById("ageInput").value;
  if (ageInput < 16) {
    console.log("You are not authorized to enter");
  } else if (ageInput >= 16 && ageInput <= 18) {
    console.log("You may enter with parental permission");
  } else if (ageInput > 18) console.log("You are welcome to join");
}

function handlecalcClick5() {
  let number1Input = +document.getElementById("number1Input").value;
  let number2Input = +document.getElementById("number2Input").value;
  let plusMinusInput = document.getElementById("plusMinusInput").value;
  if (plusMinusInput == "+") {
    console.log(number1Input + number2Input);
  } else if (plusMinusInput == "-") {
    console.log(number1Input - number2Input);
  }
}
