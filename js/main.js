$(document).ready(function(){
    // Inicialização do carousel com autoplay
    $('#carousel-imagens').slick({
        autoplay: true
    });

    // Menu hambúrguer com efeito de slide toggle
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    });

    // Máscara para o campo de telefone
    $('#telefone').mask('(00) 00000-0000');

    // Validação do formulário
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome',
            email: 'Por favor, insira um e-mail válido',
            telefone: 'Por favor, insira o seu telefone',
            mensagem: 'Por favor, escreva sua mensagem'
        },
        submitHandler: function(form){
            console.log(form);
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });

    // Rolagem suave ao clicar no botão "Tenho interesse"
    $('.lista-produtos button').click(function(){
        const destino = $('#contato'); 
        
        const nomeProduto = ($(this).parent().find('h3').text());

        $('#produto-interesse').val(nomeVeiculo);

        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 1000);
    });
});
