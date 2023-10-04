
// Criando a variável validar e informando que a tag form (html) é o valor dela
let validar = document.querySelector('form');

// Vai acrescentar, na variável "validar", que o evento "submit" aciona a função validação
validar.addEventListener('submit',validacao);

function validacao (event) {

    //Valida se o formulário foi enviado
    if (this.checkValidity()) {
    
        //Envia as variáveis (event e enviou) para o GTM
        window.dataLayer.push({
            'event': 'FormularioEnviado',
            'enviou': 'sim'
        });

    }
};
