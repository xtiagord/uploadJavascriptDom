function addContact(){   
const contactSection = document.getElementById('contacts-list')

const h3 = document.createElement('h3')
h3.innerText = "Contato"

const ul = document.createElement('ul')

const nameLi = document.createElement('li')
nameLi.innerText = "Nome: "
const nameInput = document.createElement('input')
nameInput.type = 'text'
nameInput.name = 'fullname'
nameLi.appendChild(nameInput)
ul.appendChild(nameLi)
ul.appendChild(document.createElement('br'))


const phoneLi = document.createElement('li')
phoneLi.innerText = "Telefone: "
const telefoneInput = document.createElement('input')
telefoneInput.type = 'text'
telefoneInput.name = 'telefone'
phoneLi.appendChild(telefoneInput)
ul.appendChild(phoneLi)
ul.appendChild(document.createElement('br'))

const addressLi = document.createElement('li')
addressLi.innerText = "Endereço: "
const endereçoInput = document.createElement('input')
endereçoInput.type = 'text'
endereçoInput.name = 'endereço'
addressLi.appendChild(endereçoInput)
ul.appendChild(addressLi)
ul.appendChild(document.createElement('br'))

contactSection.append(h3,ul)

}

function removeContact(){
    const contactSection = document.getElementById('contacts-list')

    const titles = document.getElementsByTagName('h3')
    const contacts = document.getElementsByTagName('ul')

    contactSection.removeChild(titles[titles.length - 1])
    contactSection.removeChild(contacts[contacts.length - 1])
}