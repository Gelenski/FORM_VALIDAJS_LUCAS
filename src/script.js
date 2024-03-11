//Declarando as variáveis
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const cpfInput = document.querySelector("#cpf");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageInput = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (nameInput.value === "") {
    alert("Por favor, preencha seu nome");
    return;
  }

  if (cpfInput.value === "" || !validateCpf(cpfInput.value)) {
    alert("Por favor, preencha seu cpf");
    return;
  }

  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    alert("Por favor, preencha seu e-mail");
    return;
  }

  if (!validatePassword(passwordInput.value, 8)) {
    alert("Por favor, preencha sua senha corretamente");
    return;
  }

  if (messageInput.value === "") {
    alert("Por favor, preencha com a sua mensagem");
  }
  form.submit();
});

//Padrão -- usuario12@servico.com
function isEmailValid(email) {
  const emailRegex = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+.[a-zA-Z]{2,0}/);
  if (emailRegex.test(email)) {
    return true;
  }
  return false;
}

function validatePassword(password, minDigits) {
  if (password.length >= minDigits) {
    return true;
  }
  return false;
}

//Padrão -- xxx.xxx.xxx--xx
function validateCpf(cpf) {
  const cpfRegex = new RegExp(
    /^([0-9]){3}\.([0-9]){3}\.([0-9]){3}-([0-9]){2}$/
  );
  if (cpfRegex.test(cpf)) {
    return true;
  }
  return false;
}
