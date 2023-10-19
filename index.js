import inquirer from "inquirer";
// Calculator Operators
var Operators;
(function (Operators) {
    Operators["Add"] = "+";
    Operators["Subtract"] = "-";
    Operators["Multiply"] = "*";
    Operators["Divide"] = "/";
})(Operators || (Operators = {}));
const prompt = inquirer.createPromptModule();
function validateNumber(input) {
    if (isNaN(parseFloat(input))) {
        return "Please enter a valid number.";
    }
    return true;
}
async function main() {
    let num1, num2, operators;
    const input = await prompt([
        {
            type: "input",
            name: "num1",
            message: "Please enter the first number:",
            validate: validateNumber,
        },
        {
            type: "list",
            name: "operators",
            message: "Select an operation:",
            choices: Object.values(Operators),
        },
        {
            type: "input",
            name: "num2",
            message: "Please enter the second number:",
            validate: validateNumber,
        },
    ]);
    num1 = parseFloat(input.num1);
    num2 = parseFloat(input.num2);
    operators = input.operators;
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Please enter valid numbers.");
        return;
    }
    let result;
    switch (operators) {
        case Operators.Add:
            result = num1 + num2;
            break;
        case Operators.Subtract:
            result = num1 - num2;
            break;
        case Operators.Multiply:
            result = num1 * num2;
            break;
        case Operators.Divide:
            if (num2 === 0) {
                console.log("Division by zero is not allowed.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operator.");
            return;
    }
    console.log(`Result: ${num1} ${operators} ${num2} = ${result}`);
}
main();
