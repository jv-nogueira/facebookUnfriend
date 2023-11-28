var i = 112;

// Selecione o índice do comentário específico
var userCommit = $("[aria-label='Conteúdo de grupo']").children[0].children[0].children[3].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[7].children[0].children[0].children[3].children[0].children[0].children[1].children[3].children[i];

// Verifique se o comentário não foi curtido
try {
    if (userCommit.children[0].children[1].children[1].children[1].children[0].children[0].children[0].children[0].children[0].children[1].ariaLabel == 'Reagir') {
        var url = userCommit.children[0].children[1].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].href;

        // Abra o perfil em uma nova guia
        window.open(url);

        // Curtir o comentário com respostas
        userCommit.children[0].children[1].children[1].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].click();
    }
} catch (error) {
    console.error('Erro na primeira condição:', error);
}

// Verifique a próxima condição
try {
    if (userCommit.children[0].children[0].children[1].children[1].children[0].children[0].children[0].children[0].children[0].children[1].ariaLabel == 'Reagir') {
        var url = userCommit.children[0].children[0].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].children[0].href;

        // Abra o perfil em uma nova guia
        window.open(url);

        // Curtir o comentário sem respostas
        userCommit.children[0].children[0].children[1].children[1].children[0].children[0].children[0].children[0].children[0].children[0].children[0].click();
    }
} catch (error) {
    console.error('Erro na segunda condição:', error);
}
