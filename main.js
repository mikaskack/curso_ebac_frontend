$(document).ready(function() {
//    $('#nome-tarefa').click(function() {
//        $('.lista-tarefas').slideDown();
//    })

    $('.cadastrar-tarefa').on('submit', function(e) {
        e.preventDefault();
        const novoInput = $('#nome-tarefa').val();
        const novoItem = `<li>${novoInput}</li>`;

        $('.lista-tarefas').slideDown();

        $('ul').append(novoItem);
        $('li').css({"cursor":"pointer"})

        $('#nome-tarefa').val('');
    })

    $('ul').on('click', 'li', function() {
        $(this).css({"text-decoration": "line-through"});
    })
})