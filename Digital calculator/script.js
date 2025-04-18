// Select display element
const display = document.getElementById("display");

// Append value to display
function appendValue(value) {
    display.value += value;
}

// Clear display
function clearDisplay() {
    display.value = "";
}

// Backspace functionality
function backspace() {
    display.value = display.value.slice(0, -1);
}

// Calculate result
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

// Keyboard support
document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (!isNaN(key) || key === "." || key === "+" || key === "-" || key === "*" || key === "/") {
        appendValue(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        backspace();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
