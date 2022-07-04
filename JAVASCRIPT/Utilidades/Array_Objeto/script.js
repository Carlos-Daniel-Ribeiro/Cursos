// -------------------------------------ARRAY----------------------------------------

// Arrays são variaveis que recebem varios valores
// Devem ser declaradas normalmente pórem com abertura de "[]" e separadas por ","
let ingredientes = [ 'Uva', 'Maça', 'Pera'];
console.log (ingredientes[0]);

let times = [
    'Palmeiras',
    'Corinthians',
    'Santos',
    'São Paulo'
];
console.log (times[2]);

// Podem receber funções como indices numerados 
let nomes = [
    function() {
        console.log ('Primeira Função')
    },
    function() {
        console.log ('Segunda Função')
    },
    function() {
        console.log ('Terceira Função')
    },
];
console.log(nomes[1]);

// Podem receber outros arrays dentro 
let receitas = [
    [Banana, Ovo, Abacate],
    [Vinho, Leite, Suco],
    [Massa, Nutela, Salcicha],
];
console.log(receitas[1][1])

// -------------------------------------OBJETO----------------------------------------

// Objetos funcionam igual a um array, porem são definidos por nome e não por numeração
// Para uma função usar como parâmetro algum indice do objeto que ela mesma está dentro
//deve se usar "this"
let carro = {
    marca: "Fiat",
    modelo: "Palio",
    ano: "2012",
    peso: "1500kg",
    ligado: true,
    top: false,
    top_ou_nao: function(){
        if (this.top == true) {
            console.log("Esse carro é maneiro")
        } else {
            console.log ("Esse carro é uma bosta")
        }
    }
}
console.log (carro)
console.log (carro.ano)

// Um objeto pode receber funções que são nomeadas
let funcoes = {
    abacate:function() {
        console.log ("Eu gosto de Abacate")
    },
    manga:function() {
        console.log ("Eu gosto de manga")
    },
    uva:function() {
        console.log ("Eu gosto de uva")
    }
}
funcoes.manga();

let carro_ligar = {
    infocar: carro,
    ligar: function() {
        if (carro.ligado == true) {
            console.log ("VRUM VRUM ... O CARRO ESTÁ LIGADO !!!")
        } else {
            console.log ("O carro não está ligado")
        }
    }
}
console.log (carro_ligar.infocar)
carro_ligar.ligar();

// Pode se utilizar objetos dentro de uma array
let times_b = [
    {nome: "vasco", titulos: 5, grande: true},
    {nome: "cruzeiro", titulos: 10, grande: true},
    {nome: "ituano", titulos: 0, grande: false},
    {nome: "londrina", titulos: 1, grande: false}
]
console.log (times_b[2])
console.log (
    "O nome do time é " + times_b[2].nome +
    " a quantindade de titulos é " + times_b[2].titulos +
    " e ele é grande ? " + times_b[2].grande
);