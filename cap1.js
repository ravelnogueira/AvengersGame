function escolha(){ 
    var escolha = ""
            while (escolha != 1 && escolha != 2) {
              escolha = prompt("1 - Apertar o botão de autodestruição \n 2 - Tentar pousar no Ártico")
            
            if (escolha == 1) {
            
              window.location.href = "gameover1.html"
            
            } else if (escolha == 2) {
            
              window.location.href = "capitao2.html"
            }
  
            else {alert('Escolha incorreta')} 
            }
        }
