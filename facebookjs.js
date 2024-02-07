var username = "Wazir"
var password = "12345"
var userinput = document.getElementsByClassName("answer")[0]
var passwordinput = document.getElementsByClassName("answer")[1]
var submit = document.getElementsByClassName("submit")[0]
var link = document.getElementById('link')
var body = document.querySelector("body")
var button = document.getElementsByClassName("theme")[0]

submit.addEventListener("click", function() {
    if (userinput.value === username && passwordinput.value === password) {
        link.appendChild(submit)
    }
    else if (userinput.value.length < 1 && passwordinput.value.length < 1) {
        alert("Please input username and password")
    }
    else {alert("Incorrect username or password")}
})

button.addEventListener("click", function() {
    body.classList.toggle("bodylight")
    button.classList.toggle("darkbutton")
    submit.classList.toggle("submit2")
    if (button.innerText === "Light mode") {
        button.innerText = "Dark mode"
    }
    else {button.innerText = "Light mode"}
})




