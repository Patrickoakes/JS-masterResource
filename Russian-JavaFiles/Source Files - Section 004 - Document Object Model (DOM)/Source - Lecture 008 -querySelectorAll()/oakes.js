var lis = document.querySelectorAll("li, h2, #hide-list");

console.log(lis);
//lis.push("Hello");

Array.from(lis).forEach(function(li) {
  li.textContent = "Hello World";
});
