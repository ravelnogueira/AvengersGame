var escolher ;
while (true) {
    escolher =prompt("1 - Enfrentar diretamente o destruidor // 2 - Evacuar a cidade")

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

