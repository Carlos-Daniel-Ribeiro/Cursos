// -----------------------------------------------ARRAY------------------------------------------------------

// A função "lista.toString()", converte uma variavel que seja um array para uma
//string, separada por ","
let lista = ["caju","bola","madeira"];
let lista_real = lista.toString();
console.log (lista_real);

// A função "lista1.join("-")", converte uma variavel que seja um array para uma
//string, separada por parâmetro requerido
let lista1 = ["caju","bola","madeira"];
let lista_real1 = lista1.join("-");
console.log (lista_real1);

// A função "lista2.indexOf("caju")", filtra o parâemtro para dentro do array
//retornando o seu lugar nesse exemplo seria "[0]", caso ele não encontre o
//parâmetro ele retorna o valor '-1'
let lista2 = ["caju","bola","madeira"];
let lista_real2 = lista2.indexOf("caju")

// A função "lista3.pop("caju");" vai retirar o ultimo item desse array
let lista3 = ["caju","bola","madeira"];
lista3.pop("caju");
console.log (lista3);

// A função "lista3.shift("caju");" vai retirar o primeiro item desse array
let lista4 = ["caju","bola","madeira"];
lista4.shift("caju");
console.log (lista4);

// A função "push("azeitona");", adiciona o parâmetro dentro do array
//aumentando seu tamanho
let lista5 = ["caju","bola","madeira"];
lista5.push("azeitona");
console.log (lista5);

// Essa "lista6[0] = "manga";", vai adcionar o valor dentro do array [0] e 
//"lista[lista.length] = "uva";" vai adicionar ele no final do array, mesmo sem especificar
let lista6 = ["caju","bola","madeira"];
lista6[0] = "manga";
lista6[lista6.length] = "uva";
console.log (lista6)

// Essa "lista7.splice(1,1)", tem como primeiro parâmetro a posição do indice,
//o segundo a quantidade de itens a ser deletado após a posição do item requerido
//ou seja nesse caso, deletaria apenas o indice "bola"
let lista7 = ["caju","bola","madeira"];
lista7.splice(1,1)
console.log (lista7);

// Essa função "let listaC = lista8.concat(lista8_1)" vai concatenar os dois arrays
//os juntando em uma variavel
let lista8 = ["caju","bola","madeira"];
let lista8_1 = ["caju1","bola1","madeira1"];
let listaC = lista8.concat(lista8_1)
console.log (listaC);

// Essa função "lista9.sort()" vai ordernar os indices em ordem alfabetica e a 
//função "lista9.reverse()" vai reverte-los de ordem
let lista9 = ["caju","bola","madeira"];
lista9.sort()
lista9.reverse()
console.log (lista9); 

// -----------------------------------------------ARRAY ADVANCED------------------------------------------------------

// O "map" é utilizado para executar uma função matematica (na maioria das vezes), em cada valor
//dos indices de um array, e retornar um novo array com novos valores

// A função "lista10.map(function(i)" vai mapear e percorrer cada indice do array concatenado
//executando uma função que está dentro do seu parâmetro em cada valor desses indices
let lista10 = [45,50,32,18,97]
let lista10_1 = []
lista10_1 = lista10.map(function(i) {
    return i * 2;
});
console.log (lista10_1); 


// A função "(let i in lista10)" cria um variavel que sera linkada com casa indice do array
//concatenado pelo "in" e automaticamente ele sabe quantos indices esse array tem.
let lista11 = [45,50,32,18,97];
let lista11_1 = [];
for(let i in lista10) {
    lista11_1.push(lista11[i] * 2 )
}
console.log(lista11_1); 


// O "filter" é utilizado para executar uma função de consdição (na maioria das vezes), em cada valor
//dos indices de um array os filtrando , e retornar um novo array com valores filtrados

