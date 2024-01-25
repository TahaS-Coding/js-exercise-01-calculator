document.addEventListener("DOMContentLoaded", function() {
    let calculator = document.getElementById("calculator");
    calculator.addEventListener("submit", calculate);
});

function calculate(event) {
    event.preventDefault();
    let equation = document.getElementById("inputEquation");
    let calcToComplete = equation.value;
    calcToComplete.split("+","-","*","/");

    for (let i = 0; i <= calcToComplete.length; i++){
        if (calcToComplete[i+1] === "/" || calcToComplete[i+1] === "*")
        {
            
        }
    }



    let completedCalc = eval(calcToComplete);
    let answer = document.getElementById("answer");
    answer.value = completedCalc;
}




