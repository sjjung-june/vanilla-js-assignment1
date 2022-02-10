// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

const h2 = document.querySelector("h2");

const superEventHandler = {
  mouseEnter: function () {
    h2.style.color = colors[0];
    h2.innerHTML = "The mouse is here!";
  },

  mouseLeave: function () {
    h2.style.color = colors[1];
    h2.innerHTML = "The mouse is gone!";
  },

  rightClick: function () {
    h2.style.color = colors[4];
    h2.innerHTML = "That was a right click!";
  },

  UIResize: function () {
    h2.style.color = colors[2];
    h2.innerHTML = "You just resized!";
  },
};

h2.addEventListener("mouseenter", superEventHandler.mouseEnter);
h2.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("contextmenu", superEventHandler.rightClick);
window.addEventListener("resize", superEventHandler.UIResize);
