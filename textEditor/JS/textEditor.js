document.getElementById('bold').addEventListener('click', function () {

    const getText = document.getElementById('textField');
    if (getText.value !== '') {
        getText.style.fontWeight = "bold";

    }
})
document.getElementById('italic').addEventListener('click', function () {
    const getText = document.getElementById('textField');
    getText.style.fontStyle = "italic";
})
document.getElementById('text-decoration').addEventListener('click', function () {
    const getText = document.getElementById('textField');
    getText.style.textDecoration = "underline";
})
document.getElementById('text-left-align').addEventListener('click', function () {
    const getText = document.getElementById('textField');
    getText.style.textAlign = "left";
})
document.getElementById('text-center-align').addEventListener('click', function () {
    const getText = document.getElementById('textField');
    getText.style.textAlign = "center";
})
document.getElementById('text-right-align').addEventListener('click', function () {
    const getText = document.getElementById('textField');
    getText.style.textAlign = "right";
})
document.getElementById('font-size').addEventListener('click', function () {
    const getInputNumberValue = document.getElementById('font-size').value;
    const getTextField = document.getElementById('textField');
    getTextField.style.fontSize = `${getInputNumberValue}px`;

})
document.getElementById('text-color').addEventListener('click', function () {
    const colorValue = document.getElementById('text-color');

})

