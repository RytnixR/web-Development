console.log("Rytnix")

let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor = "teal"

document.getElementById("green").style.backgroundColor = "green"

document.querySelector(".box").style.backgroundColor = "yellow" // only apply for first child

document.querySelectorAll(".box").forEach(e => {
    e.style.color = "brown"
})