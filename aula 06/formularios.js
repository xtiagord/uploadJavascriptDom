const form = document.getElementById('ordemForm')

form.addEventListener('submit', function(ev){
    ev.preventDefault()

    const nameUser = document.querySelector('input[name="nameUser"]').value 
    const address = document.querySelector('input[name = "address"]').value
    const typeBread = document.querySelector('select[name="typeBread"]').value
    const main = document.querySelector('input[name="main"]').value
    const observation = document.querySelector('textarea[name="observation"]').value

    let salad = ''


    document.querySelectorAll('input[name="salad"]:checked').forEach(function (item){
        salad += " - " + item.value + " \n"
    })

    console.log({
        nameUser,
        address,
        typeBread,
        main,
        salad,
        observation
    })

    alert("Pedido Realizado \n" + 
    "\nNome do cliente: " + nameUser + 
    "\nEndereço de entrega: " + address + 
    "\nTipo de pão: " + typeBread +
    "\nRecheio: \n - " + main + "\n " + salad + 
    "\nObservações: " + observation)
})


