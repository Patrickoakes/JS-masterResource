//var h2 = document.querySelector("header h2");

/* h2.addEventListener("click", function() {
  console.log("Clicked");
});  */

/// SECOND WAY /////
/*h2.addEventListener("click", a);

function a() {
  console.log("Clicked");
}*/

/*  MAKING TWO EVENTS CLICK SIMULTANEOUSLY 
var h2 = document.querySelector("header h2");

h2.addEventListener("click", a);
h2.addEventListener("click", b);

function a() {
  console.log("Clicked a");
}

function b() {
  console.log("Clicked b");
}    */

var h2 = document.querySelector("header h2");

h2.addEventListener("click", a);

function a() {
  console.log(this);
}
