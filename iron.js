var escolher ;
while (true) {
    escolher =prompt("1 - Recusar de desenvolver o missel // 2 - Aceitar a desenvolver, e solicitar ferramentas e materias belícos")

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
