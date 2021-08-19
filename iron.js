function escolha(){ 
    var escolha = ""
            while (escolha != 1 && escolha != 2) {
              escolha = prompt("1 - Recusar de desenvolver o missel. \n 2 - Aceitar a desenvolver, e solicitar ferramentas e insumos")
            
            if (escolha == 1) {
            
              window.location.href = "gameover1.html"
            
            } else if (escolha == 2) {
            
              window.location.href = "iron2.html"
            }
  
            else {alert('Escolha incorreta')} 
            }
        }
