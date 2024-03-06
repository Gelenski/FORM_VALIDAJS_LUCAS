const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const cpfInput = document.querySelector("#cpf");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector("#job");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (nameInput.value === "") {
    alert("Por favor, preencha seu nome");
    return;
  }
});

if (cpfInput.value === "" || !isCPFValid(cpfInput.value)) {
  alert("Por favor, preencha seu cpf");
  return;
}
