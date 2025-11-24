const erroNome = function () {
    const nome = document.getElementById("nome")
    const erroNome = document.getElementById("erroNome")

    if (nome.value == "" || nome.value.length < 3) {
        erroNome.textContent = "Introduza o seu nome completo"
        nome.style.border = "1px solid red"
        return false
    } else {
        erroNome.textContent = ""
        nome.style.border = "0"
        return true
    }
}

const erroEmail = function () {
    const email = document.getElementById("email")
    const erroEmail = document.getElementById("erroEmail")

    const emailDominio = email.value.split('@')
    
    let dominio = []
    if (emailDominio.length == 2) {
        dominio = emailDominio[1].split('.')
    }

    if (email.value == "" || emailDominio.length != 2 || dominio.length != 2) {
        erroEmail.textContent = "Email inválido"
        email.style.border = "1px solid red"
        return false
    } else {
        erroEmail.textContent = ""
        email.style.border = "0"
        return true
    }
}

const erroTelemovel = function () {
    const telemovel = document.getElementById("telemovel")
    const erroTelemovel = document.getElementById("erroTelemovel")

    if (telemovel.value == "" ||  telemovel.value.length != 9) {
        erroTelemovel.textContent = "Número de Telemóvel inválido"
        telemovel.style.border = "1px solid red"
        return false
    } else {
        erroTelemovel.textContent = ""
        telemovel.style.border = "0"
        return true
    }
}

const erroOpcao = function () {
    const opcao = document.getElementById("opcao")
    const erroOpcao = document.getElementById("erroOpcao")

    if (opcao.value == "") {
        erroOpcao.textContent = "Deve selecionar um produto"
        opcao.style.border = "1px solid red"
        return false
    } else {
        erroOpcao.textContent = ""
        opcao.style.border = "0"
        return true
    }
}

const erroQuantidade = function () {
    const quantidade = document.getElementById("quantidade")
    const erroQuantidade = document.getElementById("erroQuantidade")

    if (Number(quantidade.value) <= 0) {
        erroQuantidade.textContent = "Quantidade inválida"
        quantidade.style.border = "1px solid red"
        return false
    } else {
        erroQuantidade.textContent = ""
        quantidade.style.border = "0"
        return true
    }
}

const erroData = function () {
    const data = document.getElementById("data")
    const erroData = document.getElementById("erroData")
    let hoje = new Date()
    hoje.setHours(0)
    hoje.setMinutes(0)
    hoje.setSeconds(0)

    console.log("hoje", hoje);
    console.log("vdate", data.valueAsDate)
    
    if (data.valueAsDate < hoje) {
        erroData.textContent = "Data deve ser atual ou posterior"
        data.style.border = "1px solid red"
        return false
    } else {
        erroData.textContent = ""
        data.style.border = "0"
        return true
    }
}

const erroTermos = function () {
    const termos = document.getElementById("termos")
    const erroTermos = document.getElementById("erroTermos")

    if (termos.checked == false) {
        erroTermos.textContent = "Tem de aceitar os termos e condições"
        termos.style.border = "1px solid red"
        return false
    } else {
        erroTermos.textContent = ""
        termos.style.border = "1px solid black"
        return true
    }
}

const validacoes = [erroNome, erroEmail, erroTelemovel, erroOpcao, erroQuantidade, erroData, erroTermos]

document.getElementById("form").addEventListener('submit', function(event) {
    event.preventDefault();
    
    const form = document.querySelector('form')
    
    let erro = false

    validacoes.forEach((validacao) => {
        const resultado = validacao()
        if (resultado == false) {
            erro = true
        }
    })
    if (!erro) {
        alert("Encomenda registada com sucesso! Entraremos em contacto em breve.")
        form.reset()
    }
})

document.getElementById('botaoAnterior').addEventListener('click', (event) => {
    event.preventDefault()
    window.location.href = "index.html"
})