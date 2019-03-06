// Your code goes here
const colorChange = document.querySelector(".footer");
colorChange.addEventListener("mouseover", function(e) {
    e.target.style.color = "crimson";
})
console.log(colorChange);

const btn = document.querySelectorAll(".btn");
btn.forEach(function(currentValue) {
    currentValue.addEventListener("dblclick", function(e) {
        e.target.style.backgroundColor = "blue";
    });
});
