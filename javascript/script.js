const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let data = {
    nome,
    email,
  }
  let convertData = JSON.stringify(data);

  localStorage.setItem('lead', convertData)

  let content = document.getElementById('content')

  let carregando = `<p>Carregando...</p>`

  let pronto = `<p>Ficamos felizes por você ter feito </p>
                <p> seu cadastro com a gente \o/</p>
  `

  content.innerHTML = carregando


  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)

})
