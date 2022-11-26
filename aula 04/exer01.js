function addPlayer(){
    const position= document.getElementById('position').value
    const playerName = document.getElementById('name-player').value
    const numberPlayer = document.getElementById('number-player').value

    const confirma = confirm("Escalar " + playerName + numberPlayer+ " Na posição " + position + " ?")

 if(confirma){
    const teamlist = document.getElementById("team-list")
    const playerItem = document.createElement("li")
    playerItem.id = "player-" + numberPlayer
    playerItem.innerText = position + ": " + playerName + " (" + numberPlayer +  ")"
    teamlist.appendChild(playerItem)
    
    document.getElementById("position").value = ""
    document.getElementById("name-player").value = ""
    document.getElementById("number-player").value = ""
 }
}

function removePlayer(){
    const number = document.getElementById("numberToRemove").value
    const playerToRemove = document.getElementById("player-" + number)

    const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + " ?")

    if(confirmation){
        document.getElementById("team-list").removeChild(playerToRemove)
        document.getElementById("numberToRemove").value = ""
    }


}