// Exercício de Manipulação de Array

/* Crie uma lista de compras que é inicialmente vazia.
Adicione 5 itens à lista usando push().
Agora, remova o primeiro item da lista usando shift().
Imprima a lista final no console. */

const compras = []
compras.push('PC', 'Nike', 'Comida', 'Passagem', 'Carro')
compras.shift()
console.log(compras)


// Exercício de Manipulação de Array - find()

/* Você tem um array de números: [3, 7, 14, 21, 29, 36, 42]
Use a função find() para encontrar o primeiro número que é divisível por 7 e maior que 10 */

const numbers = [3, 7, 14, 21, 29, 36, 42]

const divisivel = numbers.find((num) => num % 7 === 0 && num > 10)

console.log(divisivel)


// Exercício de Manipulação de Array - filter()

/* Dado o array de números: [5, 10 , 15, 20, 25, 30, 35, 40] 
Use a função filter() para criar um novo array que contenha apenas os números 
que são maiores que 20.*/

const meusNumeros = [5, 10 , 15, 20, 25, 30, 35, 40]

const maioresQue20 = meusNumeros.filter((num) => num > 20)

console.log(maioresQue20)


// Exercício de Manipulação de Array - map()

/* Dado um array: [3, 5, 7, 19, 20]
com o método .map(), crie um novo array que exiba o valor do array original ao cubo */

const myArr = [3, 5, 7, 19, 20]

const valorCubico = myArr.map(function(num){
    return num**3
})

console.log(valorCubico)

// Exercício de Manipulação de String - split(), trim()

// Dada a string: " Bom dia, mundo! ".
// Remova os espaços em branco no início e no final da string e,
// em seguida, divida a string em palavras.

const minhaString = "   Bom dia, mundo!   "

const minhaStringNSemEspaco = minhaString.trim().split(" ")

console.log(minhaString);
console.log(minhaStringNSemEspaco);


// Exercício de Manipulação de String - startsWith(), endsWith()

// Dada a string: "O rato roeu a roupa do rei de Roma".
// Verifique se a string começa com a palavra "O" e termina com a palavra "Roma".

const poesia = 'O rato roeu a roupa do rei de Roma'

console.log(poesia.endsWith("Roma"), poesia.startsWith('O'))
