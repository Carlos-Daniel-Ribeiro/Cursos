// -------------------------------------- JSON -----------------------------------------

//Meio de comunicação para realizar requisições entre sistemas

// Muito semelhante à um Objeto : 

/*
{
    "nome1": "Alberto",
    "nome2": "Alberto",
    "nome3": "Alberto",
    "nome4": "Alberto",
    "nome5": "Alberto"
}
*/
// O que difere é o uso de aspas duplas nas propriedades
// Normalmente ele é passado por uma string :
// '{"nome1": "Alberto","nome2": "Alberto","nome3": "Alberto","nome4": "Alberto","nome5": "Alberto"}'


// Para transformar uma string em um objeto JSON, deve se usar a função "JSON.parse" :
let request = '{"nome1": "Alberto","nome2": "Alberto","nome3": "Alberto","nome4": "Alberto","nome5": "Alberto"}';
let request_true = JSON.parse(request);
console.log(request_true);

// Para transformar um objeto JSON em uma string, deve se usar a função "JSON.stringify" :
let request1 = {
    "nome1": "Alberto",
    "nome2": "Alberto",
    "nome3": "Alberto",
    "nome4": "Alberto",
    "nome5": "Alberto"
}
let request_true1 = JSON.stringify(request1);
console.log(request_true1);

// ------------------------------------------ ASSINCRONO E SINCRONO ---------------------------------------

// Codigo sincrono, é um codigo que é executavel em sincronia, ou seja, cada linha
//funciona após a outra, e espera a resposta da linha antecedente para funcionar.

// Código assincrono, não segue uma sincronia, ele executa funções e realiza callbacks,
//antes de uma linha antecedente finalizar sua tarefa.

// Callbacks, são ações que não acontecem no momento exato em que são ativadas,
//geralmente esperam uma resposta, ou já estão programadas para executar após algum tempo