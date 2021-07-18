const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let nome = document.getElementById("name-input").value;
    let email = document.getElementById("email-input").value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData)

    let content = document.getElementById("content")

    let pronto = `<p>Ficamos felizes por você ter feito </p>
                <p> seu cadastro com a gente \o/</p>
  `
    setTimeout(() => {
        content.innerHTML = pronto
    }, 1000)

})
