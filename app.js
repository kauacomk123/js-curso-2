let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function Console(){
 console.log('O botao foi clicado');
}

function Alerta(){
    console.log(' Eu amo JS');
}

function Prompt(){
    let cidade = prompt("Escolhar uma cidade");
    alert(`Estiver em ${cidade} e lembrei de você.`);
}

function Soma(){
    let numeroum = prompt('Digite um numero');
    let numerodois = prompt('Digite outro numero');

    let soma = parseInt(numeroum)+ parseInt(numerodois)

    alert(` A soma dos números é: ${soma}`);
    console.log(`A soma dos números e: ${soma}`);
}



