document.getElementById('deposit-button').addEventListener('click', function () {

    // deposit 
    const inputFieldValue = inputFieldValueById('deposit-field');
    const previousDeposit = getElementValue('deposit-amount');
    if (isNaN(inputFieldValue)) {
        alert('Provide valid Number');
        return
    }
    const newDepositTotal = previousDeposit + inputFieldValue
    setElementValue('deposit-amount', newDepositTotal);


    // Balance 
    const previosBalance = getElementValue('balance-amount')
    const newBalance = previosBalance + inputFieldValue;
    setElementValue('balance-amount', newBalance);
})
