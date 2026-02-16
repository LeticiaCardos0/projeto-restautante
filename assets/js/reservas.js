const formularioReserva = document.getElementById("formulario-reserva");
if (formularioReserva) {
    formularioReserva.addEventListener("click", reserva);
}

const formularioReservaHome = document.getElementById("formulario-reserva-home");
if (formularioReservaHome) {
    formularioReservaHome.addEventListener("click", reserva);
}

function reserva(){

    let campoNome = document.getElementById("campo-nome");
    let nome = (campoNome.value);

    let campoTelefone = document.getElementById("campo-telefone");
    let telefone = (campoTelefone.value);
    
    let campoEmail = document.getElementById("campo-email");
    let email = (campoEmail.value);

    
    let campoData = document.getElementById("campo-data");
    let data = (campoData.value);
    
    let campoHora = document.getElementById("campo-hora");
    let hora = (campoHora.value);

    let campoNumero = document.getElementById("campo-numero");
    let numero = (campoNumero.value);

    let campoAmbiente = document.getElementById("campo-preferencia");
    let ambiente = (campoAmbiente.value);

    let campoObservacoes = document.getElementById("campo-observacoes");
    let observacoes = (campoObservacoes.value);


    alert(`INFORMAÇÕES RESERVA

- Nome: ${nome}
- Telefone: ${telefone}
- E-mail: ${email}
- Data Reserva: ${data}
- Hora Reserva: ${hora}
- Numero de pessoas: ${numero}
- Ambiente: ${ambiente}
- Observações: ${observacoes}

           
        `)

}