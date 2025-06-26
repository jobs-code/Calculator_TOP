function add(a, b){
    return (a + b).toFixed(2);
}

function sub(a, b){
    return (a - b).toFixed(2);
}

function mul(a, b){
    return (a * b).toFixed(2);
}

function div(a, b){
    return (a / b).toFixed(2);
}

function mod(a, b){
    return (a % b).toFixed(2);
}

let display = document.querySelector("#display");

let btns = document.querySelectorAll('button');

let rstFlag = true;

let opflag = 0;
let op = /[+\-*%/]/;

btns.forEach((btn) =>{
    
    btn.addEventListener('click', ()=>{
        console.log(rstFlag)
        if (rstFlag){
            rstFlag = false;
            display.textContent = '';
        }
        if (btn.textContent === "AC"){
            display.textContent = '';
        }else if (btn.textContent === "="){
            compute(display.textContent);
            rstFlag = true;
        }else if (btn.textContent === '.'){
            console.log("call . func");
            decimalCheck(display.textContent);
        }else if (btn.textContent === 'DEL'){
            display.textContent = display.textContent.slice(0,-1);
        }
        else if (op.test(btn.textContent)){
            opflag ++;
            if (opflag == 2){
                console.log("call function");
            }else{
                display.textContent += btn.textContent;
            }
            
        }else{
            display.textContent += btn.textContent;
        }
}
)}
)



function compute(input){
    if (input.includes('+')){
        let vals = input.split("+");
        let [a, b] = vals;
        if (a != '' && b != ''){
            display.textContent = add(+a, +b);
        }else{
            display.textContent = "Error!";
        }
    }
    else if (input.includes('-')){
        let vals = input.split("-");
        let [a, b] = vals;
        display.textContent = sub(+a, +b);
    }
    else if (input.includes('*')){
        let vals = input.split("*");
        let [a, b] = vals;
        display.textContent = mul(+a, +b);
    }
    else if (input.includes('/')){
        let vals = input.split("/");
        let [a, b] = vals;
        if (b == "0"){
            display.textContent = "ERROR";
            alert("Can't divide by Zero!");
        }
        else{
            display.textContent = div(+a, +b);
        }
    }
    else if (input.includes('%')){
        let vals = input.split("%");
        let [a, b] = vals;
        display.textContent = mod(+a, +b);
    }
    else{
        display.textContent = 'Error';
    }
}

function decimalCheck(input){
    let 
}