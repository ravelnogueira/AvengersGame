var escolher ;
while (true) {
    escolher =prompt("1 -Se despedir de Peggy // 2- Ligar para o comando central")
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
