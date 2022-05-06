let btn = document.getElementsByTagName("button");

btn[0].onclick = function () {
  btn[0].className = "clicked";
};
btn[1].onclick = function () {
  btn[1].className = "clicked";
};
btn[2].onclick = function () {
  btn[2].className = "clicked-learn";
};

let lbtn = document.querySelector(".icon");
let links = document.querySelector(".links");
let btnclose = document.querySelector(".close");

lbtn.onclick = function () {
  links.classList.add("links-s");
  btnclose.classList.add("close-show");
};

btnclose.onclick = function () {
  links.classList.remove("links-s");
  btnclose.classList.remove("close-show");
};

let span = document.querySelectorAll("span");

let featbtn = document.querySelector(".featureLink");
let divFeature = document.getElementById("div-feature");
featbtn.onclick = function () {
  divFeature.classList.toggle("feature-open");
  span[0].classList.toggle("show-arrow");
  span[1].classList.toggle("hide-arrow");
};

let Cobtn = document.querySelector(".companyLink");
let divCompany = document.getElementById("div-company");
Cobtn.onclick = function () {
  divCompany.classList.toggle("company-open");
  span[2].classList.toggle("show-arrow");
  span[3].classList.toggle("hide-arrow");
};
