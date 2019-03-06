// Your code goes here
const colorChange = document.querySelector(".footer");
colorChange.addEventListener("mouseover", function(e) {
    e.target.style.color = "crimson";
})

const btn = document.querySelectorAll(".btn");
btn.forEach(function(currentValue) {
    currentValue.addEventListener("dblclick", function(e) {
        e.target.style.backgroundColor = "blue";
    });
});

const pageContent = document.querySelectorAll("p");
pageContent.forEach(function(currentValue) {
    currentValue.addEventListener("click", function(e) {
        e.target.style.color = "purple";
    });
});

window.addEventListener("keypress", function() {
    // alert("Hey, you pressed a key!");
});

window.addEventListener("load", function() {
    console.log("The resources have finished loading.")
});