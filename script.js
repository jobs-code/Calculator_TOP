//Funcs for perform math operation.
function add(a, b){
    let out = a+b;
    return Number.isInteger(a+b) ? (a+b).toString() : (a+b).toFixed(2); // to trim decimal up to 2
}

function sub(a, b){
    return Number.isInteger(a - b) ? (a-b).toString() : (a-b).toFixed(2);
}

function mul(a, b){
    return Number.isInteger(a * b) ? (a*b).toString():(a*b).toFixed(2);
}

function div(a, b){
    return Number.isInteger(a / b)? (a/b).toString():(a/b).toFixed(2);
}

function mod(a, b){
    return Number.isInteger(a % b)? (a%b).toString():(a%b).toFixed(2);
}

let display = document.querySelector("#display-text");

let btns = document.querySelectorAll('button');

let rstFlag = true;

let opflag = 0; //to count operator
let dflag = 0; // to count decimal 
let op = /[+\-*%/]/; 

btns.forEach((btn) =>btn.addEventListener('click', ()=>displayInput(btn.textContent))); // for handling gui input.

// for handling keyboard input
document.addEventListener("keydown", (e)=>{
    if (!isNaN(e.key) || op.test(e.key) || e.key === 'Backspace' || e.key === 'Enter'){
        displayInput(e.key);
    }
})

// for handling userinput in display
function displayInput(inval){
        if (rstFlag)
        {
            rstFlag = false;
            display.textContent = '';
        }
        if (inval === "AC")
        {
            display.textContent = '';
            rstFlag = true;
            opflag = 0;
            dflag = 0;
        }else if (inval === "=" || inval === "Enter")
        {
            compute(display.textContent);
            rstFlag = true;
            opflag = 0;
        }else if (inval === '.')
        {
            if (dflag < 1){
                display.textContent += inval;
                dflag ++;
            }
        }
        else if (inval === 'DEL' || inval ==='Backspace')
        {
            display.textContent = display.textContent.slice(0,-1);
        }
        else if (op.test(inval))
        {
            dflag = 0;
            opflag ++;
            let kval = inval;
            if (opflag == 2){
                compute(display.textContent);
                display.textContent += kval;
                opflag = 1;

            }else{
                display.textContent += inval;
            }
        }
        else
        {
            display.textContent += inval;
        }    
}


//func to extract operands and operator from input
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



