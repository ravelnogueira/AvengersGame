var escolher ;
while (true) {
    escolher =prompt("1 - Não deixarei ninguém para trás // 2 - Yinsen deu mole, ele se vira")

    if (escolher ==2 ) {
        
        location.replace ('gameover.html')
        
        break
    }       

    else if (escolher ==1 ) {
         break
    }

    else {
        alert("Você digitou errado")        
    }

}   

