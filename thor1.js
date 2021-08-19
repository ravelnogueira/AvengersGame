function escolha(){ 
  var escolha = ""
          while (escolha != 1 && escolha != 2) {
            escolha = prompt("1 - Enfrentar diretamente o destruidor  \n 2 - Evacuar a cidade")
          
          if (escolha == 1) {
          
            window.location.href = "gameover.html"
          
          } else if (escolha == 2) {
          
            window.location.href = "thor2.html"
          }
          else {alert('Escolha incorreta')} 
          }
      }
