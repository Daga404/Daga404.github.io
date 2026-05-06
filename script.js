const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async function(e) {
  e.preventDefault();

  const data = new FormData(form);

  try {
    const response = await fetch('https://formspree.io/f/xdabzzag', {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      status.className = 'sucesso';
      status.innerHTML = '💌 Mensagem enviada! Entrarei em contato em breve.';
      status.style.display = 'flex';
      form.reset();
    } else {
      status.className = 'erro';
      status.innerHTML = '⚠️ Algo deu errado. Tente novamente.';
      status.style.display = 'flex';
    }
  } catch {
    status.className = 'erro';
    status.innerHTML = '⚠️ Erro de conexão. Verifique sua internet.';
    status.style.display = 'flex';
  }
});