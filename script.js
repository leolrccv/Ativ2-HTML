const url = 'https://viacep.com.br/ws/$cep/json/';

function findCEP(){
    var cep = document.getElementById("cep").value;
    var urlWithCEP = url.replaceAll("$cep", cep).replaceAll("-","");
    loadDoc(urlWithCEP);
}

function loadDoc(urlWithCEP){
    this.getJSON(urlWithCEP, function(err, data){
        document.getElementById("logradouro").value = data.logradouro;
        document.getElementById("bairro").value = data.bairro;
        document.getElementById("cidade").value = data.localidade;
        document.getElementById("uf").value = data.uf;
    });
}

var getJSON = function(url, callback){

    var  xhr  = new XMLHttpRequest(); 
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function(){
        var status = xhr.status;
        if (status === 200){
            callback(null,  xhr.response);
        }else{
            callback(status, xhr.response);
        }
    };
    xhr.send();
}

function mostrarDados() {
    let idade = document.getElementById("idade").value;
    if (idade < 18) {
        document.getElementById("menor18").innerHTML = "Não é permitido o cadastro para menores de 18 anos!!"
    }
    else{
        document.getElementById("menor18").innerHTML = null
    
    let salario = document.getElementById("salario").value
    if (salario >10000) {
        document.getElementById("imposto").innerHTML = "Necessário declarar imposto de renda!!"
    }
    else{
        document.getElementById("imposto").innerHTML =null
    }

    let estadoCivil = document.getElementById("estadoCivil").value
    if (estadoCivil.toUpperCase() == "CASADO") {
        window.alert("Necessário enviar documentação do cônjuge")
    }

    let nome = document.getElementById("nome").value
    let telefone = document.getElementById("telefone").value
    let cep = document.getElementById("cep").value
    let logradouro = document.getElementById("logradouro").value
    let bairro = document.getElementById("bairro").value
    let cidade = document.getElementById("cidade").value
    let uf = document.getElementById("uf").value
    let numero = document.getElementById("numero").value

    document.getElementById("dados").innerHTML = `========== DADOS CADASTRADOS ==========<br>
    Nome: ${nome}<br>Telefone: ${telefone}<br>Idade: ${idade}<br>Salario: ${salario}<br>Estado Civil: ${estadoCivil}<br>
    CEP: ${cep}<br>Cidade: ${cidade}, ${uf}<br>Endereço: ${logradouro}, ${numero}<br>Bairro: ${bairro}<br>`
    }
}

function enviarMsg() {
    window.alert("Mensagem enviada com sucesso!!\nResponderemos o mais breve possível.")
}
