// ---------------------------CLASSLIST------------------------------------

// Esse comando ".classList.add("style-css")" seleciona um elemento html e adiciona os elementos css,
//de uma class ou id
document.querySelector("h1").classList.add("style-css");

// Esse comando ".classList.remove("style-css")" seleciona um elemento html e remove os elementos css,
//de uma class ou id
document.querySelector("h1").classList.remove("style-css");

// Esse comando ".classList.remove("style-css")" seleciona um elemento html 
//e verifica se contem um elemento css
document.querySelector("h1").classList.contains("style-css");

// Esse comando ".style.display = "none"" presupoe que o elemento html selecionado
//possui uma class no style do css, então ele entra na class do elemento html e 
//altera o valor de uma propriedade definida dentro da class, por outro valor
document.querySelector("h1").style.display = "none";

// ---------------------------ATRIBUTE------------------------------------

// Esse comando ".setAttribute("src", filename)" altera o valor de um atributo
//especifico de um elemento em questão
// O primeiro parâmetro é o atributo que sera alterado
// O segundo é um valor ou váriavel que substituira o valor original
document.querySelector("#imagem").setAttribute("src", filename)

// Esse comando seleciona um elemento DOM e grava o valor de algum
//atributo, assim podendo passa-lo para uma variavel
let animal = document.querySelector("#imagem").getAttribute("data-animal");