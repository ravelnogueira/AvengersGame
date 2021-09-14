function escolha(){ 
    var escolha = ""
            while (escolha != 1 && escolha != 2) {
              escolha = prompt("1- Se despedir de Peggy \n 2 -Ligar para o comando central")
            
            if (escolha == 1) {
            
              window.location.href = "capitao3.html"
            
            } else if (escolha == 2) {
            
              window.location.href = "gameover1.html"
            }
  
            else {alert('Escolha incorreta')} 
            }
        }

