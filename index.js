const billInput = document.getElementById("bill-amount");
const peopleInput = document.getElementById("number-of-people");
const tip0 = document.getElementById("tip0");
const tip5 = document.getElementById("tip5");
const tip10 = document.getElementById("tip10");
const tip15 = document.getElementById("tip15");
const tip20 = document.getElementById("tip20");
const customTip = document.getElementById("custom-tip");
const resetButton = document.getElementById("reset");
const billError = document.getElementById("bill-error-text");
const peopleError = document.getElementById("people-error-text");
const tipError = document.getElementById("tip-error-text");

const totalAmount = document.getElementById("total-per-person")
const tipPerPerson = document.getElementById("tip-amount-per-person")

let tip = 0;
let tipGiven = false;
let numberOfPeople = 0;
let bill = 0;
let totalAmountInput = 0;
let tipPerPersonInput = 0;

function getBill() {

if (customTip.value < 0) {
customTip.setAttribute('class', "custom-tip-error")
tipError.innerHTML = "Error: tip amount cannot be negative"
tipGiven = false;
onError();
} else {
    tipError.innerHTML = ""
}

if (bill >0 && tipGiven === true && numberOfPeople > 0) {
tipTotal = (bill/100)*tip; 
totalAmountInput = ((bill + tipTotal)/numberOfPeople).toFixed(2);
tipPerPersonInput = (tipTotal / numberOfPeople).toFixed(2);
totalAmount.innerHTML = "£"+totalAmountInput;
tipPerPerson.innerHTML = "£"+tipPerPersonInput;
}
}

function selectButton(event) {
    resetAllButtons();
    customTip.value = "";
    tipGiven = true;
    selectedButton = event.path[0].id
    if(selectedButton === "tip0") {
        tip = 0
        tip0.setAttribute('class', "selected")
        getBill()
    } else     if(selectedButton === "tip5") {
        tip = 5
        tip5.setAttribute('class', "selected")
        getBill()
    } else     if(selectedButton === "tip10") {
        tip = 10
        tip10.setAttribute('class', "selected")
        getBill()
    } else     if(selectedButton === "tip15") {
        tip = 15
        tip15.setAttribute('class', "selected")
        getBill()
    } else     if(selectedButton === "tip20") {
        tip = 20
        tip20.setAttribute('class', "selected")
        getBill()
    } 
}

function selectCustomTip() {
    resetAllButtons();
    tipGiven = true;
    tip = customTip.value;
    customTip.setAttribute('class', "custom-tip-selected")
    getBill()
    }

function selectBillAmount() {
    bill = parseFloat(billInput.value);
    if (billInput.value < 0.01) {
        billInput.className = "input error"
        billError.innerHTML = "Error: amount cannot be zero or negative"
        onError()
    } else {
        billInput.className = "input"
        billError.innerHTML = ""
    }
    getBill()

}

function selectNumberOfPeople() {
    numberOfPeople = peopleInput.value;
    if (peopleInput.value < 1) {
        peopleInput.className = "input error"
        peopleError.innerHTML = "Error: number cannot be zero or negative"
        onError()
    } else {
        peopleInput.className = "input"
        peopleError.innerHTML = ""
    }
    getBill()
}

function resetAllButtons() {
    tip0.className = "tip-button";
    tip5.className = "tip-button";
    tip10.className = "tip-button";
    tip15.className = "tip-button";
    tip20.className = "tip-button";
    customTip.className = "custom-tip";
}

function selectResetButton() {
    resetAllButtons()
    tip = 0;
    tipGiven = false;
    customTip.value = "";
    numberOfPeople = 0;
    peopleInput.value = "";
    bill = 0;
    billInput.value = "";
    totalAmountInput = 0;
    tipPerPersonInput = 0;
    totalAmount.innerHTML = "£"+totalAmountInput.toFixed(2);
    tipPerPerson.innerHTML = "£"+tipPerPersonInput.toFixed(2);
    billInput.className = "input"
    billError.innerHTML = "";
    customTip.className = "custom-tip";
    tipError.innerHTML = "";
    peopleInput.className = "input"
    peopleError.innerHTML = "";


}

function onError() {
    totalAmountInput = 0;
    tipPerPersonInput = 0;
    totalAmount.innerHTML = "£"+totalAmountInput.toFixed(2);
    tipPerPerson.innerHTML = "£"+tipPerPersonInput.toFixed(2);
}


// Event Listeners

billInput.addEventListener('input',function() {selectBillAmount()})
tip0.addEventListener('click', function(event) {selectButton(event)})
tip5.addEventListener('click', function(event) {selectButton(event)})
tip10.addEventListener('click', function(event) {selectButton(event)})
tip15.addEventListener('click', function(event) {selectButton(event)})
tip20.addEventListener('click', function(event) {selectButton(event)})
customTip.addEventListener('input', function() {selectCustomTip()})
peopleInput.addEventListener('input', function() {selectNumberOfPeople()})
resetButton.addEventListener('click', function() {selectResetButton()})
