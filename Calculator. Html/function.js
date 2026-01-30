const operatorBox = document.getElementById('operatorBox');
const valueBox = document.getElementById('valueBox');

let firstValue = "";
let operator = "";



function appendnum(value) {  //idisplay na jay number sir
    if(valueBox.value === "0") {
    valueBox.value = value;
   } else {
    valueBox.value += value;
   }
}


function operatordis(op) { //idisplay na jay operator sir
    firstValue = valueBox.value;
    operator = op;

    operatorBox.value = op;
    valueBox.value = "0";
}

function clearall() { //delete na amin sir
    valueBox.value = "0";
    operatorBox.value = "";
    firstValue ="";
    operator ="";
}

function backspace() { //ikkaten na jay kaudiyan nga naykabil sir
   if (valueBox.value = valueBox.value.slice(0, -1)) {
    operatorBox.value ="";
    firstValue ="";
    operator ="";
   }else {
    valueBox.value = "0";
   }
}

function calculate() { //equals, icheck na jay values ti firstValue, operator ken secondValue sir 
    let secondValue = valueBox.value; //sana i-evaluate
    let result = eval(firstValue + operator + secondValue);
    valueBox.value = result;
    operatorBox.value = "";
    firstValue = "";
    operator = "";
}