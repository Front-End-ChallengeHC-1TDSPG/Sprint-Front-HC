
document.addEventListener('DOMContentLoaded', function () {
  

  const formCadastro = document.querySelector('form[action="#"]');
  
  if (formCadastro) {
    formCadastro.addEventListener('submit', function (e) {
      e.preventDefault(); // Impede envio se houver erros

      limparErros(formCadastro);

      const nome = document.getElementById('nome');
      const cpf = document.getElementById('cpf');
      const email = document.getElementById('email');

      let valido = true;

      if (nome.value.trim() === '') {
        mostrarErro(nome, 'O nome é obrigatório.');
        valido = false;
      }

      if (!validarCPF(cpf.value)) {
        mostrarErro(cpf, 'CPF inválido.');
        valido = false;
      }

      if (!validarEmail(email.value)) {
        mostrarErro(email, 'E-mail inválido.');
        valido = false;
      }

      if (valido) {
        alert('Cadastro realizado com sucesso!');
        formCadastro.reset();
      }
    });
  }


  const formLogin = document.querySelector('form[action="#"]');

  if (formLogin) {
    formLogin.addEventListener('submit', function (e) {
      e.preventDefault();

      limparErros(formLogin);

      const cpfLogin = document.getElementById('cpf-login');
      const telefoneLogin = document.getElementById('telefone-login');

      let valido = true;

      if (!validarCPF(cpfLogin.value)) {
        mostrarErro(cpfLogin, 'CPF inválido.');
        valido = false;
      }

      if (!validarTelefone(telefoneLogin.value)) {
        mostrarErro(telefoneLogin, 'Telefone inválido. Use (XX)XXXXX-XXXX.');
        valido = false;
      }

      if (valido) {
        alert('Login realizado com sucesso!');
        formLogin.reset();
      }
    });
  }


  function mostrarErro(input, mensagem) {
    const divErro = document.createElement('div');
    divErro.className = 'erro';
    divErro.innerText = mensagem;
    input.parentElement.appendChild(divErro);
  }

  function limparErros(form) {
    const erros = form.querySelectorAll('.erro');
    erros.forEach(e => e.remove());
  }

  function validarEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  function validarCPF(cpf) {
    const regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$|^\d{11}$/;
    return regex.test(cpf);
  }

  function validarTelefone(telefone) {
    const regex = /^\(?\d{2}\)?\s?\d{4,5}\-?\d{4}$/;
    return regex.test(telefone);
  }


  const links = document.querySelectorAll('.link a');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      alert(`Navegando para ${link.getAttribute('href')}`);
      window.location.href = link.getAttribute('href');
    });
  });

});
