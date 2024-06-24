// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to append a value to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Function to evaluate the expression in the display
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Evaluate the expression and update the display
    } catch (e) {
        display.value = 'Error'; // If there's an error in the evaluation, show 'Error'
    }
}
