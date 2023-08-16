// step1. add event listener  to the deposit button
document.getElementById('deposit-btn').addEventListener('click',  function(){
// step2. get the deposit amount from the deposit field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

   
// step3. get the current deposit total 
// for non-input(element other than input, textarea) use innerText to get the text
    const totalDeposit = document.getElementById('total-deposit');
    const previousTotalDepositString = totalDeposit.innerText;
    const previousTotalDeposit = parseFloat(previousTotalDepositString);

// step4. add numbers to  set the total  deposit
    const currentTotalDeposit = previousTotalDeposit + newDepositAmount;
    totalDeposit.innerText = currentTotalDeposit;

// step5. get balance total 
    const totalBalance = document.getElementById('total-balance');
    const previousTotalBalanceString = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousTotalBalanceString);
    
// step6. calculate current total balance
    const currentTotalBalance = previousTotalBalance + newDepositAmount;
    totalBalance.innerText = currentTotalBalance

// step7. clear the deposit field
    depositField.value = '';

})