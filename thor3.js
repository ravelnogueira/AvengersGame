var escolher ;
while (true) {
    escolher =prompt("1 - Enfrentar o destruidor // 2 - Ir diretamente para Asgard, deixando o destruidor em Mindgard")

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

