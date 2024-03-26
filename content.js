
document.addEventListener("keydown", function(event){
    fetch(chrome.runtime.getURL('urls.txt'))
    .then(response => response.text())
    .then(permitidosURL => {
    var standardMessage = "\n\nSupport: jvnogueira2010@gmail.com";
    if(document.location.href.includes('following')&&document.location.href.includes('facebook')){
        if (event.keyCode === 113) {
            var questionLimiteContador = prompt("Digite no campo abaixo a quantidade de seguidores que o bot vai deixar de seguir da lista que está seguindo:"+
            standardMessage)
        };
    };
    if(questionLimiteContador > 0){
        var questionTemp = prompt("Digite no campo abaixo quantos segundos quer que dure cada ciclo de intervalo de tempo para o unfollow. Lembrando que quanto maior o intervalo de tempo, mais seguidores o bot vai remover da lista de seguindo sem ser impedido pelo facebook."+
        standardMessage)
        if(!isNaN(questionTemp) && questionTemp > 0){
            var index=0
            var contadorUnfriend=0
            var arrayArmazenarNameAndURL = [];
            percorrer()
            function percorrer(){
                var lastIndex = document.querySelectorAll('[data-pagelet="ProfileAppSection_0"]')[0].children[0].children[0].children[0].children[0].children[2].children.length -4 // Referencia o last index da lista de perfis
                var lastElementIndex = document.querySelectorAll('[data-pagelet="ProfileAppSection_0"]')[0].children[0].children[0].children[0].children[0].children[2].children[lastIndex] // Visualiza o last element do index da lista de perfis
                var profileReference = document.querySelectorAll("[data-pagelet='ProfileAppSection_0']")[0].children[0].children[0].children[0].children[0].children[2].children // Referencia o perfil
                var referenceProfileURL = profileReference[index].children[1].children[0].children[0]
                var referenceGetName = profileReference[index].children[1].children[0].children[0].children[0]
                if(referenceProfileURL.href != undefined){
                    if(!permitidosURL.includes(referenceProfileURL.href)){
                        if(index>4){
                            profileReference[index-3].scrollIntoView()
                        };
                        if(contadorUnfriend < questionLimiteContador){ // Limite de perfis que o bot vai remover da lista de amigos
                            const mouseOverEvent = new MouseEvent('mouseover', { // Editar 'mouseover' para abrir e 'mouseout' para fechar o pop-up
                                bubbles: true,
                                cancelable: true,
                                view: window
                            });
                            referenceGetName.dispatchEvent(mouseOverEvent);
                            setTimeout(() => {
                                if(document.querySelectorAll("[aria-label='A seguir']")[0]){
                                    if(document.querySelectorAll("[aria-label='A seguir']")[0]){
                                    document.querySelectorAll("[aria-label='A seguir']")[0].click() // Clicar para abrir opções: 'Favoritos' e 'Não seguir'
                                    }else{
                                        document.querySelectorAll("[aria-label='Favoritos']")[0].click() // Clicar para abrir opções: 'Favoritos' e 'Não seguir'
                                    }
                                    setTimeout(()=>{
                                        if(document.querySelectorAll("[role='menuitem']")[1]){
                                            document.querySelectorAll("[role='menuitem']")[1].click() // Clicar na opção 'Não seguir'
                                            setTimeout(() => {
                                                const mouseOutEvent = new MouseEvent('mouseout', { // Editar 'mouseover' para abrir e 'mouseout' para fechar o pop-up
                                                    bubbles: true,
                                                    cancelable: true,
                                                    view: window
                                                });
                                                referenceGetName.dispatchEvent(mouseOutEvent);
                                                contadorUnfriend++;
                                                index++;
                                                percorrer();
                                            }, getRandomSeconds(questionTemp/3))
                                        }else{
                                            [...document.querySelectorAll('span')].find(el => el.textContent == 'Não vais ver as publicações desta Página no teu feed.').click(); // Clicar em 'Não seguir'
                                            setTimeout(() => {
                                                [...document.querySelectorAll('span')].find(el => el.textContent == 'Conteúdos').click(); // Clicar para abrir Notificações/Conteúdos
                                                setTimeout(() => {
                                                    [...document.querySelectorAll('span')].find(el => el.textContent == 'Nenhuma notificação de publicações desta Página').click(); // Clicar em 'Desligar'
                                                    setTimeout(() => {
                                                        [...document.querySelectorAll('span')].find(el => el.textContent == 'Vídeo').click(); // Clicar para abrir Notificações/Vídeo
                                                        setTimeout(() => {
                                                            [...document.querySelectorAll('span')].find(el => el.textContent == 'Nenhuma notificação de vídeo desta Página').click(); // Clicar em 'Desligar'
                                                            setTimeout(() => {
                                                                [...document.querySelectorAll('span')].find(el => el.textContent == 'Vídeo em direto').click(); // Clicar para abrir Notificações/Vídeo em direto
                                                                setTimeout(() => {
                                                                    [...document.querySelectorAll('span')].find(el => el.textContent == 'Nenhuma notificação de diretos desta Página').click(); // Clicar em 'Desligar'
                                                                    setTimeout(() => {
                                                                        document.querySelectorAll("[aria-label='Atualizar']")[0].click(); // Por fim, clicar no botão 'Atualizar'
                                                                        const mouseOutEvent = new MouseEvent('mouseout', { // Editar 'mouseover' para abrir e 'mouseout' para fechar o pop-up
                                                                            bubbles: true,
                                                                            cancelable: true,
                                                                            view: window
                                                                        });
                                                                        referenceGetName.dispatchEvent(mouseOutEvent);
                                                                        contadorUnfriend++;
                                                                        index++;
                                                                        percorrer();
                                                                    }, getRandomSeconds(questionTemp/3))
                                                                }, getRandomSeconds(questionTemp/3))
                                                            }, getRandomSeconds(questionTemp/3))
                                                        }, getRandomSeconds(questionTemp/3))
                                                    }, getRandomSeconds(questionTemp/3))
                                                }, getRandomSeconds(questionTemp/3))
                                            }, getRandomSeconds(questionTemp/3))
                                        };
                                    }, getRandomSeconds(questionTemp/3))
                                    var profileURL = referenceProfileURL.href // Retorna o URL do perfil de acordo com o index
                                    var getName = referenceGetName.innerHTML
                                    var getNameAndURL = {getName, profileURL}
                                    arrayArmazenarNameAndURL.push(getNameAndURL);
                                }else if(document.querySelectorAll("[aria-label='Favoritos']")[0]){
                                    const mouseOutEvent = new MouseEvent('mouseout', { // Editar 'mouseover' para abrir e 'mouseout' para fechar o pop-up
                                        bubbles: true,
                                        cancelable: true,
                                        view: window
                                    });
                                    referenceGetName.dispatchEvent(mouseOutEvent);
                                    index++;
                                    percorrer();
                                }else{
                                    document.querySelectorAll("[aria-label='Gostei']")[0].click(); // Clicar para abrir as definições
                                    setTimeout(() => {
                                        [...document.querySelectorAll('span')].find(el => el.textContent == 'Conteúdos').click(); // Clicar para abrir Notificações/Conteúdos
                                        setTimeout(() => {
                                            [...document.querySelectorAll('span')].find(el => el.textContent == 'Nenhuma notificação de publicações desta Página').click(); // Clicar em 'Desligar'
                                            setTimeout(() => {
                                                document.querySelectorAll("[aria-label='Não gosto']")[0].click(); // Clicar no botão 'Não gostar'
                                                setTimeout(() => {
                                                    document.querySelectorAll("[aria-label='Atualizar']")[0].click(); // Por fim, clicar no botão 'Atualizar'
                                                    const mouseOutEvent = new MouseEvent('mouseout', { // Editar 'mouseover' para abrir e 'mouseout' para fechar o pop-up
                                                        bubbles: true,
                                                        cancelable: true,
                                                        view: window
                                                    });
                                                    referenceGetName.dispatchEvent(mouseOutEvent);
                                                    contadorUnfriend++;
                                                    index++;
                                                    percorrer();
                                                }, getRandomSeconds(questionTemp/3))
                                            }, getRandomSeconds(questionTemp/3))
                                        }, getRandomSeconds(questionTemp/3))
                                    }, getRandomSeconds(questionTemp/3))
                                    var profileURL = referenceProfileURL.href // Retorna o URL do perfil de acordo com o index
                                    var getName = referenceGetName.innerHTML
                                    var getNameAndURL = {getName, profileURL}
                                    arrayArmazenarNameAndURL.push(getNameAndURL);
                                }
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
                            var questionFinal = confirm("Chegou ao limite de "+removeWhiteSpace+" seguidores"+singular+plural+" que o bot removeu da lista de seguindo!\n\n"+
                            "Deseja a lista com os perfis dos seguidores que o bot removeu da lista de seguindo? Se sim, clique em 'Ok' ou aperte 'Enter' para o download do arquivo 'facebookUnfollowList.txt'"+
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
                                link.download = "facebookUnfollowList.txt";
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





