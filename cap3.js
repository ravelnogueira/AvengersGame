var escolher ;
while (true) {
    escolher =prompt("1 - Pular de paraquedas e garantir a dança // 2- Tentar suavizar o pouso")
    if (escolher ==1 ) {
        
        location.replace ('gameover.html')
        
        break
    }       

    else if (escolher ==2 ) {
         break
    }

    else {
        alert("Você digitou errado")        
    }

}

