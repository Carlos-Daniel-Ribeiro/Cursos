// ------------------------------------------------NUMBER---------------------------------------------------

// A função "n.toString()", converte uma variavel que seja um numero para uma
//string daquele mesmo numero.
let n = 25;
let nr = n.toString() + 300;
console.log (nr);

// A função "n.toFixed(2)", essa função preserva os numeros após o "." ou ","
//a quantidade de numeros a seres preservados é passado pelo parâmetro dentro dos "()"
let x = 10.45475;
let xr = x.toFixed(2)
console.log (xr)

// A função "parseFloat(y)" preserva os numero apos a "," ou ".", e a função "parseInt(y)" não preserva
//ambas convertem uma variavel que seja uma string numeral para um numero real
let y = "30";
let yr = parseInt(y) + 30;
console.log (yr)

let h = "30";
let hr = parseFloat(h) + 30;
console.log (hr)

