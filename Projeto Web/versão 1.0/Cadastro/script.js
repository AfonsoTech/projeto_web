// 📦 SISTEMA DE CADASTRO - VERSÃO 1.0
// 1)DECLARAR VARIAVEIS GLOBAIS
const MAX_USUARIOS = 2; 
let numero_usuarios_cadastrados = 0; 
// 2) REFERENCIAR ELEMENTOS HTML
const form = document.getElementById('formCadastro');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');
const mensagemDiv = document.getElementById('mensagem');

// 3)DECALAR FUNÇÃO DE SAIDA
function exibirMensagem(texto, tipo) {
    mensagemDiv.textContent = texto;
    mensagemDiv.className = ''; // Limpa classes anteriores
    mensagemDiv.classList.add(tipo); // Adiciona classe 'sucesso' ou 'erro'
    mensagemDiv.style.display = 'block';
    console.log(`[STATUS ${tipo.toUpperCase()}]: ${texto}`); // Log no console
}
// 4)------- FUNÇAO PRINCIPAL MAIN -----------

// 4.1 ADICIONAR UM OUVINTE DE EVENTO
form.addEventListener('submit', function(event) {
    // 4.2 IMPEDIR O ENVIO PADRÃO
    event.preventDefault(); 
    // 4.3 CAPTURAR OS DADOS
    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();
    // 4.4 VERIFICAR O LIMITE DE USUÁRIOS
    if (numero_usuarios_cadastrados >= MAX_USUARIOS) {
        exibirMensagem(`Limite de ${MAX_USUARIOS} usuários atingido.`, 'erro');
        return; // Sai da função
    }
    // 4.5 VALIDAR OS DADOS
    if (email === "" || senha === "") {
        exibirMensagem("Email e Senha não podem estar vazios.", 'erro');
        return;
    }
    if (senha.length < 6) {
        exibirMensagem("A senha deve ter no mínimo 6 caracteres.", 'erro');
        return;
    }
    // 4.6 SIMULAR CADASTRO
    console.log(`✅ Sucesso! Cadastrando ${email}...`);
    // 4.7 ATUALIZAR A CONTAGEM
    numero_usuarios_cadastrados++; 
    // 4.8 ATUALIZAR HTML
    exibirMensagem(`Cadastro realizado com sucesso! Total de usuários: ${numero_usuarios_cadastrados}`, 'sucesso');
    setTimeout(function() {
        window.location.href = 'file:///home/afonso/sandbox/Projeto%20Web/vers%C3%A3o%201.0/Confirma%C3%A7%C3%A3o/index.html';


}, 1500);
});
