let logincontainer = document.querySelector('.logincontainer');
let loginbutton = document.querySelector('.loginbutton');
let idinput = document.querySelector('.idinput');
let passwordinput = document.querySelector('.passwordinput');
let emailinput = document.querySelector('#emailinput');
let phoneinput = document.querySelector('#phoneinput');
let otpinput = document.querySelector('#otpinput');
let newpasswordinput = document.querySelector('#newpasswordinput');
let forgotpasswordbutton = document.querySelector('.forgotpasswordbutton');
let createaccountcontainer = document.querySelector('.createaccountcontainer');
let firstnameinput = document.querySelector('.firstnameinput');
let lastnameinput = document.querySelector('.lastnameinput');
let emailregisterinput = document.querySelector('.emailregisterinput');
let numberinput = document.querySelector('.numberinput');
let password1input = document.querySelector('.password1input');
let passwordreenterinput = document.querySelector('.passwordreenterinput');
let createaccountsignupbutton = document.querySelector('.signupbutton');

let empty = '';

{
    $('.headerbutton').click(function() {
        $('.headerbutton').prop('disabled', true);
        $('.logincontainer').slideDown(500);
        $('.createaccountcontainer').addClass('hide');
    })
}
{
    let id = "Chocospark";
    let password = "chocospark@123";   
    loginbutton.onclick = function() {
    if(idinput.value === id && passwordinput.value === password){
        window.location.href = 'index.html';
    }
    else if(idinput.value === empty && passwordinput.value === empty) {
        alert('Please fillup the LogIn Id. & Password Section');
    }
    else if(idinput.value === empty) {
        alert('Please fillup the LogIn Id. Section');
    }
    else if(idinput.value != id) {
        alert('Please fillup the LogIn Id. Section correctly');
    }
    else if(passwordinput.value === empty) {
        alert('Please fillup the Password Input Section');
    }
    else if(passwordinput.value != password) {
        alert('Please fillup the Password Input Section correctly');
    }
    }
}
{
    $('.logincontainerforgotpasswordbutton').click(function() {
        $('.logincontainer').slideUp(500);
        $('.forgotpasswordcontainer').show({direction:"left"});
        $('.taglinediv').css('marginTop', '1%');
    })
}
{
    function forgotpasswordblankcheck() {
        if (emailinput.value == empty && phoneinput.value == empty && otpinput.value == empty && newpasswordinput.value == empty) {
            alert('Please fiilup all the Input Sections');
        }
        else if (emailinput.value == empty) {
            alert('Plase enter your registered E-mail Id');
        }
        else if (phoneinput.value == empty) {
            alert('Plase enter your Phone No.');
        }
        else if (otpinput.value == empty) {
            alert('Plase enter the OTP sent to your registered Mobile No.');
        }
        else if (newpasswordinput.value == empty) {
            alert('Plese enter a Password');
        }
    }
    forgotpasswordbutton.addEventListener('click', () => {
        return forgotpasswordblankcheck();
    })
}
{
    $('.forgotpasswordbutton').click(function() {
        $('.forgotpasswordcontainer').slideUp(500);
        $('.logincontainer').slideDown(500);
        $('.taglinediv').css('marginTop', '3%');
    })
}
{
    $('.createaccountbutton').click(function() {
        $('.logincontainer').slideUp(500);
        $('.createaccountcontainer').slideDown(500);
    })
}
{
    function signupbuttonfunction() {
        if(firstnameinput.value == empty && lastnameinput.value == empty && emailregisterinput.value == empty && numberinput.value == empty && password1input.value == empty && passwordreenterinput.value == empty) {
            alert('Please fillup all the Input Sections');
        }
        else if(firstnameinput.value == empty) {
            alert('Please enter your First Name');
        }
        else if(lastnameinput.value == empty) {
            alert('Please enter your Last Name');
        }
        else if(emailregisterinput.value == empty) {
            alert('Please enter your E-Mail ID');
        }
        else if(numberinput.value == empty) {
            alert('Please enter your Phonee No.');
        }
        else if(password1input.value == empty) {
            alert('Please enter a Password');
        }
        else if(passwordreenterinput.value == empty) {
            alert('Please re-enter the Previously Entered Password');
        }
        else {
            $('.createaccountcontainer').slideUp(500);
            $('.logincontainer').slideDown(500);
        }
    }
    createaccountsignupbutton.addEventListener('click', () => {
        if(password1input.value == passwordreenterinput.value) {
            return signupbuttonfunction();
        }
        else {
            alert('Password & Re-Entered Password should be same');
        }
    })
}
