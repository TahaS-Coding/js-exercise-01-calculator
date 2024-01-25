document.addEventListener("DOMContentLoaded", function() {
    let calculator = document.getElementById("calculator");
    calculator.addEventListener("submit", calculate);
});

function calculate(event) {
    event.preventDefault();
    let equation = document.getElementById("inputEquation");
    let calcToComplete = equation.value;
    let completedCalc = eval(calcToComplete);
    let answer = document.getElementById("answer");
    answer.value = completedCalc;
}




