/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
window.onload = () => {
  document.querySelector(".card").classList.add("♥");
  setTimeout(() => {
    document.querySelector(".card").classList.remove("♥");
    document.querySelector(".card").classList.add("♣");
  }, 1000);
};

let numeroRandom () {
  let numero =  Math.random(Math.random() * 12);
}