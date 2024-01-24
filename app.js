let calculator = document.getElementById("calculator");

function calculate() {
    let equation = document.getElementById("inputEquation");
    let calcToComplete = equation.value;
    let completedCalc = eval(calcToComplete);
    console.log(completedCalc);
}

if (calculator)
{
    console.log('real');
}
else {
    console.log("null");
}

