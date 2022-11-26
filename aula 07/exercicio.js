function addDev(){
    const contactSection = document.getElementById('ordem')



    const h3 = document.createElement('h3')
    h3.innerText = "Experiencia"

    const ul = document.createElement('ul')

    const nameLi = document.createElement('li')
    nameLi.innerText = "Tecnologias: "
    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'technologies'
    nameLi.appendChild(nameInput)
    ul.appendChild(nameLi)
    ul.appendChild(document.createElement('br'))


    const experienceLi = document.createElement('li')
    experienceLi.innerText = "Tempo de experiência: "
    const experienceinput = document.createElement('input')
    experienceinput.type = 'radio'
    experienceinput.name = "experience"
    experienceinput.value = "0 - 2 ANOS"

contactSection.append(h3, ul )
}
function removeDev(){
    const contactSection = document.getElementById('ordem')

    const titles = document.getElementsByTagName('h3')
    const experience = document.getElementsByTagName('ul')

    contactSection.removeChild(titles[titles.length - 1])
    contactSection.removeChild(experience[experience.length - 1])
}

function cadastar(){   
const form = document.getElementById('ordemForm')

form.addEventListener('submit', function(ev){
    ev.preventDefault()

const nameUser = document.querySelector('input[name="nameUser"]').value
const nameLi = document.querySelector('input[name="technologies"]').value
const experienceLi = document.querySelector('input[name="experience"]').value


alert("Cadastro realizado: \n" + 
      "\nNome do Desenvolvedor :" + nameUser + 
      "\nTecnologias: " + nameLi + 
      "\nExperiencias: " + experienceLi)


})}

