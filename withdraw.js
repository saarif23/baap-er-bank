
// step1. add event listener to the withdraw button

document.getElementById('withdraw-btn').addEventListener('click', function(){    
// step2. get the withdraw amount from the withdraw field
const withdrawField = document.getElementById('withdraw-field');
const newWithdrawAmountString =  withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);


// step3. get the current withdraw amount
const totalWithdraw =  document.getElementById('total-withdraw');
const previousTotalWithdrawString = totalWithdraw.innerText;
const previousTotalWithdraw =parseFloat(previousTotalWithdrawString);

// step4. add number to set the total withdraw
const currentTotalWithdraw = previousTotalWithdraw + newWithdrawAmount;
totalWithdraw.innerText = currentTotalWithdraw;

// step5. get the current balance 
const totalBalance = document.getElementById('total-balance');
const previousTotalBalanceString = totalBalance.innerText;
const previousTotalBalance = parseFloat(previousTotalBalanceString);

//step6.  set balance with withdraw filed

const currentTotalBalance = previousTotalBalance - newWithdrawAmount;
totalBalance.innerText =  currentTotalBalance;



// step7. clear the withdraw field

withdrawField.value = '';




})