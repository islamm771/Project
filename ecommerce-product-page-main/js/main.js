let shoppingBag = document.querySelector(".svg");
shoppingBag.onclick = function () {
  document.querySelector(".card").classList.toggle("open-card");
};

let value;
let btnInc = document.getElementById("inc");
let btnDec = document.getElementById("dec");

btnInc.onclick = function () {
  value = parseInt(document.getElementById("no").innerHTML);
  document.getElementById("no").innerHTML = value + 1;
  value = parseInt(document.getElementById("no").innerHTML);
};
btnDec.onclick = function () {
  value = parseInt(document.getElementById("no").innerHTML);
  document.getElementById("no").innerHTML = value - 1;
  value = parseInt(document.getElementById("no").innerHTML);
};
let btnAdd = document.querySelector(".add");
let btnDel = document.querySelector(".del");
btnAdd.onclick = function () {
  document.querySelector(".empty").classList.add("empty-del");
  document.querySelector(".after-add").classList.add("show-add");
  document.querySelector(".product-number").innerHTML = `$125 x ${value}`;
  document.querySelector(".product-price").innerHTML = `$${125 * value}`;
  document.querySelector(".num-product").innerHTML = value;
};
btnDel.onclick = function () {
  document.querySelector(".empty").classList.remove("empty-del");
  document.querySelector(".after-add").classList.remove("show-add");
  document.querySelector(".num-product").innerHTML = 0;
};

let images = [
  "image-product-1.jpg",
  "image-product-2.jpg",
  "image-product-3.jpg",
  "image-product-4.jpg",
];
let main_img = document.getElementById("main-img");

let first_img = document.getElementById("img_1");
let second_img = document.getElementById("img_2");
let third_img = document.getElementById("img_3");
let fourth_img = document.getElementById("img_4");

function removeClass() {
  first_img.classList.remove("selected");
  second_img.classList.remove("selected");
  third_img.classList.remove("selected");
  fourth_img.classList.remove("selected");
}

first_img.onclick = function () {
  main_img.setAttribute("src", `/images//${images[0]}`);
  removeClass();
  first_img.classList.add("selected");
};
second_img.onclick = function () {
  main_img.setAttribute("src", `/images//${images[1]}`);
  removeClass();
  second_img.classList.add("selected");
};
third_img.onclick = function () {
  main_img.setAttribute("src", `/images//${images[2]}`);
  removeClass();
  third_img.classList.add("selected");
};
fourth_img.onclick = function () {
  main_img.setAttribute("src", `/images//${images[3]}`);
  removeClass();
  fourth_img.classList.add("selected");
};

main_img.onclick = function () {
  document.querySelector(".full").classList.add("show-full");
};

let fullDiv = document.getElementById("main-full");
let firstFull = document.getElementById("subFull1");
let secondFull = document.getElementById("subFull2");
let thirdFull = document.getElementById("subFull3");
let fourthFull = document.getElementById("subFull4");

function removeClassFull() {
  firstFull.classList.remove("selected");
  secondFull.classList.remove("selected");
  thirdFull.classList.remove("selected");
  fourthFull.classList.remove("selected");
}
firstFull.onclick = function () {
  fullDiv.setAttribute("src", `/images//${images[0]}`);
  removeClassFull();
  firstFull.classList.add("selected");
};
secondFull.onclick = function () {
  fullDiv.setAttribute("src", `/images//${images[1]}`);
  removeClassFull();
  secondFull.classList.add("selected");
};
thirdFull.onclick = function () {
  fullDiv.setAttribute("src", `/images//${images[2]}`);
  removeClassFull();
  thirdFull.classList.add("selected");
};
fourthFull.onclick = function () {
  fullDiv.setAttribute("src", `/images//${images[3]}`);
  removeClassFull();
  fourthFull.classList.add("selected");
};

document.addEventListener("click", function (e) {
  if (e.target === document.querySelector(".full")) {
    document.querySelector(".full").classList.remove("show-full");
  }
});
