const firstNameEl = document.querySelector('.first-name');
const lastNameEl = document.querySelector('.last-name');
const emailEl = document.querySelector('.email');
const passwordEl = document.querySelector('.password');
const formEl = document.querySelector('.form');


formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
});

const isEmail = (input) => {
    const email =/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.test(input);
 } 

const setError = (input, message) => {
    const inputField = input.parentElement;
    inputField.classList.remove('show-success');
    inputField.classList.add('show-error');
    const error = inputField.querySelector('.error-msg');
    error.textContent = message;
};

const setSuccess = (input) => {
    const inputField = input.parentElement;
    inputField.classList.remove('show-error');
    inputField.classList.add('show-success');
    const error = inputField.querySelector('.error-msg');
    error.textContent = '';
};

const validateInputs = () => {
    const firstNameValue = firstNameEl.value.trim();
    const lastNameValue = lastNameEl.value.trim();
    const emailValue = emailEl.value.trim();
    const passwordValue = passwordEl.value.trim();

    if (firstNameValue === '')  {
        setError(firstNameEl, 'First Name cannot be empty!')
    } else {setSuccess(firstNameEl)};

    if (lastNameValue === '') {
        setError(lastNameEl, 'Last Name cannot be empty!')
    } else {setSuccess(lastNameEl)};

    if (emailValue === '' || !isEmail(emailValue)) {
        setError (emailEl, 'Looks like this is not an email')
    } else {setSuccess(emailEl)};

    if (passwordValue === '') {
        setError(passwordEl, 'Password cannot be empty!')
    } else {setSuccess(passwordEl)};
};




