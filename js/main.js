
var meuNome = "Gustavo"
var frase = "Welcome to " + meuNome + "'s first js interactive web page";

alert(frase);
console.log(frase);

/*
var lista = ["maçã", "banana", "melancia"]; // array of length N: var arrayName = [arrayItem[0], arrayItem[1], ..., arrayItem[N]];
var firstItemOfLista = lista[0];

console.log("Objeto do tipo Array");
console.log(lista);
console.log("The first item of the array is: " + firstItemOfLista);

console.log(lista.join(" - ")); // .join() sets the separation type between the contents of an array
console.log(lista.toString()); // .toString() transforms the content into string type
console.log(lista.length); // .length returns the length of the array
console.log(lista.reverse()); // return the inverte"(" + d getMonth()+1, d.getDay(), d.getFullYear() + ")"y
 // (mm/dd/yy) .getMethod() returns the desired method from date
lista.push(1, "outrafruta"); // .push(items) include the new items to an array
console.log(lista);
lista.pop(); // exclude the last itm on an array
console.log(lista);

console.log("Objeto do tipo Dicionário");
var fruta = {nome: "maçã", cor: "vermelha"}; // dicionario{} creates a dicionario, a Json object
console.log(fruta);
console.log(fruta.nome);

console.log("Array de Dicionários");
var frutas = [{nome: "maçã", cor: "vermelha"}, {nome: "banana", cor:"amarela"}]; // dicionario{} creates a dicionario, a Json object
console.log(frutas);
console.log(frutas[1].nome);

var d = new Date(); // adding the international format local date to the variable
console.log(d);
console.log("(" + d.getMonth()+1, d.getDay(), d.getFullYear() + ")"); // (mm/dd/yy) .getMethod() returns the desired method from date
*/

var validar = 0; // global variable

function validarIdade(idade) {
    // var validar; // local variable
    if (idade >= 18) {
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade? ");
// console.log(validarIdade(idade));
// console.log(validar);

if (validar) {
    alert("you are " + idade + " and you can proceed on your journey.");
} else {
    alert("you are under 18. Keep calm and wise on your journey, young soul.")
}


function clicou() {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar!";
}

function redirecionarNew() {
    window.open("https://github.com/gustavo-hermogenes"); // redireciona para o endereço em nova aba
}

function redirecionarSame(){
    window.location.href = "https://github.com/gustavo-hermogenes"; // redireciona para o endereço na mesma janela
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
}
function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
}

function trocar2(elemento){
    // document.getElementById("mousemove2").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar2(elemento){
    // document.getElementById("mousemove2").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function funcaoChange(elemento) {
    console.log(elemento.value);
    document.getElementById("selecionado").innerHTML = `A opção escolhida foi a de número ${elemento.value}`;
}