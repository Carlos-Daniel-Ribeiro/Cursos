// ---------------------------DIMENSÕES------------------------------------

// Esse comando ".offsetWidth;" grava a largura do elemento em "px" levando em conta o padding,
//borda e a barra de rolagem, mas desconsiderando o SCROLL total do conteúdo inferior
document.querySelector(".texto").offsetWidth;
// Esse comando ".offsetHeight;" grava a altura do elemento em "px" levando em conta o padding,
//borda e a barra de rolagem, mas desconsiderando o SCROLL total do conteúdo inferior
document.querySelector(".texto").offsetHeight;

// Esse comando ".clientWidth;" grava a largura do elemento em "px" levando em conta o padding,
//borda, mas desconsiderando o SCROLL total do conteúdo e a barra de rolagem
document.querySelector(".texto").clientWidth;
// Esse comando ".clientHeight;" grava a altura do elemento em "px" levando em conta o padding,
//borda, mas desconsiderando o SCROLL total do conteúdo e a barra de rolagem
document.querySelector(".texto").clientHeight;

// Esse comando ".scrollWidth;" grava a largura do elemento em "px" levando em conta o padding,
//borda e SCROLL TOTAL, mas desconsiderando a barra de rolagem
document.querySelector(".texto").scrollWidth;

// Esse comando ".scrollHeight;" grava a altura do elemento em "px" levando em conta o padding,
//borda e SCROLL TOTAL, mas desconsiderando a barra de rolagem
document.querySelector(".texto").scrollHeight;

// ---------------------------SCROLL------------------------------------

// Esse comando ".scrollTop;" verifica a posição do SCROLL Vertical do elemento, que é o mais comum
document.querySelector(".texto").scrollTop;

// Esse comando ".scrollLeft;" verifica a posição do SCROLL Horizontal do elemento, que é o mais comum
document.querySelector(".texto").scrollLeft;

// Altera a posição inicial do SCROOL do elemento, o primeiro parâmetro altera o Horizontal 
// e o segundo parâmetro altera a Vertical
document.querySelector(".texto").scrollTo(0,0)

// Altera a posição da tela, o primeiro parâmetro altera o Horizontal 
// e o segundo parâmetro altera a Vertical
window.scrollTo(0,0)

// Esse comando verifica qual é a posição do SCROLL da window da pagina, tanto vertical quanto horizontal
window.scrollY;
window.scrollX;