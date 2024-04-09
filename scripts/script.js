// Getting calculate button.
const CalculateBtn = document.getElementById('calculate-button');

// Getting all input buttons.
const InputButtons = document.querySelectorAll(`button`);

// Array of operators in calculator app.
const ArrayOfOperators = [`+`, `-`, `x`, `/`, `.`];

// This function displays result.
const ShowResult = (result) => {
    document.getElementById('output-box').value = result;
}

/*
    This function calculates the result.
*/
const Calculate = () => {

    // Getting output box.
    const OutputBox = document.getElementById('output-box');

    // Getting expression which is to be calculated.
    let expression = OutputBox.value;

    // If there is nothing in expression, then do nothing.
    if (expression === ``) {
        return;
    }

    // If the first and last characters of the expression are operators, then remove them from expression.
    if (ArrayOfOperators.includes(expression[0])) {
        expression = expression.slice(1);
    }
    if (ArrayOfOperators.includes(expression[expression.length - 1])) {
        expression = expression.slice(0, -1);
    }

    // Replace all the `x` from expression with `*`.
    const Regex = /x/g;
    expression = expression.replace(Regex, '*');

    // Calculate result.
    const Result = eval(expression);
    
    // Display result.
    ShowResult(Result);
}

const TakeInput = (text) => {

    // Getting output box.
    const OutputBox = document.getElementById('output-box');

    // If the output box value if Error or Infinity then replace it with current text, else if the last character of the input is similar to the current input character, then update the last character of input with the current input character. Else, append the current character in the output box.
    if (OutputBox.value === `Error` || OutputBox.value === `Infinity`) {
        OutputBox.value = text;
    } else if (ArrayOfOperators.includes(OutputBox.value.slice(-1)) && ArrayOfOperators.includes(text)) {
        OutputBox.value = `${OutputBox.value.slice(0, -1)}${text}`;
    } else {
        OutputBox.value += text;
    };

}

/*
    This function deletes the last character of the output box value.
*/
const Delete = () => {

    // Getting Output box.
    const OutputBox = document.getElementById('output-box');

    // Deleting the last character of the output box.
    OutputBox.value = OutputBox.value.slice(0, -1);
}

/*
    This function clears the complete input.
*/
const Reset = () => {
    document.getElementById('output-box').value = ``;
}

/*
    Adding click event listener to each button so that when any of the button is clicked, then respective task will be performed.
*/
InputButtons.forEach(button => {
    button.addEventListener('click', () => {

        // If the button is delete, then call Delete() function.
        if (button.innerText === `DEL`) {
            Delete();
        }
        // If button is reset, then call Reset() function.
        else if (button.innerText === `RESET`) {
            Reset();
        }
        // If button is equal button, then calculate and show result.
        else if (button.innerText === `=`) {
            Calculate();
        }
        // Else add the text content of the button as input.
        else {
            TakeInput(button.innerText);
        }
    })
})

// Adding event listener on document for a keydown to add keyboard functionality to calculator app.
document.addEventListener('keydown', (e) => {

    // Array of numbers.
    const NumberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    // If the pressed key is a number, then Take it as an input. If the pressed key is Enter key then calculate the result.
    if (NumberArray.includes(Number(e.key))) {
        TakeInput(String(e.key));
    } else if (e.key === `Enter`) {
        Calculate();
    }
})