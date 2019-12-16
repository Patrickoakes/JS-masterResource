//  #4  ////

//alert("Pop");

/*////#5 ///////
function functionOne() {

    alert("One")
};
function functionTwo() {

    alert("Two")
};
function functionThree() {

};*/ ////////

/*  #6 
function changeTheText() {
    //Change the paragraph text
    document.getElementById("paragraphText").innerHTML = "we changed the text";
}*/

/* /////Variables  #7
var variableNumber = 2;
var variableName = "Patrick";



function changeTheText() {
    //Change the paragraph text

    document.getElementById("paragraphText").innerHTML = variableNumber;
}

*/
// these var end at #12
/*var variableNumber = 2;
var variableName = "Patrick ";
var secondNumber = 2;
var secondString = "Awesome  ";*/
var coolNumber = 1;
function changeTheText() {
  if (coolNumber === 1) {
    // work(); from 12 function  within function
    var changeTextVariable = document.getElementById("changeUserText").value;

    document.getElementById("paragraphText").innerHTML = changeTextVariable;
  }
}

// function work() {    #12  function within function
//Change the paragraph text

//   document.getElementById("paragraphText").innerHTML = variableName + secondString;

//}
