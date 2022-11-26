document.getElementById('sessionBtn').addEventListener('click', function(){
    const input = document.getElementById('session')
    window.sessionStorage.setItem('info', input.value)
    input.value = ''

})

document.getElementById('readSesssion').addEventListener('click', function(){
    const info = sessionStorage.getItem('info')
    alert('A informação Salva é ' + info)

})

document.getElementById('localBtn').addEventListener('click', function(){
    const input = document.getElementById('local')
    window.localStorage.setItem('info', input.value)
    input.value = ""
})

document.getElementById('readLocal').addEventListener('click', function(){
    const info = localStorage.getItem('info')
    alert("A informação salva é " + info)
})

document.getElementById('cookieBtn').addEventListener('click', function(){
    const input = document.getElementById('cookie')
    const cookie = 'info=' + input.value + ";"
    const expiration = 'expires=' + new Date(2022,10,13) + ";"
    const path = 'patch=/;'
    document.cookie = cookie + expiration + path
    input.value = ''  
})

document.getElementById('cookie2Btn').addEventListener('click', function(){
    const input = document.getElementById('cookie2')
    const cookie = 'text=' + input.value + ";"
    const expiration = 'expires=' + new Date(2022,10,13) + ";"
    const path = 'patch=/;'
    document.cookie = cookie + expiration + path
    input.value = ''  

})
