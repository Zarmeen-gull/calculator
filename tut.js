let input = document.querySelector(".display");
let btnS = document.querySelectorAll("button");

let string = "";
let arr = array.from(buttons);
arr.forEach(button => {
button.addEventListener("click", (e) => {
        if (e.taeget.innerHTML == "=")
            string = eval(string);
        input.value = string;
    else if (e.target.innerHTML == "AC") {

            let string = "";
            input.value = string;
        }
    else if (e.target.innerHTML == "AC") {

            let string = "";
            input.value = string;
        }


    })
})