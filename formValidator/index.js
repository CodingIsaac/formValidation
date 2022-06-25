const form = document.getElementById('form');
const firstNameError = document.getElementById('firstNameError');
const surnameError = document.getElementById('surnameError');
const emailError = document.getElementById('emailError');
const telError = document.getElementById('telError');
const passwordError = document.getElementById('passwordError');
const resetError = document.getElementById('resetError')
const firstname = document.getElementById('firstname');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const telNumber = document.getElementById('telNumber');
const password = document.getElementById('password');
const passwordTwo = document.getElementById('passwordTwo');

let IsEmpty = (val) => {
  return val.toString().length == 0 ? true : false;
}


form.addEventListener('submit', function (e) {
  e.preventDefault();


  trimValues();

  let firstnameEmpty = IsEmpty(firstname.value);
  let surnameEmpty = IsEmpty(surname.value);
  let emailEmpty = IsEmpty(email.value);
  let telNumberEmpty = IsEmpty(telNumber.value);
  let passwordEmpty = IsEmpty(password.value);
  let passwordTwoEmpty = IsEmpty(passwordTwo.value);


  if (firstnameEmpty) {

    firstNameError.innerHTML = 'Firstname is empty';
  }
  if (surnameEmpty) {
    surnameError.innerHTML = 'Surname is Empty';
  }
  if (emailEmpty) {
    emailError.innerHTML = 'Not a Valid Email';
  }
  if (telNumberEmpty) {
    telError.innerHTML = 'Tel is Empty';
  }
  if (passwordEmpty) {
    passwordError.innerHTML = 'Password is Empty';

  }
  if (passwordTwoEmpty) {
    resetError.innerHTML = 'No Password Value Entered';
  }

  var checkRequiredResult = checkRequired([firstname, surname, email, telNumber, password, passwordTwo]);
  if (!checkRequiredResult.status) {
    return (checkRequiredResult.error);
  } else {
    console.log(checkLength(firstname, 3, 15));
    checkLength(surname, 3, 15);
    checkLength(telNumber, 9, 11);
    checkLength(password, 6, 25);
   console.log( checkEmail(email));
    checkPasswordsMatch(password, passwordTwo);

  }





});

function getFieldName(input) {
  return input.getAttribute('id');
}

function checkRequired(inputArr) {
  let result = {
    error: '',
    status: true
  }

  for (let x = 0; x < inputArr.length; x++) {
    if (inputArr[x].value.trim() === '') {
      result = { 'error': `${getFieldName(inputArr[x])} is required`, status: false };
      break;
    }
  }

  return result;
}



function trimValues() {
  const firstnameValue = firstname.value.trim();
  const surnameValue = surname.value.trim();
  const emailValue = email.value.trim();
  const telNumberValue = telNumber.value.trim();
  const passwordValue = password.value.trim();
  const passwordTwoValue = passwordTwo.value.trim();
}

function checkPasswordsMatch(inputOne, inputTwo) {
  if (inputOne.value !== inputTwo.value) {
    return (inputTwo, 'Passwords do not match');
  }
}

function checkLength(input, min, max) {
  if (input.value.length < min) {
    return (`${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    return (`${getFieldName(input)} must be less than ${max} characters`);
  } else {
    return input.value;
  }
}

function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    return input;
  } else {
    return (input, 'Email is not valid')
  }
}





