// ------------------------------------------ DESCONTRUCTION -------------------------

// Metodo de descontrução de objeto, defina uma variavel dessa maneira "let { nome1, idade1:idade2 } = pessoa;"
//ela ira desconstruir "pessoa" que é um objeto e automaticamente criar as variaveis que estão dentro do "{}"
// E se quiser pegar o valor da variavel so que com o nome de variavel diferente faça "idade1:idade2"
// E caso uma das variaveis não possua valor, ou não esteja definida use " nome1 = 'sem nome'" e automaticamente 
//recebera o valor apos o "="
let pessoa = {
    nome1: "Daniel",
    idade1: "20",
    infor: function() {
        return `Meu nome é ${this.nome1}, minha idade ${this.idade1}`;
    } 
};
let { idade1:idade2, nome1 = 'sem nome' } = pessoa;
console.log(nome1, idade2);

// Metodo de descontrução de array, defina uma variavel dessa maneira "let [nome1, idade1:idade2]  = array;"
//ela ira desconstruir "array" que é um array e automaticamente criar as variaveis que estão dentro do "[]"
//ele ira definir as variaveis por ordem do array, para pular uma variavel use ","
// E caso uma das variaveis não possua valor, ou não esteja definida use " nome3 = 'sem nome'" e automaticamente 
//recebera o valor apos o "="
let banana = "Morango";
let array = ["Daniel", 99, "Itu", banana];
let [nome3, idade3, cidade, fruta] = array;
console.log( nome3, idade3, cidade, fruta);