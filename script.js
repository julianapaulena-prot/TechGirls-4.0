
// TROCAR DE PÁGINA

function abrirPagina(id, botao) {

    const paginas = document.querySelectorAll(".page");

    paginas.forEach(function(pagina) {
        pagina.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");


    const botoes = document.querySelectorAll(".menu button");

    botoes.forEach(function(b) {
        b.classList.remove("active");
    });

    botao.classList.add("active");
}


// GERAR NÚMEROS ALEATÓRIOS

function numeroAleatorio(min, max) {

    return Math.floor(
        Math.random() * (max - min + 1)
    ) + min;

}


// SIMULAR MONITORAMENTO

function simularMonitoramento() {

    // Dados simulados

    const combustivel =
        numeroAleatorio(60, 85);

    const produtividade =
        numeroAleatorio(80, 96);

    const seguranca =
        numeroAleatorio(90, 99);

    const dispositivos =
        numeroAleatorio(18, 24);

    const temperatura =
        numeroAleatorio(27, 36);

    const umidade =
        numeroAleatorio(40, 65);


    // Atualizar Dashboard

    document.getElementById("combustivel")
        .textContent = combustivel;

    document.getElementById("produtividade")
        .textContent = produtividade;

    document.getElementById("seguranca")
        .textContent = seguranca;

    document.getElementById("dispositivos")
        .textContent = dispositivos;


    document.getElementById("temperatura")
        .textContent = temperatura;

    document.getElementById("umidade")
        .textContent = umidade;


    // Atualizar página de sensores

    document.getElementById("tempSensor")
        .textContent = temperatura;

    document.getElementById("umidadeSensor")
        .textContent = umidade;


    // MOVER CAMINHÃO

    const caminhao =
        document.getElementById("caminhao");

    const posicao =
        numeroAleatorio(10, 75);

    caminhao.style.left =
        posicao + "%";


    // HORÁRIO DA SIMULAÇÃO

    const agora = new Date();

    const hora =
        agora.toLocaleTimeString("pt-BR");

    document.getElementById(
        "ultimaAtualizacao"
    ).textContent = hora;


    // VERIFICAR TEMPERATURA

    const vibracao =
        document.getElementById("vibracao");

    const statusEscavadeira =
        document.getElementById(
            "statusEscavadeira"
        );


    if (temperatura >= 34) {

        vibracao.textContent =
            "⚠ Atenção";

        vibracao.style.color =
            "#ea580c";


        statusEscavadeira.textContent =
            "⚠ Atenção";

        statusEscavadeira.style.color =
            "#ea580c";

    } else {

        vibracao.textContent =
            "Normal";

        vibracao.style.color =
            "#16a34a";


        statusEscavadeira.textContent =
            "● Operando";

        statusEscavadeira.style.color =
            "#16a34a";
    }


    // VERIFICAR COMBUSTÍVEL

    const statusCaminhao =
        document.getElementById(
            "statusCaminhao"
        );


    if (combustivel <= 65) {

        statusCaminhao.textContent =
            "⚠ Combustível baixo";

        statusCaminhao.style.color =
            "#ea580c";

    } else {

        statusCaminhao.textContent =
            "● Operando";

        statusCaminhao.style.color =
            "#16a34a";
    }


    // MENSAGEM

    alert(
        "MONITORAMENTO ATUALIZADO!\n\n" +

        "⛽ Combustível: " +
        combustivel + "%\n" +

        "📦 Produtividade: " +
        produtividade + "%\n" +

        "🛡 Segurança: " +
        seguranca + "%\n" +

        "📡 Dispositivos: " +
        dispositivos + "\n" +

        "🌡 Temperatura: " +
        temperatura + " °C\n" +

        "💧 Umidade: " +
        umidade + "%\n\n" +

        "Última atualização: " +
        hora
    );

}

