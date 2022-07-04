// -----------------------------------------------STRING------------------------------------------------------

// O comando "nome.lenght" retorna o valor que corresponde ao total de letras dentro da string em questão
let nome = "Carlos Daniel Costa Ribeiro";
let resultado = nome.length;
console.log(resultado);


// O comando "nome2.indexOf("Daniel")" retorna o valor que corresponde em que
//local da string se iniciou determinada palavra
// Caso a string não possua a palavra requisitada ela retorna valor "-1"
// Em Js, a posição inicial em todos aspectos é 0
let nome2 = "Carlos Daniel Costa Ribeiro";
let resultado2 = nome2.indexOf("Daniel");
console.log(resultado2);

// O comando "nome3.slice(10,20)" tem como primeiro parâmetro o inicio de contagem da string
//e como segundo parâmetro o final de contagem de uma string, assim retornando os caracteres
//que estiverem entre os parametros os dois parâmetros
// Caso não seja definido o segundo parâmetro ele pega todo apartir do primeiro
// Ele tambem pode pegar numeros negativos, que começa a contagem do fim para o início
let nome3 = "Carlos Daniel Costa Ribeiro";
let resultado3 = nome3.slice(-10,-15);
console.log(resultado3);

// O comando "nome3.slice(10,20)" tem o mesmo funcionamento do "Slice", pórem não aceita numeros
//negativos
let nome4 = "Carlos Daniel Costa Ribeiro";
let resultado4 = nome4.substring(10,20);
console.log(resultado4);

// O comando "replace("Daniel","Ragnar")" troca o primeiro parâmetro, pela segundo
//dentro da string em questão
let nome5 = "Carlos Daniel Costa Ribeiro";
let resultado5 = nome5.replace("Daniel","Ragnar");
console.log(resultado5);

// O comando "nome6.toUpperCase()" simplesmente coloca todos os caracteres dentro 
//da string em questão em caixa alta e "nome7.toLowerCase()" em caixa baixa
let nome6 = "Carlos Daniel Costa Ribeiro";
let resultado6 = nome6.toUpperCase();
console.log(resultado6);
let nome7 = "Carlos Daniel Costa Ribeiro";
let resultado7 = nome7.toLowerCase();
console.log(resultado7);

// O comando "nome8.trim()" retira todos os possiveis espaços vazios da string em questão
let nome8 = "Carlos Daniel Costa Ribeiro";
let resultado8 = nome8.trim();
console.log(resultado8);

// O comando "nome9[5]" retorna o quinto caractere da string em questão
let nome9 = "Carlos Daniel Costa Ribeiro";
let resultado9 = nome9[5];
console.log(resultado9);

// O comando "nome10.split(" ") divide a string pelo parâmetro indicado, assim 
//a transformando-a em um array
let nome10 = "Carlos Daniel Costa Ribeiro";
let resultado10 = nome10.split(" ");
console.log(resultado10);






