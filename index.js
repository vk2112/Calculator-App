let string = "";
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.querySelector("input").value = string;
        }

        else if (e.target.innerHTML == "RESET") {
            string = "";
            document.querySelector("input").value = string;
        }
        else if (e.target.innerHTML == "DEL") {
            string = (string).slice(0, -1);
            document.querySelector("input").value = string;
        }
        else {
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector("input").value = string;
        }
    });
});

const keyboardInput = document.getElementById("result");
document.addEventListener("keydown", (event) => {
    console.log(event);
    if (event.key == "0-9") { keyboardInput.value += event.key }
    else if (event.key == "Backspace") { keyboardInput.value = keyboardInput.value.slice(0, -1); }
    else if (event.key == "+") { keyboardInput.value += event.key }
    else if (event.key == "-") { keyboardInput.value += event.key }
    else if (event.key == "*") { keyboardInput.value += event.key }
    else if (event.key == "/") { keyboardInput.value += event.key }
    else if (event.key == "Enter") { keyboardInput.value = eval(keyboardInput.value); }
    else { "Error" };
});
