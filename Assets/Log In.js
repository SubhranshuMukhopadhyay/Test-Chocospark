let loginbutton = document.querySelector('.loginbutton');
let idinput = document.querySelector('.idinput');
let passwordinput = document.querySelector('.passwordinput');
let emailinput = document.querySelector('#emailinput');
let phoneinput = document.querySelector('#phoneinput');
let otpinput = document.querySelector('#otpinput');
let newpasswordinput = document.querySelector('#newpasswordinput');
let forgotpasswordbutton = document.querySelector('.forgotpasswordbutton');

{
    $('.headerbutton').click(function() {
        $('.inputcontainer').slideDown(500);
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
    else{
        alert("Incorrect Input");
        }
    }
}
{
    $('.logincontainerforgotpasswordbutton').click(function() {
        $('.inputcontainer').slideUp(500);
        $('.forgotpasswordcontainer').show({direction:"left"});
        $('.taglinediv').css('marginTop', '1%');
    })
}
{
    let empty = '';

    function forgotpasswordblankcheck() {
        if (emailinput.value == empty && phoneinput.value == empty && otpinput.value == empty && newpasswordinput.value == empty) {
            alert('Please Fiilup All the Input Sections');
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
        $('.inputcontainer').slideDown(500);
        $('.taglinediv').css('marginTop', '3%');
    })
}
{
    $('.createaccountbutton').click(function() {
        $('.inputcontainer').slideUp(500);
        $('.createaccountcontainer').slideDown(500);
    })
}
