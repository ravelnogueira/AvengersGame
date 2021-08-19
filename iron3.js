function escolha(){ 
    var escolha = ""
            while (escolha != 1 && escolha != 2) {
              escolha = prompt("1 - Não deixarei ninguém para trás \n 2 - Yinsen deu mole, ele se vira")
            
            if (escolha == 1) {
            
              window.location.href = "iron4.html"
            
            } else if (escolha == 2) {
            
              window.location.href = "gameover.html"
            }
  
            else {alert('Escolha incorreta')} 
            }
        }
