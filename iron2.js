var escolher ;
while (true) {
    escolher =prompt("1- Uma armadura armada e voadora // 2- Tanque de guerra")

    if (escolher ==2 ) {
        
        location.replace ('gameover1.html')
        
        break
    }       

    else if (escolher ==1 ) {
         break
    }

    else {
        alert("Você digitou errado")        
    }

}   

