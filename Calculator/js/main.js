const buttons = (() => {
    let main  = [...document.getElementsByClassName ("calc-keyboard_main--key")],
        aside = [...document.getElementsByClassName ("calc-keyboard_aside--key")];
    return [...main.concat (aside)];
})();

buttons.map ((el) => {
    el.setAttribute ("data-key", el.innerHTML);
    el.addEventListener ("click", handle);
    let timer = null, timerI = 0;
    if (el.getAttribute ("data-key")  === "C") {
        el.addEventListener ("mousedown", function () {
            timer = setInterval(function (){
                if (++timerI > 5) {
                    clearInterval (timer);
                    timerI = 0;
                    handle.prototype.expression = "";
                    document.getElementById ("filed").innerText = "";
                }
            }, 100);
        });
        el.addEventListener ("mouseup", function () {
            clearInterval (timer);
            timerI = 0;
        });
    }
});

handle.prototype.expression = "";
handle.prototype.clearStaus = false;
handle.prototype.firstMath = false;

function handle (event) {
    let field, result;
    const key = event.target.getAttribute ("data-key");
    if (!!key && key !== "="){
        field = document.getElementById ("filed");
        if (handle.prototype.clearStaus){
            field.innerText = "";
            handle.prototype.clearStaus = false;
            handle.prototype.firstMath = true;
        }
        if (handle.prototype.firstMath && (key === "×" || key === "÷" || key === "-" || key === "+")){
            let value = document.getElementById ("result").innerText;
            if ((value.length > 10) && (parseFloat (value) !== parseInt (value))) {
                value = parseFloat (value).toFixed(5).toString ();
            }
            handle.prototype.expression += value;
            field.innerText += value;
            handle.prototype.firstMath = false;
        } else if (handle.prototype.firstMath) {
            handle.prototype.firstMath = false;
        }
        switch (key) {
            case "×":
                handle.prototype.expression += "*";
                break;
            case "÷":
                handle.prototype.expression += "/";
                break;
            case ",":
                handle.prototype.expression += ".";
                break;
            case "C":
                handle.prototype.expression = handle.prototype.expression.slice (0, -1);
                break;
            default:
                handle.prototype.expression += key;
                break;
        }
        if (key === "C") field.innerText = field.innerText.slice (0, -1);
        else field.innerText += key;
    } else {
        let expression = "";
        result = document.getElementById ("result");
        for (let i = 0, max = handle.prototype.expression.length; i < max; i++){
            ['7', '8', '9', '4', '5', '6', '1', '2', '3', '.' ,'0' ,'*' ,'/' ,'-' ,'+'].map ((el) => {
                if (handle.prototype.expression[i] === el) expression += el;
            });
        }
        let res = eval(expression);
        result.innerText = (res ? res : "Error!");
        handle.prototype.expression = "";
        handle.prototype.clearStaus = true;
    }
}


