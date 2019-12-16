////getAttribute- returns value of the attribute
/*var div = document.querySelector("div.wrapper");

div.getAttribute("class");

console.log(div);
// answer = 'wrapper' */

// setAttribute = Sets the value of an attribute
// on element.

//uses two values  setAttribute('attr, "value")

/*div.setAttribute("style", "background: coral");

div.removeAttribute("style");

div.hasAttribute("style");

console.log(div.hasAttribute("style"));*/

//Becasue it was removed in line 17

var btn = document.getElementById("add-btn");
var input = document.getElementById("add-input");

btn.addEventListener("click", function(e) {
  e.preventDefault();

  input.setAttribute("type", "submit");
  input.setAttribute("value", input.value);
});
