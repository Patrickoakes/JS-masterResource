/*var h2 = document.querySelector("header h2");

h2.addEventListener("click", function() {
  a(5, 10);
});

function a(x, y) {
  console.log(x * y);
} */

var div = document.querySelector("div.wrapper");
var header = document.querySelector("header");
var h2 = document.querySelector("header h2");

div.addEventListener(
  "click",
  function() {
    var delay = new Date().getTime() + 1000;
    while (new Date() < delay) {}
    console.log("From div");
  },
  true
);

header.addEventListener(
  "click",
  function() {
    var delay = new Date().getTime() + 1000;
    while (new Date() < delay) {}
    console.log("From header");
  },
  true
);

h2.addEventListener(
  "click",
  function() {
    var delay = new Date().getTime() + 1000;
    while (new Date() < delay) {}
    console.log("From h2");
  },
  true
);
// inner to outer element = event bubbling\
// outer to inner=  event capture
