import _ from "lodash";
import printMe from "./print.js";
import "./style.css";
import Icon from "./icon.png";

const tasks=[
  {
    index : 1,
    description :"Wash the dishes",
    completed : false
  },
  {
    index : 2,
    description :"Complete To Do list project",
    completed : false
  }
]

const component=()=> {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.innerHTML = _.join(["Hello", "webpack"], " ");

  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;

  element.appendChild(btn);
  element.classList.add("hello");

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
