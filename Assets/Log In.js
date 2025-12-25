let loginbutton = document.querySelector('.loginbutton');
let idinput = document.querySelector('.idinput');
let passwordinput = document.querySelector('.passwordinput');

{
    $('.headerbutton').click(function() {
        $('.inputcontainer').slideDown(500);
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