// A função "lista12.filter(function(i)" vai percorrer cada valor de indice do array, verificando
//se o retorno da função apos a aplicação de condição e "true" ou "false", caso for "true" ele ira
//passar o valor de indice para o array e caso for "false" não fara isso, assim filtrando os indices
//que forem requisitados e criando um array filtrado
let lista12 = [45,50,32,18,97]
let lista12_1 = []
lista12_1 = lista12.filter(function(i) {
    if (i > 20) {
        return true;
    } else {
        return false;
    }
});
console.log (lista12_1); 


// O "every" é utilizado para executar uma função de consdição (na maioria das vezes), em cada valor
//dos indices de um array os definindo em "true" ou "false", caso todos forem "true" ele ira
//passar o valor "true" para a varivel em questão, e se tiver algum com o valor "false" ele ira passar o valor "false"
// Normalmente é utilizado em validações de requisições

// A função "lista13.every(function(i)" vai percorrer cada valor de indice do array, verificando
//se o retorno da função apos a aplicação de condição é "true" ou "false", caso todos forem "true" ele ira
//passar o valor "true" para a varivel em questão, e se tiver algum com o valor "false" ele ira passar o valor "false" 
let lista13 = [45,50,32,18,97]
let variavel = []
variavel = lista13.every(function(i) {
    if (i > 20) {
        return true;
    } else {
        return false;
    }
});
console.log (variavel); 


// O "some" é utilizado para executar uma função de condição (na maioria das vezes), em cada valor
//dos indices de um array os definindo em "true" ou "false", caso pelo menos um for "true" ele ira
//passar o valor "true" para a varivel em questão, e se todos forem "false" ele ira passar o valor "false"
// Normalmente é utilizado em validações de requisições

// A função "lista14.some(function(i)" vai percorrer cada valor de indice do array, verificando
//se o retorno da função apos a aplicação de condição é "true" ou "false", caso pelo menos um for "true" ele ira
//passar o valor "true" para a varivel em questão, e se todos forem "false" ele ira passar o valor "false" 
let lista14 = [45,50,32,18,97]
let variavel1 ;
variavel = lista14.every(function(i) {
    if (i > 20) {
        return true;
    } else {
        return false;
    }
});
console.log (variavel1);


// O "find" é utilizado para encontrar o primeiro objeto ou elemento que contenha uma propriedade requerida,
//ou seja em uma lista de dados pessoais com apenas uma informação tipo um id, que é unico, você 
//encontra todos os outros dados que estão junto com ele

//A função executa uma função de comparação em todos os itens de um array ou objeto, ela recebe como 
//parâmetro o proprio item, e caso a condição retornar "true" ele retorna o objeto ou elemento com 
//todos os outros itens incluso e caso for "false", ele não retorna nada, ou seja, "undefined"
let lista15 = [
    {id:1, nome:'Carlos', idade:19, cidade:'Itu'},
    {id:2, nome:'Maria', idade:25, cidade:'Salto'},
    {id:3, nome:'Ana', idade:37, cidade:'Sorocaba'}
]
let lista15_1 = [];
lista15_1 = lista15.find(function(item){
    if (item.id == 4) {
        return true;
    } else {
        return false;
    }
});
console.log (lista15_1); 


// O "findIndex" é utilizado para encontrar a posição do priemiro objeto ou elemento que contenha uma 
//propriedade requerida,ou seja em uma lista de dados pessoais com apenas uma informação tipo um id, que é unico, você 
//encontra a posição do elemento ou objeto dentro do array

//A função "lista16.findIndex(function(item)" executa uma função de comparação em todos os itens de um array 
//ou objeto, ela recebe como parâmetro o proprio item, e caso a condição retornar "true" ele retorna a posição
//do objeto ou elemento e caso for "false", ele não retorna nada, ou seja, "undefined"
let lista16 = [
    {id:1, nome:'Carlos', idade:19, cidade:'Itu'},
    {id:2, nome:'Maria', idade:25, cidade:'Salto'},
    {id:3, nome:'Ana', idade:37, cidade:'Sorocaba'}
]
let lista16_1 = [];
lista16_1 = lista16.findIndex(function(item){
    if (item.id == 2) {
        return true;
    } else {
        return false;
    }
});
console.log (lista16_1); 





