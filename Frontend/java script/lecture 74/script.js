let button = document.getElementById("btn")

button.addEventListener("click", () => {
    // alert("I was clicked")
    document.querySelector(".box").innerHTML = "<b>Yayy you  are clicked </b> enjoy your click!"
})
button.addEventListener("dblclick", () => {
    alert("I was clicked")

})

button.addEventListener("contextmenu", () => {
    alert("Right clicked")

})
button.addEventListener("keydown", (e) => {
    console.log(e.key)

})

