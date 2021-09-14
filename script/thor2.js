function escolha(){ 
  var escolha = ""
          while (escolha != 1 && escolha != 2) {
            escolha = prompt("1 - Enfretar Loki com todas as forças \n 2 - Se oferecer no lugar das pessoas da terra")
          
          if (escolha == 1) {
          
            window.location.href = "gameover1.html"
          
          } else if (escolha == 2) {
          
            window.location.href = "thor3.html"
          }

          else {alert('Escolha incorreta')} 
          }
      }
