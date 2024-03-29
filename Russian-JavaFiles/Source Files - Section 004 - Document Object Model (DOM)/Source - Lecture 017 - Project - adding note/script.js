// Lecture: Project - Coding Task 3

var ul = document.querySelector("ul");

document.getElementById("add-btn").addEventListener("click", function(e) {
  e.preventDefault();
  var addInput = document.getElementById("add-input");

  if (addInput.value !== "") {
    var li = document.createElement("li"),
      firstPar = document.createElement("p"),
      secondPar = document.createElement("p"),
      firstIcon = document.createElement("i"),
      secondIcon = document.createElement("i"),
      input = document.createElement("input");

    firstIcon.className = "fa fa-pencil-square-o";
    secondIcon.className = "fa fa-times";
    input.className = "edit-note";
    input.setAttribute("type", "text");

    firstPar.textContent = addInput.value;

    secondPar.appendChild(firstIcon);
    secondPar.appendChild(secondIcon);
    li.appendChild(firstPar);
    li.appendChild(secondPar);
    li.appendChild(input);
    ul.appendChild(li);
    addInput.value = "";
  }
});

/*var entry = document.getElementById("add-input");
var el = document.querySelector("add-btn");
var newEL = Li.p
<p>Fourth note</p>
<p>
  <i class="fa fa-pencil-square-o"></i><i class="fa fa-times"></i>
</p>
<input class="edit-note" type="text" />
</li>

el.onclick = function() {
    entry.appendChild(newEl);
  };*/
