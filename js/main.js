let form = document.getElementById('form');
let userName = document.getElementById('name');
let email = document.getElementById('email');
let passWord = document.getElementById('password');
let confirmPassword = document.getElementById('confirmpassword');
let mobile = document.getElementById('mobile');
let gender =document.querySelectorAll('input[name="gender"]');
let birthday = document.getElementById('birthday');
let submit = document.getElementById('button');
console.log(form);

form.addEventListener('submit', (e) => {

    e.preventDefault();
    checkInputs();
});

function checkInputs() {

    //get the values from inputs
   const usernameValue = userName.value.trim();
   const emailValue =  email.value.trim();
   const passwordValue =  passWord.value.trim();
   const conpasswordValue = confirmPassword.value.trim();
   const mobilValue = mobile.value.trim();

    // for username
   if (usernameValue === '') {
    setErrorFor(userName);
    let smalluser =  document.querySelector('.my-input #nom');
    smalluser.textContent = "you should write  your name "
   }else {
       setSuccessFor(userName);
   }

   // for email
   const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/
   const regexo = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{2,3}$/

   if (emailValue === '') {
        setErrorFor(email);
        let smallemail =  document.querySelector('.my-input #mail');
        smallemail.textContent = "Email can not be blank ";
    }else if (regex.test(emailValue) || regexo.test(emailValue)) {
        setSuccessFor(email);

    } else {
        setErrorFor(email);
        let smallemail =  document.querySelector('.my-input #mail');
        smallemail.textContent = "email is not valid";
    }

    //for password
    if (passwordValue === '') {
        setErrorFor(passWord);
        let smallemail =  document.querySelector('.my-input #pass');
        smallemail.textContent = "password can not be blank";
    }else {
        setSuccessFor(passWord);
    }

    //for confirm password
    if (conpasswordValue === '') {
        setErrorFor(confirmPassword);
        let smallemail =  document.querySelector('.my-input #conpass');
        smallemail.textContent = "password confirm can not be blank";

    }else if(passwordValue !== conpasswordValue) {
        setErrorFor(confirmPassword);
        let smallemail =  document.querySelector('.my-input #conpass');
        smallemail.textContent = "password  can not be match";
    }else {
        setSuccessFor(confirmPassword);
    }

    //check mobil number
    const regexn = /^[0-9]{10}$/;
    if (mobilValue === '') {
        setErrorFor(mobile);
        let smallemail =  document.querySelector('.my-input #mob');
        smallemail.textContent = "number can not be blank";
    }else if (regexn.test(mobilValue)) {
        setSuccessFor(mobile);

    } else {
        setErrorFor(mobile);
        let smallemail =  document.querySelector('.my-input #mob');
        smallemail.textContent = "number is not valid";
    }
    
}

function setErrorFor(input) {

    const myInputParent = input.parentElement;    
    //add error class
    myInputParent.className = 'my-input error';

}

function setSuccessFor(input) {

    const myInputParent = input.parentElement;
    myInputParent.className = 'my-input success';
}


// for check email in good form
// function isEmail (email) {

//     const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/
//     const regexo = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{2,3}$/
// }
/*
 
 ^ => match begining of input == /^A/ does not match the "A" in "an A", but does match the first "A" in "An A".
 $ => matches end of input == /t$/ does not match the "t" in "eater", but does match it in "eat".
 [] => specify a set of characters [abc] will match if the string you are trying to match contains any of the a, b or c.
 [^] => mean match all excepte this
 + ==> matches one or more occurrences of the pattern left to it.
 \ =>  is used to escape various characters
 . => period matches any single character
 {} => {n,m}. This means at least n, and at most m repetitions of the pattern left to it.


 */