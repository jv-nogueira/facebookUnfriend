
document.addEventListener("keydown", function(event) {
    
    fetch(chrome.runtime.getURL('urls.txt'))
    .then(response => response.text())
    .then(permitidosURL => {
    var standardMessage = "\n\nSupport: jvnogueira2010@gmail.com";
    if(document.location.href.includes('friends')){
        if (event.keyCode === 113) {
            var question = prompt("Digite no campo abaixo a quantidade de pessoas que o bot vai remover dos amigos:"+
            standardMessage)
        }
    };
    if(question > 0){
        var questionTemp = prompt("Digite no campo abaixo quantos segundos quer que dure cada ciclo de intervalo de tempo para o unfollow. Lembrando que quanto maior o intervalo de tempo, mais seguidores o bot vai remover da lista de amigos sem ser impedido pelo instagram."+
        standardMessage)
        if(!isNaN(questionTemp) && questionTemp > 10){
            var answerTemp = questionTemp/2 // Pega a resposta do prompt e divide por 2 para dividir igualmente os segundos entre os intervalos
            var index=0
            var contadorUnfriend=0
            var arrayArmazenarNameAndURL = [];
            percorrer()
            function percorrer(){

                var lastIndex = document.querySelectorAll('[data-pagelet="ProfileAppSection_0"]')[0].children[0].children[0].children[0].children[0].children[2].children.length -2 // Referencia o last index da lista de perfis

                var lastElementIndex = document.querySelectorAll('[data-pagelet="ProfileAppSection_0"]')[0].children[0].children[0].children[0].children[0].children[2].children[lastIndex] // Visualiza o last element do index da lista de perfis


                
                // var removeConfirm = document.querySelectorAll("[role='dialog']")[0].children[0].children[0].children[0].children[2].children[0].children[0].children[0].children[0].children[0].children[0] // Clica no botão confirmar do pop-up

                var profileReference = document.querySelectorAll('[data-pagelet="ProfileAppSection_0"]')[0].children[0].children[0].children[0].children[0].children[2].children[index] // Referencia o perfil
                var referenceProfileURL = profileReference.children[1].children[0].children[0]
                var referenceGetName = profileReference.children[1].children[0].children[0].children[0]

 
                if(index>1){
                    var viewProfileSub2 = document.querySelectorAll('[data-pagelet="ProfileAppSection_0"]')[0].children[0].children[0].children[0].children[0].children[2].children[index-2] // Rola a página para que o elemento fique vísivel 
                    viewProfileSub2.scrollIntoView()
                }; 


                if(referenceProfileURL.href != undefined){
                    var profileURL = referenceProfileURL.href // Retorna o URL do perfil de acordo com o index
                    var getName = referenceGetName.innerHTML
                    var getNameAndURL = {getName, profileURL}
                
                    if(!permitidosURL.includes(profileURL)){
                        var limiteContador = question;
                        if(contadorUnfriend < limiteContador){ // Limite de perfis que o bot vai remover da lista de amigos
                            arrayArmazenarNameAndURL.push(getNameAndURL)
                            var buttonUnfriend = profileReference.children[2].children[0].children[0].children[0] // Clica no três pontinhos
                                buttonUnfriend.click()
                                setTimeout(() => {
                                    var removeFriend = [...document.querySelectorAll("[role='menuitem']")].find(el => el.textContent == 'Remover amizade') // Clica na opção 'Remover amizade' da lista
                                    removeFriend.click()
                                    contadorUnfriend++
                                    index++
                                    percorrer()
                                },getRandomSeconds(answerTemp))
                        }else{
                            setTimeout(() => {
                            var removeWhiteSpace = limiteContador.replace(/\s/g, '')
                            var singular = "" 
                            var plural = ""
                            if(limiteContador > 1){
                                plural = "s"
                            }else{
                                singular = ""
                            };
                            var questionFinal = confirm("Chegou ao limite de "+removeWhiteSpace+" pessoa"+singular+plural+" que o bot removeu da lista de amigos!\n\n"+
                            "Deseja a lista com as pessoas que o bot removeu da lista de amigos? Se sim, clique em 'Ok' ou aperte 'Enter' para o download do arquivo 'unfriendList.txt'"+
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
                                link.download = "unfriendList.txt";

                                // Adicionar o link à página e clicar automaticamente para iniciar o download
                                document.body.appendChild(link);
                                link.click();

                                // Remover o link da página
                                document.body.removeChild(link);
                            }
                            },getRandomSeconds(answerTemp))
                        };
                        
                    }else if(index < lastIndex){
                        setTimeout(() => {
                        index++
                        percorrer()
                    },getRandomSeconds(0.5))
                    }else{
                        setTimeout(() => {
                            lastElementIndex.scrollIntoView()
                            setTimeout(() => {
                                percorrer()
                            },getRandomSeconds(1))
                        },getRandomSeconds(1))
                    }
                }else if(index < lastIndex){
                        setTimeout(() => {
                        index++
                        percorrer()
                    },getRandomSeconds(1))
                    }else{
                        setTimeout(() => {
                            lastElementIndex.scrollIntoView()
                            setTimeout(() => {
                                percorrer()
                            },getRandomSeconds(1))
                        },getRandomSeconds(1))
                    };
                    
            }
        }else if(questionTemp <= 10){
            alert('Digite um número acima de 10!'+
            standardMessage)
        }else if(typeof questionTemp == 'string'){
            alert('Digite apenas números!'+
            standardMessage)
        }; 
    }else if(typeof question == 'string' && question != 0){
            alert('Digite apenas números!'+
            standardMessage)
        }else if(question == 0){
            alert('Digite um número acima de 0!'+
            standardMessage)
        }; 
    

function getRandomSeconds(sum){
    let sec222 = Math.random() * 4 + sum; // Multiplica um random number e soma 
    sec222 =  parseFloat(sec222.toFixed(3))*1000; // Diminui para 3 casas decimais, converte de string para number e multiplica por 1000 que corresponde a 1 segundo
    return sec222; // retorna o resultado aleatorio em segundos 
};
})
});
