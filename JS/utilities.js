function inputFieldValueById(inputFieldId) {
    const field = document.getElementById(inputFieldId);
    const fieldValueString = field.value;
    const fieldAmount = parseFloat(fieldValueString)
    field.value = '';
    return fieldAmount;

}

function getElementValue(elementbyId) {
    const previousDepositElement = document.getElementById(elementbyId);
    const previousDepositAmount = parseFloat(previousDepositElement.innerText);
    return previousDepositAmount;
}

function setElementValue(textElementId ,latestValue){
    const previousDepositTotal = document.getElementById(textElementId);
    previousDepositTotal.innerText =  latestValue;
}