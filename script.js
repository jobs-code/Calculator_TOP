function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

function mul(a, b){
    return a * b;
}

function div(a, b){
    return a / b;
}

function mod(a, b){
    return a % b;
}

let display = document.querySelector("#display");

let btns = document.querySelectorAll('button');

let rstFlag = true;

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
        display.textContent = add(+a, +b);
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
}

function decimalCheck(input){
    let 
}