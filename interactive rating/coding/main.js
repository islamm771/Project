let btn_1 = document.getElementById("1");
let btn_2 = document.getElementById("2");
let btn_3 = document.getElementById("3");
let btn_4 = document.getElementById("4");
let btn_5 = document.getElementById("5");
let buttons = [btn_1, btn_2, btn_3, btn_4, btn_5];

let value = 0;

function setClass() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].className = "Btn";
  }
}

btn_1.onclick = function () {
  setClass();
  btn_1.className = "BTN";
  value = 1;
};

btn_2.onclick = function () {
  setClass();
  btn_2.className = "BTN";
  value = 2;
};
btn_3.onclick = function () {
  setClass();
  btn_3.className = "BTN";
  value = 3;
};
btn_4.onclick = function () {
  setClass();
  btn_4.className = "BTN";
  value = 4;
};
btn_5.onclick = function () {
  setClass();
  btn_5.className = "BTN";
  value = 5;
};

let btnSubmit = document.getElementById("submit");

btnSubmit.onclick = function () {
  document.getElementById("card").style.display = "none";

  document.getElementById("thanks").style.display = "block";
  document.getElementById(
    "selectedNum"
  ).innerHTML = `You selected ${value} out of 5`;
};
