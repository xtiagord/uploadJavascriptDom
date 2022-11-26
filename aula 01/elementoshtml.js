function show(){
    const contactList = document.getElementById("contact-list")
    console.log(contactList)
}

function showw(){
    const liElements = document.getElementsByTagName("li")
    console.log(liElements)
}

function showww(){
    const contactInput = document.getElementsByClassName("contact-input")
    console.log(contactInput)
}

function quatro(){
    const contact1 = document.getElementsByName("contact1")
    console.log(contact1)
}

function cinco(){
    const contacts = document.querySelectorAll("#contact-list > li > label")
    console.log(contacts)
}

function seis(){
    const contact = document.querySelector("#contact-list > li > label")
    console.log(contact)
    console.log(contact.textContent)
}