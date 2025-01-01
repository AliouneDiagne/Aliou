document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const responseMessage = document.getElementById('response-message');

  if (!name || !email || !message) {
    responseMessage.textContent = "Tutti i campi sono obbligatori.";
    responseMessage.style.color = "red";
  } else if (!validateEmail(email)) {
    responseMessage.textContent = "Inserisci un'email valida.";
    responseMessage.style.color = "red";
  } else {
    responseMessage.textContent = "Grazie! Ti contatterò presto.";
    responseMessage.style.color = "green";
    document.getElementById('contact-form').reset();
  }
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}