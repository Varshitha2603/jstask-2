function myAdd() {
    let a = 456;
    let b = 658;
    let c = a + b;
    document.getElementById('add').innerHTML=c;
}
function mySub() {
    let a = 456;
    let b = 658;
    let c = a - b;
    document.getElementById('sub').innerHTML=c;
}
function myMult() {
    let a = 456;
    let b = 658;
    let c = a * b;
    document.getElementById('mult').innerHTML=c;
}
function myDivide() {
    let a = 456;
    let b = 658;
    let c = a / b;
    document.getElementById('divide').innerHTML=c;
}
function myModulo() {
    let a = 456;
    let b = 658;
    let c = a % b;
    document.getElementById('modulo').innerHTML=c;
}

let $ = "hello";
console.log(typeof $);