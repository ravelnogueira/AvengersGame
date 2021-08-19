function escolha(){ 
    var escolha = ""
            while (escolha != 1 && escolha != 2) {
              escolha = prompt("1 - Pular de paraquedas e garantir a dança \n 2- Tentar suavizar o pouso")
            
            if (escolha == 1) {
            
              window.location.href = "gameover.html"
            
            } else if (escolha == 2) {
            
              window.location.href = "capitao4.html"
            }
  
            else {alert('Escolha incorreta')} 
            }
        }
