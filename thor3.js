function escolha(){ 
    var escolha = ""
            while (escolha != 1 && escolha != 2) {
              escolha = prompt("1 - Enfrentar o destruidor \n 2 - Ir diretamente para Asgard, deixando o destruidor em Mindgard")
            
            if (escolha == 1) {
            
              window.location.href = "thor4.html"
            
            } else if (escolha == 2) {
            
              window.location.href = "gameover.html"
            }
  
            else {alert('Escolha incorreta')} 
            }
        }
