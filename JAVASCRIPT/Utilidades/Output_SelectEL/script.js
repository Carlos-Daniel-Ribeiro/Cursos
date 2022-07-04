// ------------------------------OUTPUT---------------------------------------------------

// Esse codigo escreve na tela alguma informação
document.write("Algum texto");

// Esse codigo mostra na tela alguma informação como PopUp
alert("Qualquer coisa");
window.alert("Qualquer coisa");

// Esse codigo escreve alguma informação no console do browser 
console.log("qualquer coisa");

// ------------------------------SELECT ELEMENT--------------------------------------------

// Esse codigo seleciona o elemento pelo id "#algumacoisa"
document.getElementById("id");

// Esse codigo seleciona o elemento pelo id ".algumacoisa"
document.getElementsByClassName("class");

// Esse codigo seleciona o elemento pela tag "section"
document.getElementsByTagName("tag");

// Esse codigo seleciona o elemento por todas suas classes"
document.querySelector(".class , #id, tag");

// Comandos que retornam arrays, devem ter um [..] para selecionar o elemento em especifico
document.querySelectorAll("h2")[0];