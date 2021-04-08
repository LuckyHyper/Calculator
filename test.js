function getHistory() {
    return document.getElementById("history-value").innerText;
}
function setHistory(num) {
    document.getElementById("history-value").innerText = num;
}
function getOutput() {
    return document.getElementById("output-value").innerText;
}
function setOutput(num) {
    if (num == "")
        document.getElementById("output-value").innerText = num;
    else
        document.getElementById("output-value").innerText = comma_Number(num);
}
function comma_Number(num) {
    if (num == "-")
        return "";
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}
function reverseToNumber(num) {
    return Number(num.replace(/,/g, ''));
}

var operator = document.getElementsByClassName("operator");
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == "clear") {
            setHistory("");
            setOutput("");
        }
        else if (this.id == "backspace") {
            var output = reverseToNumber(getOutput()).toString();
            if (output != "") {
                output = output.substr(0, output.length - 1);
                setOutput(output);
            }
        }
        else {
            var output = getOutput();
            var history = getHistory();
            if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                    history = history.substr(0, history.length - 1);
                }
            }
            if (output != "" || history != "") {
                output = output == "" ? output : reverseToNumber(output);
                history = history + output;
                if (this.id == "=") {
                    result = eval(history);
                    setOutput(result);
                    setHistory("");
                }
                else {
                    history = history + this.id;
                    setHistory(history);
                    setOutput("");

                }
            }
        }
    })
}
var number = document.getElementsByClassName("number");
for (var i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        var output = reverseToNumber(getOutput());
        if (output != NaN) {
            output = output + this.id;
            setOutput(output);
        }
    })
}