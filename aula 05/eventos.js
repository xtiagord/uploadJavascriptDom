function register(ev){
    console.log(ev)
    const sectionElemnet = ev.currentTarget.parentNode
    const username = sectionElemnet.children.username.value
    const password = sectionElemnet.children.password.value
    const passwordConfirmation = sectionElemnet.children.passwordConfirmation.value


if(password === passwordConfirmation){
    alert("Usuario " + username + " registrado!")

    }else{
    alert("As senhas não conferem")
    }
}

function removeEvent(){
    button.removeEventListener('click', register)
    alert("event Removed")
}

const button = document.getElementById("register-button")
button.addEventListener('click' , register)
button.addEventListener('blur', function(ev) {
    console.log(ev)
})
