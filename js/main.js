$(document).ready(function () {
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    })

    $('#telefone').mask('(00) 0 0000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00.000-000')

    $('form').validate ({
        rules: {
            nome: "required",
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 16
            },
            cpf: {
                required: true,
                minlength: 14
            },
            endereco: "required",
            cep: "required"
        },
        
        messages: {
            nome: 'Por favor, insira seu nome',
            email: {
                required: 'Por favor, insira seu e-mail',
                email: 'Por favor, insira um e-mail válido'
            },
            telefone: {
                required: 'Por favor, insira seu telefone',
                minlength: 'Insira um número de telefone válido'
            },
            cpf: {
                required: 'Por favor, insira seu cpf',
                minlength: 'Insira um número de telefone válido'
            },
            endereco: 'Por favor, insira seu endereço completo',
            cep: 'Por favor, insira seu CEP'
        },

        submitHandler: function(form) {
            alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
            form.submit();
        },

        invalidHandler: function (form, validator) {
            alert("Por favor, preencha os campos para prosseguir com a compra!");
        }
    })
})