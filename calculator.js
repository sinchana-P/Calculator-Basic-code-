//program for a simple calculator
const prompt = require('prompt-sync')();

let result;
//receive inputs
const operator = prompt('enter operator ( either = +,-,*,/ or % ) : ');

const num1 = parseFloat(prompt('enter first number : '));
const num2 = parseFloat(prompt('enter second number : '));

switch(operator) {
    case '+' : result = num1 + num2 ;
               console.log(`${num1} + ${num2} = ${result}`);
               break;
    
    case '-' : result = num1 - num2 ;
               console.log(`${num1} - ${num2} = ${result}`);
               break;
               
    case '*' : result = num1 * num2 ; 
               console.log(`${num1} * ${num2} = ${result}`);
               break;

    case '/' : result = num1 / num2 ;
               console.log(`${num1} / ${num2} = ${result}`);
               break;

    case '%' : result = num1 % num2 ;
               console.log(`${num1} % ${num2} = ${result}`);
               break;
       
    default : console.log(`Invalid-operator`);
              break;             

}



