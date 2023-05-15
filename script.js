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

//checkRequired fields
function chckRequired(inputArr){
    inputArr.forEach(function(input) {
       if(input.value.trim()===''){
        showError(input, `${getFieldName(input)} is required`);
       }else{
        showSuccess(input)
       }
    })

}

//getFieldName
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}


//event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();
   chckRequired([username, email, password, password2]);

});