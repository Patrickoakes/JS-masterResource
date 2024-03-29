var ul = document.querySelector("ul");

//**************ADD ITEMS
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

///********************EDIT AND DELETE ITEMS

ul.addEventListener("click", function(e) {
  if (e.target.classList[1] === "fa-pencil-square-o") {
    var parentPar = e.target.parentNode;
    parentPar.style.display = "none";

    var note = parentPar.previousElementSibling;
    var input = parentPar.nextElementSibling;

    input.style.display = "block";
    input.value = note.textContent;
  }
});
