if(document.location.href.includes('LIKEDINTERESTS')){
    window.onload = function(){
        setTimeout(()=>{
            var allCheckbox = document.querySelectorAll("[name='comet_activity_log_select_all_checkbox']")[0] // Clicar em checkbox 'Tudo'
            allCheckbox.click()
                setTimeout(()=>{
                    var removeButton = document.querySelectorAll("[aria-label='Remover']")[0] // Clicar no button 'Remover'
                    removeButton.click()
                    setTimeout(()=>{
                        var removeConfirm = [...document.querySelectorAll("[aria-label='Remover interação?']")[0].children[0].children[0].querySelectorAll('span')].find(el => el.textContent == 'Remover'); // Clicar na confirmação 'Remover'
                        removeConfirm.click()
                        // Selecionar o elemento alvo
                        const elementoAlvo = document.querySelectorAll("[aria-label='Item do registo de atividade']")[0];
                        // Criar uma função para observar as mudanças no elemento
                        function observarMudancas() {
                            // Criar um observador de mutação
                            const observer = new MutationObserver(function(mutations) {
                                mutations.forEach(function(mutation) {
                                    // Verificar se a mensagem "Nada para mostrar" aparece
                                    const spanNadaParaMostrar = [...elementoAlvo.querySelectorAll('span')].find(el => el.textContent === 'Nada para mostrar');
                                    if(spanNadaParaMostrar) {
                                        location.reload()
                                    }
                                    });
                                });
                            // Configurar e iniciar a observação de mutação
                            const config = { childList: true, subtree: true };
                            observer.observe(elementoAlvo, config);
                        };
                        observarMudancas();
                    },5000)
                },5000)
        },5000)
    };
};