function escolha(){ 
    var escolha = ""
            while (escolha != 1 && escolha != 2) {
              escolha = prompt("1- Uma armadura armada e voadora \n 2- Tanque de guerra")
            
            if (escolha == 1) {
            
              window.location.href = "iron3.html"
            
            } else if (escolha == 2) {
            
              window.location.href = "gameover1.html"
            }
  
            else {alert('Escolha incorreta')} 
            }
        }
 
