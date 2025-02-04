let num1 = 10;
let num2 = 5;
let num3 = 0;

function addition(num1, num2) {
    let add = num1 + num2;
    console.log("Addition 10 + 5:",add);
}




function subtraction(num1, num2) {
    let sub = num1 - num2;
    console.log("Subtraction 10 - 5:",sub);
}



function multiplication(num1, num2) {
    let mul = num1 * num2;
    console.log("Multiplication",num1,"*",num2,":",mul);
}



function division(num1, num2) {
    let div = num1 / num2;
    console.log("Division",num1,"/",num2,":",div);
}



function divzero(num1, num3) {
    console.log("Division by zero",num1,"/",num3,": Division by zero!");
}


function getall(math){
    math(num1, num2);

}

getall(multiplication);