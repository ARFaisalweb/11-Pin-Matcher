// generate pin
const getPin = () => {
  const random = Math.random() * 10000;
  const pin = (random + "").split(".")[0];
  if (pin.length === 4) {
    return pin;
  } else {
    return getPin();
  }
};
// display generated pin
const generatePin = () => {
  const pinInput = document.getElementById("pin");
  pinInput.value = getPin();
};
// digit event buble
const digitContainer = document.getElementById("digit-container");
digitContainer.addEventListener("click", (e) => {
  const digit = e.target.innerText;
  if (isNaN(digit)) {
    //handle clear
    if (digit === "C") {
      const typedPin = document.getElementById("typed-pin");
      typedPin.value = "";
    }
    //handle back space
    if (digit === "B") {
      const typedPin = document.getElementById("typed-pin").value;
      document.getElementById("typed-pin").value = typedPin.substring(
        0,
        typedPin.length - 1
      );
    }
  } else {
    const typedPin = document.getElementById("typed-pin");
    typedPin.value = typedPin.value + digit;
  }
});
//pin verifing
const pinMatching = () => {
  const generatePin = document.getElementById("pin").value;
  const typedPin = document.getElementById("typed-pin").value;
  if (generatePin === typedPin) {
    displayMatchResult("block", "none");
  } else {
    displayMatchResult("none", "block");
  }
  const notification = document.getElementById("notification");
  notification.style.display = "block";
  const mainSection = document.getElementById("main-section");
  mainSection.style.display = "none";
  const typedPin = document.getElementById("typed-pin");
  typedPin.value = "";
  const pinInput = document.getElementById("pin");
  pinInput.value ="";
};
const displayMatchResult = (correctStatus, incorrectStatus) => {
  const correct = document.getElementById("correct");
  correct.style.display = correctStatus;
  const incorrect = document.getElementById("incorrect");
  incorrect.style.display = incorrectStatus;
};
// notification to main mainSection
const goBack = () => {
  const notification = document.getElementById("notification");
  notification.style.display = "none";
  const mainSection = document.getElementById("main-section");
  mainSection.style.display = "block";
};
