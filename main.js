const form = document.getElementById('form-agenda');
const imgAgendado = '<img src="./images/agendao 5.png" alt="emoji agendado" />';
const imgNaoAgendado = '<img src="./images/nao agendado.png" alt="emoji nao agendado" />';
const contatos = [];
const numeros = [];

let linhas = '';


form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

});


function adicionaLinha() {
    inputNomeContato = document.getElementById('nome-contato');
    inputNumeroTelefone = document.getElementById('numero-contato');

    contatos.push(inputNomeContato.value);

    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value}</td>`;
    linha += `<td>${inputNumeroTelefone.value >= 11 ? imgAgendado : imgNaoAgendado}</td>`;
    linha += '</tr>';

    linhas += linha;

    
    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}