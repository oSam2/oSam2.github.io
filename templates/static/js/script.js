function taskBtn() {
    var a = document.getElementsByClassName("task-btn");
    console.log('Botão task')
}

  
function homeBtn() {
    document.getElementsByClassName("home-btn");

    console.log('Botão home')
}


function backBtn() {
    document.getElementsByClassName("back-btn");
    console.log('Botão back')
}


var timeDisplay = document.getElementById("time");

function refreshTime() {
  var dateString = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo", hour: '2-digit', minute: '2-digit'});
  var formattedString = dateString.replace(", ", " - ", "date");
  timeDisplay.innerHTML = formattedString;
  
}

setInterval(refreshTime, 1000);