for (var i = 4; i < 1000; i++) {

        var indiceGroupsList = $("[aria-label='Lista de grupos']").children[0].children[3].children[0].children[i] // Os grupos começam do indice 4 em diante
        
        var groupURL = indiceGroupsList.children[0].children[0].children[0].children[0].href
        
        var tituloText = indiceGroupsList.children[0].children[0].children[0].children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].textContent
        
        console.log(groupURL+"\n"+tituloText)
}