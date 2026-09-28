function add(){
    let a=Number(document.getElementById('num1').value);
    let b=Number(document.getElementById('num2').value);
    let result=a+b;
    document.getElementById('Result').innerHTML=result;

}

function substract(){
    let a=Number(document.getElementById('num1').value);
    let b=Number(document.getElementById('num2').value);
    let result=a-b;
    document.getElementById('Result').innerHTML=result;
}

function multiply(){
    let a=Number(document.getElementById('num1').value);
    let b=Number(document.getElementById('num2').value);
    let result=a*b;
    document.getElementById('Result').innerHTML=result;
}

function devide(){
    let a=Number(document.getElementById('num1').value);
    let b=Number(document.getElementById('num2').value);
    let result=a/b;
    document.getElementById('Result').innerHTML=result;
}