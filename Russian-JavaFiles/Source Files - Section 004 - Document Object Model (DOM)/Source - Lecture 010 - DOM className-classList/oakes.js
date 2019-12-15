var h2 = document.querySelector("header h2");

h2.className = "changeBg";

/*h2.className += " changeFt";

/*var a = 10;

a += 20;//
a = a + 20

console.log(a);

console.log(typeof h2.className); */

h2.classList.add("changeFt");

//h2.classList.remove("changeBg");

h2.classList.toggle("changeBg");

console.log(h2.classList);
