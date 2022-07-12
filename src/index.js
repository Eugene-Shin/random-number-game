const description = document.querySelector("div p#description");
const yourNumberInput = document.querySelector("#yourNumber");
const maxNumberInput = document.querySelector("#maxNumber");
const loseOrWin = document.querySelector("#loseOrWin");
const playTheGameForm = document.querySelector("#playTheGame");

const HIDDEN_CLASSNAME = "hidden";

function handlePlay(event) {
  event.preventDefault();
  const yourNumber = parseInt(yourNumberInput.value);
  const maxNumber = parseInt(maxNumberInput.value);
  const randomNumber = Math.round(Math.random() * maxNumber);

  if (maxNumber < 0) {
    alert("최대값으로 0보다 큰 값을 입력해 주세요!");
  } else if (yourNumber < 0 || yourNumber > maxNumber) {
    alert("잘못된 값을 입력하셨습니다. 다시 입력해 주세요!");
    console.log(typeof yourNumber, typeof maxNumber);
  } else {
    description.innerText = `You chose: ${yourNumber}, the machine chose: ${randomNumber}.`;
    description.classList.remove(HIDDEN_CLASSNAME);

    if (yourNumber === randomNumber) {
      loseOrWin.innerText = "You win!";
    } else {
      loseOrWin.innerText = "You lost!";
    }
    loseOrWin.classList.remove(HIDDEN_CLASSNAME);
  }
}

playTheGameForm.addEventListener("submit", handlePlay);
