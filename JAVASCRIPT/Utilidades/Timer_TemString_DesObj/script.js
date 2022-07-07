// ------------------------------------------------ TIMER ----------------------------------------------------

// A função "setInterval(ShowTime, 1000)", como primeiro parâmetro recebe uma função
//para executar, e como segundo, uma quantidade de tempo em milisegundos para executar essa função,
//com o "setInterval" ele não para de ativar a função, então tem de usar o "clearInterval(timer);"
//que por sua vez ira parar o funcionamento do timer que estiver dentro do parâmetro
let timer;

function comecar() {
    timer = setInterval(ShowTime, 1000);
}

function parar() {
    clearInterval(timer);
}

function ShowTime() {
    let date = new Date;
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let txt = h+':'+m+':'+s;
    console.log(txt);
}


// A função "setTimeOut(ShowTime2, 5000)", como primeiro parâmetro recebe uma função
//para executar, e como segundo, uma quantidade de tempo em milisegundos que ele ira esperar
//para executar essa função, com o "setTimeOut" ele ativa a função apenas uma vez e so quando 
//o tempo de espera definido se esgotar. Para cancelar o ativamento da função, use o "clearTimeout(timer2);",
//que ira cancelar a função, caso o tempo de ativação não tenha se esgotado
let timer2;

function comecar2() {
    timer2 = setTimeout(ShowTime2, 5000);
}

function parar2() {
    clearTimeout(timer2);
}

function ShowTime2() {
    let date = new Date;
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let txt = h+':'+m+':'+s;
    console.log(txt);
}

// ------------------------------------------ TEMPLATE STRING -------------------------

//Trata-se apenas de um forma mais efetiva e moderna de concatenar variaveis com 
//strings
let nome = "Carlos";
let idade = 19;
let peso = 100;

console.log(`Meu nome é ${nome}, e tenho ${idade} anos 
e meu peso atualmente é ${peso} Kg.`)

// ------------------------------------------ DESCONTRUCTION -------------------------


// Metodo de descontrução de objeto, defina uma variavel dessa maneira "let { nome1, idade1:idade2 } = pessoa;"
//ela ira desconstruir "pessoa" que é um objeto e automaticamente criar as variaveis que estão dentro do "{}"
// E se quiser pegar o valor da variavel so que com o nome de variavel diferente faça "idade1:idade2"
// E caso uma das variaveis não possua valor, ou não esteja definida use " nome1 = 'sem nome'" e automaticamente 
//recebera o valor apos o "="
let pessoa = {
    nome1: "Daniel",
    idade1: "20",
    social: {
        instagram: dani99,
        facebook: dani88
    },
    infor: function() {
        return `Meu nome é ${this.nome1}, minha idade ${this.idade1}`
    } 
};
let { nome1 = 'sem nome', idade1:idade2 } = pessoa;
console.log(nome1, idade2);