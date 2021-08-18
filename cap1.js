var escolher ;
while (true) {
    escolher =prompt("1 - Apertar o botão de autodestruição // 2 - Tentar pousar no Ártico")
    if (escolher ==1 ) {
        
        location.replace ('gameover1.html')
        
        break
    }       

    else if (escolher ==2 ) {
         break
    }

    else {
        alert("Você digitou errado")        
    }
}
