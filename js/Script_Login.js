function validateForm() {
    let user = document.getElementById('username').value;// variavel USER recebe valor do campo usuario
    let pass = document.getElementById('password').value;// variavel PASS recebe valor do campo Senha
    let MensagemErro = document.getElementById('error-message');

    // Simples validação para fins educacionais
    if (user === 'admin' && pass === 'admin') {
        alert('Login bem-sucedido!');
        window.location.href="Principal.html";
        MensagemErro.innerHTML = '';
    } else {
       MensagemErro.innerHTML = 'Credenciais inválidas. Tente novamente.';
    }
}