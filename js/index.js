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

const allText = document.querySelector("body");
allText.addEventListener("copy", function(event) {
    event.target.style.color = "yellow";
})

const pageContent = document.querySelectorAll("p");
pageContent.forEach(function(currentValue) {
    currentValue.addEventListener("click", function(e) {
        e.target.style.color = "purple";
    });
});

window.addEventListener("keydown", function() {
    console.log("Someone pressed a key!");
});

window.addEventListener("load", function() {
    console.log("The resources have finished loading.")
});

window.addEventListener("resize", function(event) {
    event.stopPropagation()
    console.log("the window size has changed.")
})

window.addEventListener("wheel", function(e) {
    e.target.visibility = "hidden";
});