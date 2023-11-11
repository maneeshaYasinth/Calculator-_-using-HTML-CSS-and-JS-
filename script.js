document.addEventListener("DOMContentLoaded", function () {
    const resultElement = document.getElementById("result");
    const buttons = document.querySelectorAll(".item");
    let op;
    let firstSave;

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;

            switch (button.id) {
                case "nDiv":
                case "nMul":
                case "nMin":
                case "nPl":
                    handleOperator(buttonText);
                    break;
                case "nEq":
                    calculate();
                    break;
                case "nErase":
                    erase();
                    break;
                default:
                    resultElement.textContent += buttonText;
                    break;
            }
        });
    });

    function handleOperator(operator) {
        if (resultElement.textContent !== "") {
            firstSave = parseFloat(resultElement.textContent);
            op = operator;
            resultElement.textContent = "0";
        }
    }

    function calculate() {
        if (op && resultElement.textContent !== "") {
            const secSave = parseFloat(resultElement.textContent);
            let result;

            switch (op) {
                case "+":
                    result = firstSave + secSave;
                    break;
                case "-":
                    result = firstSave - secSave;
                    break;
                case "*":
                    result = firstSave * secSave;
                    break;
                case "/":
                    if (secSave !== 0) {
                        result = firstSave / secSave;
                    } else {
                        resultElement.textContent = "Error";
                        return;
                    }
                    break;
            }

            resultElement.textContent = result.toFixed(2);
        }
    }

    function erase() {
        resultElement.textContent = resultElement.textContent.slice(0, -1);
    }
});
