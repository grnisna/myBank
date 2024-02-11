document.getElementById('submit-btn').addEventListener('click',function(){
    const emailField = document.getElementById('email');
    const email = emailField.value;

    const passwordField = document.getElementById('password');
    const password = passwordField.value;

    if(email === 'nisan@gmail.com' && password === '123456'){
        window.location.href = 'bankdetails.html'
    }
})