document.addEventListener('DOMContentLoaded', function() {
  const formContato = document.getElementById('formContato');
  
  if (formContato) {
    formContato.addEventListener('submit', function(e) {
      e.preventDefault();
      
      let isValid = true;
      
      // Validação do nome
      const nome = document.getElementById('nome');
      const nomeError = nome.nextElementSibling;
      
      if (nome.value.trim() === '') {
        nomeError.textContent = 'Por favor, insira seu nome';
        nomeError.style.display = 'block';
        isValid = false;
      } else {
        nomeError.style.display = 'none';
      }
      
      // Validação do email
      const email = document.getElementById('email');
      const emailError = email.nextElementSibling;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (email.value.trim() === '') {
        emailError.textContent = 'Por favor, insira seu email';
        emailError.style.display = 'block';
        isValid = false;
      } else if (!emailRegex.test(email.value)) {
        emailError.textContent = 'Por favor, insira um email válido';
        emailError.style.display = 'block';
        isValid = false;
      } else {
        emailError.style.display = 'none';
      }
      
      // Validação do assunto
      const assunto = document.getElementById('assunto');
      const assuntoError = assunto.nextElementSibling;
      
      if (assunto.value === '') {
        assuntoError.textContent = 'Por favor, selecione um assunto';
        assuntoError.style.display = 'block';
        isValid = false;
      } else {
        assuntoError.style.display = 'none';
      }
      
      // Validação da mensagem
      const mensagem = document.getElementById('mensagem');
      const mensagemError = mensagem.nextElementSibling;
      
      if (mensagem.value.trim() === '') {
        mensagemError.textContent = 'Por favor, insira sua mensagem';
        mensagemError.style.display = 'block';
        isValid = false;
      } else {
        mensagemError.style.display = 'none';
      }
      
      // Se tudo estiver válido, pode enviar o formulário
      if (isValid) {
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        formContato.reset();
      }
    });
    
    // Validação em tempo real
    const campos = ['nome', 'email', 'assunto', 'mensagem'];
    
    campos.forEach(campoId => {
      const campo = document.getElementById(campoId);
      const campoError = campo.nextElementSibling;
      
      campo.addEventListener('input', function() {
        if (this.value.trim() !== '') {
          campoError.style.display = 'none';
        }
      });
    });
    
    // Validação específica para email em tempo real
    const email = document.getElementById('email');
    const emailError = email.nextElementSibling;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    email.addEventListener('blur', function() {
      if (this.value.trim() !== '' && !emailRegex.test(this.value)) {
        emailError.textContent = 'Por favor, insira um email válido';
        emailError.style.display = 'block';
      }
    });
  }
});