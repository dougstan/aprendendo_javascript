/*
var nome = "Dunha";
var n1 = 29;
var n2 = 15;
var frase = "Eu sou phoda!!!";
//alert("Bem vindo, " + nome +", você tem " + idade + " Anos!");
//alert(idade + idade2);
console.log(nome);
console.log(n1 * n2);
//console.log(frase);
//console.log(frase.replace("sou", "não sou"));
console.log(frase.toUpperCase());
*/

/*
var lista = ["maçã", "pêra", "laranja"];
lista.push("uva"); //pôr elemento no array por último
//lista.pop(); //tira o último elemento
//console.log(lista[1]);
//console.log(lista.lenght()); - lenght mosta a quantidade de elementos e reverse() inverte a ordem, de trás pra frente
console.log(lista); 
console.log(lista.toString()); // converte para string e mostra na tela, perde a referência de array
console.log(lista.join(" / ")); // tipo um separador entre os elementos do array
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"}; // "dicionário" - objeto com atributo
console.log(fruta.nome);
alert(fruta.cor);
*/

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]; // lista de "dicionários"
console.log(frutas[1].nome);
alert(frutas[1].cor);
*/

/*
var idade = prompt("Qual sua idade?"); // exibe uma pergunta, no que responder será gravado na variável
if (idade >= 18){
    alert("Maior de idade!");
} else {
    alert("Dimenó");
}
*/

/*
var count = 0;
while (count <+ 5){
    console.log(count);
    count ++;
}
*/

/*
for (var count = 0; count <= 5; count++){
    alert(count);
}
*/

/*
var d = new Date(); // trabalhar com data atual
alert(d.getMonth()+1); // mostra o mês atual, pode-se fazer com minutos, horas, dias etc.
*/

/*
function soma(n1, n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}

function validaIdade(idade){
    var validar; // variável local, só funciona na função
    if (idade >= 18){
        validar = true; //return true
    } else {
        validar = false; //return false
    }
    return validar;
}

alert(soma(5, 10));
alert(setReplace("Bora Tiburcio", "Tiburcio", "Dunha"));

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/

function botao(){
    //alert("Valeu por clicar!");
    document.getElementById("agradecimento").innerHTML = "<b>Valeu por clicar!</b>"; // ele traz o elemento de acordo com a id dada na tag do HTML
    // innerHTML = ele coloca e executa na página em HTML
}

function redirecionar(){
    window.open("http://www.pudim.com.br"); // abre em outra janela
    // window.location.href = "http://www.pudim.com.br"; // abre na mesma janela
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Valeu pela passadinha!"; // ao passar o mouse o texto muda para o que está escrito
    elemento.innerHTML = "Valeu pela passadinha!";
    //alert("Você passou o mouse no texto!");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!";
    
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!"; // mostra a mensagem de cima só quando o mouse está em cima, ao sair, mostra esta da função 
}

function load(){
    alert("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}