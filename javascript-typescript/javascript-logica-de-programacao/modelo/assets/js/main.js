dataCompleta();

function dataCompleta() {
    const dataResultado = document.querySelector('.content-paragrafo');
    dataResultado.innerHTML = ""

    const agora = new Date();

    const ano = agora.getFullYear();
    const mes = agora.getMonth();
    const dia = agora.getDate();
    const hora = agora.getHours();
    const min = agora.getMinutes();
    const diaSemana = agora.getDay();

    const diaSemanaTexto = semanaExtenso(diaSemana);
    const mesTexto = mesExtenso(mes);

    console.log(ano, mes, dia, hora, min, diaSemana);
    dataResultado.innerHTML = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano} ${zeroEsquerda(hora)}:${zeroEsquerda(min)}`;

    function semanaExtenso(dia) {
        switch (dia) {
            case 0:
                return 'Domingo';
            case 1:
                return 'Segunda-Feira';
            case 2:
                return 'Terça-Feira';
            case 3:
                return 'Quarta-Feira';
            case 4:
                return 'Quinta-Feira';
            case 5:
                return 'Sexta-Feira';
            case 6:
                return 'Sábado';
        }
    }

    function mesExtenso(mes) {
        switch (mes) {
            case 0:
                return 'Janeiro';
            case 1:
                return 'Fevereiro';
            case 2:
                return 'Março';
            case 3:
                return 'Abril';
            case 4:
                return 'Maio';
            case 5:
                return 'Junho';
            case 6:
                return 'Julho';
            case 7:
                return 'Agosto';
            case 8:
                return 'Setembro';
            case 9:
                return 'Outubro';
            case 10:
                return 'Novembro';
            case 11:
                return 'Dezembro';
        }
    }

    function zeroEsquerda (num) {
        if (num < 10) {
            return `0${num}`;
        } else {
            return `${num}`;
        }
    }
}
