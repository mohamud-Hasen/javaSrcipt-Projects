const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-controls error';
    const small = formControl.querySelector('small');
        small.innerText = message;
}
//show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-controls success';
}

function isValidEmail(email) {
    const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLocaleUpperCase());
}


//event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(username.value === ''){
        showError(username, ' username is required');
    }else {
        showSuccess(username);
    }
    if(email.value === ''){
        showError(email, ' email is required');
    }else {
        showSuccess(email);
    }
    if(password.value === ''){
        showError(password, ' password is required');
    }else {
        showSuccess(password);
    }
    if(password2.value === ''){
        showError(password2, ' Password 2 is required');
    }else {
        showSuccess(email);
    }

});