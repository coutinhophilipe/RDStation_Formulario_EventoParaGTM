# RDStation_ValidacaoForm

Script para enviar ao Google Tag Manager um evento após a confirmação do formulário enviado no RD Station.

Implantação:

Na RD Station:
Passo 1: Ir na edição avançada, dentro da Landing Page no RD Station, e escolher a opção JavaScript em BODY.
Passo 2: Colar o script inteiro entre as tags <script> </script>.

No Google Tag Manager:
Passo 3: Criar um acionador a partir de um evento personalizado;
Passo 4: Incluir o nome do evento como FormularioEnviado.

O acionador funcionará a partir do momento que o formulário, dentro da LP da RD Station, for enviado.
Caso, o formulário tenha campos obrigatórios e os mesmos não sejam preenchidos, não será acionado.
