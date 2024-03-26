
document.addEventListener("keydown", function(event){
    fetch(chrome.runtime.getURL('urls.txt'))
    .then(response => response.text())
    .then(permitidosURL => {
    var standardMessage = "\n\nSupport: jvnogueira2010@gmail.com";
    if(document.location.href.includes('friends'&&'facebook'&&'requests')){
        if (event.keyCode === 113) {
            var questionLimiteContador = prompt("Digite no campo abaixo a quantidade de seguidores que o bot vai cancelar o pedido de amizade enviado:"+
            standardMessage)
        };
    };
    if(questionLimiteContador > 0){
        var questionTemp = prompt("Digite no campo abaixo quantos segundos quer que dure cada ciclo de intervalo de tempo para cancelar o pedido enviado. Lembrando que quanto maior o intervalo de tempo, mais seguidores o bot vai remover da lista de seguindo sem ser restringido pelo facebook."+
        standardMessage)
        if(!isNaN(questionTemp) && questionTemp > 0){
            var index=1
            var contadorOrderCancel=0
            var arrayArmazenarNameAndURL = [];
            percorrer()
            function percorrer(){
                var profileReference = document.querySelectorAll("[aria-label='Pedidos enviados']")[0].children[2].children[0].children // Referencia o perfil
                var lastIndex = profileReference.length -4 // Referencia o last index da lista de perfis
                var lastElementIndex = profileReference[lastIndex] // Visualiza o last element do index da lista de perfis
                var referenceProfileURL = profileReference[index].children[0].children[0]
                var referenceGetName = profileReference[index].children[0].children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0]
                if(referenceProfileURL.href != undefined){
                    var profileURL = referenceProfileURL.href // Retorna o URL do perfil de acordo com o index
                    var getName = referenceGetName.innerHTML
                    var getNameAndURL = {getName, profileURL}
                    if(!permitidosURL.includes(profileURL)){
                        if(index>4){
                            profileReference[index-3].scrollIntoView()
                        };
                        if(contadorOrderCancel < questionLimiteContador){ // Limite de perfis que o bot vai remover da lista de amigos
                            arrayArmazenarNameAndURL.push(getNameAndURL);
                            profileReference[index].children[0].children[0].children[0].children[1].children[0].children[1].children[0].children[0].children[0].children[0].click()
                            setTimeout(() => {
                                contadorOrderCancel++;
                                index++;
                                percorrer();
                            }, getRandomSeconds(questionTemp/3));                              
                        }else{
                            setTimeout(()=>{
                            var removeWhiteSpace = questionLimiteContador.replace(/\s/g, '')
                            var singular = "" 
                            var plural = ""
                            if(questionLimiteContador > 1){
                                plural = "s"
                            }else{
                                singular = ""
                            };
                            var questionFinal = confirm("Chegou ao limite de "+removeWhiteSpace+"  pessoa"+singular+plural+" que o bot cancelou da lista de pedidos de amizade enviados!\n\n"+
                            "Deseja a lista com o nome e o link do perfil que o bot removeu da lista de pedido de amizade enviados? Se sim, clique em 'Ok' ou aperte 'Enter' para o download do arquivo 'listFacebookCanceledOrder.txt'"+
                            standardMessage)
                            if(questionFinal == true){
                                // Criar o conteúdo do TXT
                                var txtContent = "\uFEFFNome\tURL\n";
                                arrayArmazenarNameAndURL.forEach(function (item) {
                                txtContent += item.getName + "\t" + item.profileURL + "\n";
                                });
                                // Criar um Blob com o conteúdo do TXT
                                var blob = new Blob([txtContent], { type: "text/txt" });
                                // Criar um link para o Blob
                                var link = document.createElement("a");
                                link.href = window.URL.createObjectURL(blob);
                                // Definir o nome do arquivo
                                link.download = "listFacebookCanceledOrder.txt";
                                // Adicionar o link à página e clicar automaticamente para iniciar o download
                                document.body.appendChild(link);
                                link.click();
                                // Remover o link da página
                                document.body.removeChild(link);
                            }
                        },getRandomSeconds(1))
                        };  
                    }else if(index < lastIndex){
                            index++;
                            percorrer();
                    }else{
                            lastElementIndex.scrollIntoView()
                            setTimeout(() => {
                                percorrer()
                            },getRandomSeconds(1))
                    }
                }else if(index < lastIndex){
                        index++
                        percorrer()
                }else{
                        lastElementIndex.scrollIntoView()
                        setTimeout(() => {
                            percorrer()
                        },getRandomSeconds(1))
                };
            }
        }else if(questionTemp == 0){
            alert('Digite um número acima de 0!'+
            standardMessage)
        }else if(typeof questionTemp == 'string'){
            alert('Digite apenas números!'+
            standardMessage)
        }; 
    }else if(typeof questionLimiteContador == 'string' && questionLimiteContador != 0){
            alert('Digite apenas números!'+
            standardMessage)
        }else if(questionLimiteContador == 0){
            alert('Digite um número acima de 0!'+
            standardMessage)
        };

function getRandomSeconds(sum){
    let sec222 = Math.random() + sum; // Multiplica um random number e soma 
    sec222 =  parseFloat(sec222.toFixed(3))*1000; // Diminui para 3 casas decimais, converte de string para number e multiplica por 1000 que corresponde a 1 segundo
    return sec222; // retorna o resultado aleatorio em segundos 
};
})
});





