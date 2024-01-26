document.addEventListener("DOMContentLoaded", function() { // Waits for HTML document be fully loaded and get parsed, then runs the function inside
    let calculator = document.getElementById("calculator");

    let clearButton = document.getElementById("clearButton");
    let sevenButton = document.getElementById("sevenButton");
    let eightButton = document.getElementById("eightButton");
    let nineButton = document.getElementById("nineButton");
    let divideButton = document.getElementById("divideButton");
    let fourButton = document.getElementById("fourButton");
    let fiveButton = document.getElementById("fiveButton");
    let sixButton = document.getElementById("sixButton");
    let multiplyButton = document.getElementById("multiplyButton");
    let oneButton = document.getElementById("oneButton");
    let twoButton = document.getElementById("twoButton");
    let threeButton = document.getElementById("threeButton");
    let minusButton = document.getElementById("minusButton");
    let zeroButton = document.getElementById("zeroButton");
    let decimalButton = document.getElementById("decimalButton");
    let plusButton = document.getElementById("plusButton");

    clearButton.addEventListener("click", function(){
        let input = document.getElementById("inputEquation");
        input.value = "";
    });
    sevenButton.addEventListener("click", function(){
        let input = document.getElementById("inputEquation");
        input.value += "7";
    });

    eightButton.addEventListener("click", function(){
        let input = document.getElementById("inputEquation");
        input.value += "8";
    });

    nineButton.addEventListener("click", function(){
        let input = document.getElementById("inputEquation");
        input.value += "9";
    });

    divideButton.addEventListener("click", function(){
        let input = document.getElementById("inputEquation");
        input.value += "/";
    });

    fourButton.addEventListener("click", function(){
        let input = document.getElementById("inputEquation");
        input.value += "4";
    });

    fiveButton.addEventListener("click", function(){
        let input = document.getElementById("inputEquation");
        input.value += "5";
    });

    sixButton.addEventListener("click", function(){
        let input = document.getElementById("inputEquation");
        input.value += "6";
    });

    multiplyButton.addEventListener("click", function(){
        let input = document.getElementById("inputEquation");
        input.value += "*";
    });

    oneButton.addEventListener("click", function(){
        let input = document.getElementById("inputEquation");
        input.value += "1";
    });

    twoButton.addEventListener("click", function(){
        let input = document.getElementById("inputEquation");
        input.value += "2";
    });

    threeButton.addEventListener("click", function(){
        let input = document.getElementById("inputEquation");
        input.value += "3";
    });

    minusButton.addEventListener("click", function(){
        let input = document.getElementById("inputEquation");
        input.value += "-";
    });

    zeroButton.addEventListener("click", function(){
        let input = document.getElementById("inputEquation");
        input.value += "0";
    });

    decimalButton.addEventListener("click", function(){
        let input = document.getElementById("inputEquation");
        input.value += ".";
    });

    plusButton.addEventListener("click", function(){
        let input = document.getElementById("inputEquation");
        input.value += "+";
    });

    calculator.addEventListener("submit", calculate);
});

function calculate(event) {
    event.preventDefault(); // event paremter is passed by the browser, prevent default stops the default behaviour of the event (page refresh on form submit) 
    let equation = document.getElementById("inputEquation");
    let calcToComplete = equation.value;
    calcToComplete = equation.value.match(/[\d.]+|\+|\-|\*|\//g); 
    /* Is seperating string into array of individual strings by every number and every operator. the expression is enclosed by "/.../"
        1. The match() function returns an array of matches  2.the "|" means or. 3. [\d.]+. the brackets in the expression make a character class
        "d" means any digit 1-9 and "." just means a decimal. together this means matching a digit or a dot but the + at the end means multiple dots
        and digits(a number). afterwards there are the simple operators. outside the enclosing forward slashes, there is a g, which is a global flag
        that makes it so all the matches in the string are matched and not just the first one.
    */
    let checkingForMultAndDivide = true;
    let checkingForAddAndSubtract = true;

    while (checkingForMultAndDivide === true)
    {
        let i = 0;
        while (i < calcToComplete.length){
            if (calcToComplete[i+1] === "/")
            {
               let solution = Number(calcToComplete[i]) / Number(calcToComplete[i + 2]);
               calcToComplete[i] = String(solution);
               calcToComplete.splice(i + 1, 2);
               i = 0;         
            }
            else if(calcToComplete[i+1] === "*")
            {
               let solution = Number(calcToComplete[i]) * Number(calcToComplete[i + 2]);
               calcToComplete[i] = String(solution);
               calcToComplete.splice(i + 1, 2);
               i = 0;         
            }
            else
            {
                i++;
                checkingForMultAndDivide = false;
            }
        }
    }
    while (checkingForAddAndSubtract === true)
    {
        let i = 0;
        while (i < calcToComplete.length){
            if (calcToComplete[i+1] === "+")
            {
               let solution = Number(calcToComplete[i]) + Number(calcToComplete[i + 2]);
               calcToComplete[i] = String(solution);
               calcToComplete.splice(i + 1, 2);
               i = 0;         
            }
            else if(calcToComplete[i+1] === "-")
            {
               let solution = Number(calcToComplete[i]) - Number(calcToComplete[i + 2]);
               calcToComplete[i] = String(solution);
               calcToComplete.splice(i + 1, 2);
               i = 0;       
            }
            else
            {
                i++;
                checkingForAddAndSubtract = false;
            }
        }
    }
    let completedCalc = Number(calcToComplete);
    if (isNaN(completedCalc))
    {
        alert("Please input a valid equation!");
    }
    equation.value = completedCalc;

    //if numbers too large to fit
    let calcString = String(completedCalc).split('');
    if (calcString.length > 17)
    {
        calcString.splice(16, calcString.length-17);
    }
    equation.value = calcString.join('');

}




