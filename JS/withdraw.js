document.getElementById('withdraw-button').addEventListener('click', function () {
    // withdraw 
    const withdrawInputValue = inputFieldValueById('withdraw-field');
    const withdrawTextValue = getElementValue('withdraw-amount')

    if (isNaN(withdrawInputValue)) {
        alert('Provide valid Number');
        return
    }
    
    const balanceAmount = getElementValue('balance-amount');
    if (withdrawInputValue > balanceAmount) {
        alert('Insufficent Balance !!! Please deposit more and then withdraw');
        return;
    }

    const newWithdrawValue = withdrawTextValue + withdrawInputValue;
    setElementValue('withdraw-amount', newWithdrawValue);


    //    balance 

    const latestBalanceAmount = balanceAmount - withdrawInputValue;
    setElementValue('balance-amount', latestBalanceAmount);




})