var escolher ;
while (true) {
    escolher =prompt("1 - Enfretar Loki com todas as forças // 2 - Se oferecer no lugar das pessoas da terra")

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
