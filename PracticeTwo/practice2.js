let num1;
let num2;

function suma(num1, num2) {
    return num1 + num2
}

function resta(num1,num2) {
    return num1-num2
}

function multiplicacion(num1,num2) {
    return num1*num2
}

function division(num1,num2) {
    return num1/num2
}

function iguales(num1, num2) {
    if (num1 === num2) {
        console.log("Ei, son iguales ei");
    }else
    console.log("No son apá");
}

function mayorQue(num1,num2) {
    if (num1>num2) {
        console.log(`El primer número que pusites es mayor ${num1}`);
    } else if (num2>num1) {
        console.log(`El segundo número que pusites es mayor apá ${num2}`);
    } else {
        console.log("Nose apá, a lo mejor son iguales revisalo");
    }

}



function menorQue(num1,num2) {
    if (num1<num2) {
        console.log(`El primer número es menor ${num1} ${num2}`);
    } else if(num2<num1){
        console.log(`El segundo número es menor ${num2} ${num2}`);
} else {
    console.log(`Ire apá pa que vea a ver que puso le dejo los datos ${num1} ${num2}`);
}
}
console.log(suma(2,3));
console.log(iguales(5,6));
console.log(mayorQue(8,8));
console.log(menorQue(5,6));