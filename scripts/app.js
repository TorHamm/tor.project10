const submitbtn = document.getElementById('submitbtn');
const dismissbtn = document.getElementById('dismissbtn');
const submitedemail = document.getElementById('submitedemail');
const errorinput = document.getElementById('errorinput');

const successpage = document.getElementById('successpage');
const cardcomponent = document.getElementById('cardcomponent');

function submitemail(){
    if ((email.checkValidity()) && (email.value !== "")) {
        cardcomponent.style.display = "none";
        successpage.style.visibility = "visible";
        submitedemail.innerHTML = email.value;
    } else {
        errorinput.style.visibility = "visible";
    }
}

dismissbtn.addEventListener('click' , () => {
    location.reload();
});