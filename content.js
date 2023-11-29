


 var i = 0;
 document.addEventListener("keydown", function(event) {
    if (event.keyCode === 113) { // Pressionar tecla F2
        console.log('Script chamado pelo F2')
        var mensagem = confirm("Deseja iniciar o script?")
        if (mensagem){
            console.log('Script confirmado')
        percorrerCommits()
function percorrerCommits() {
    console.log('Script iniciado')
    if(i < 10){
        console.log("contagem: "+i)
// Selecione o índice do comentário específico
var userCommit = $("[aria-label='Conteúdo de grupo']").children[0].children[0].children[3].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[7].children[0].children[0].children[3].children[0].children[0].children[1].children[3].children[i];

setTimeout(() =>{ // Segunda
// Verifique se o comentário não foi curtido
try {
    if (userCommit.children[0].children[1].children[1].children[1].children[0].children[0].children[0].children[0].children[0].children[1].ariaLabel == 'Reagir') {
        console.log('O comentário com resposta foi curtido')
        var url = userCommit.children[0].children[1].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].href;

        // Abra o perfil em uma nova guia
        window.open(url);

        // Curtir o comentário com respostas
        userCommit.children[0].children[1].children[1].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].click();
    }else (console.log('O comentário com resposta não foi curtido'))
} catch (error) {
    console.error('Erro na primeira condição:', error);
}
},5000) // Segunda

setTimeout(() =>{ // Terceira
// Verifique a próxima condição
try {
    if (userCommit.children[0].children[0].children[1].children[1].children[0].children[0].children[0].children[0].children[0].children[1].ariaLabel == 'Reagir') {
        console.log('O comentário sem resposta foi curtido')
        var url = userCommit.children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].href;

        // Abra o perfil em uma nova guia
        window.open(url);

        // Curtir o comentário sem respostas
        userCommit.children[0].children[0].children[1].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].click();
    } else (console.log('O comentário sem resposta não foi curtido'))
} catch (error) {
    console.error('Erro na segunda condição:', error);
}
},5000) // Terceira
    }else(console.log('Chegou ao limite'))
}
    }else{console.log('Script cancelado')}
 }else{console.log('Script não chamado pelo F2')}})

