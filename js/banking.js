/* 
function doubleIt(num){
    const result = num * 2;
    return result;
}
const first = doubleIt(5);
const second = doubleIt(7);
*/
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear input field
    inputField.value = '';
    return amountValue;

}

function updateTotalField(totalFieldId,amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    if(isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}


document.getElementById('deposit-button').addEventListener('click', function(){
    /* 
    const inputField = document.getElementById('deposit-input');
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    */
   


    // get current deposit
    /* const totalElement = document.getElementById('deposit-total');
    const totalElementText = totalElement.innerText;
    const previoustotalElement = parseFloat(totalElementText);

    totalElement.innerText = previoustotalElement + amountValue; */
   
    
    // updapte balance
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + amountValue; */
    const amountValue = getInputValue('deposit-input');
    updateTotalField('deposit-total', amountValue);
    updateBalance(amountValue, true);
});

// handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function(){
    /* 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    */
   

    // update withdraw total
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText); 

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */

   

    // update balance after withdraw
   /*  const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal =  parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */
    const withdrawAmount = getInputValue('withdraw-input');
    updateTotalField('withdraw-total', withdrawAmount);
    updateBalance(withdrawAmount, false);

    // clear withdraw input field
    // withdrawInput.value = '';  
});

