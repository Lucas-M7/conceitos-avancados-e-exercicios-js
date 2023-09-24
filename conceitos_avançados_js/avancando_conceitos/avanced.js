//Avançando em JavaScript

//Manipulação de Arrays

const times = ['Celtics', 'Bulls', 'Knicks']

times.unshift('Lakers') //Adicionando uma string no início de um array

console.log(times)

const marcas = ['New Balance', 'Nike', 'Anta', 'Adidas', 'Air-Jordan']

marcas.shift() //Removendo uma string do início de um array

console.log(marcas)

//map, filter, reduce -> arrow function

const numeros = [1, 2, 3, 4, 5, 6, 7]


// find => só retorna o primeiro elemento do critério
//find => percorre todos os elementos da lista, tipo um loop for
const numeroPar = numeros.find((num) => num % 2 === 0)

console.log(numeroPar)

//filter => retorna todos os elementos que batem com o critério
//filter => também percorre todos os elementos da lista
const numerosPares = numeros.filter((num) => num % 2 === 0)

console.log(numerosPares)

//map é um método de array que permite criar um novo array com os resultados de chamar uma função fornecida em cada elemento do array original

const numbers = [2, 5, 8]
const arr = numbers.map(function(num){ // a função passada para o método .map() é chamada para cada elemento do array original
    return num**2
})

console.log(arr)

//Manipulação de String

const minhaString = ' Olá, mundo! '

const palavras = minhaString.trim().split(" ") //o .trim() é usado para remover espaços em branco no início ou/e no fim de uma string
    //o método .split() divide uma string em uma lista ordenada de substrings, coloca essas substrings em uma array e retorna o array.
    //A divisão é feita procurando um padrão que é fornecido como o primeiro parâmetro na chamada do método
console.log(minhaString)
console.log(palavras)


const frase = 'JavaScript é incrível!'

console.log(frase.startsWith('Java')) //verifica se a frase JavaScript é incrível começa com a palavra Java

const frase2 = 'lucas015x@gmail.com'

console.log(frase2.endsWith('@gmail.com')) //verifica se a frase termina com @gmail.com

//Excções e tratamentos de erros

const idade = 17

/*if(idade < 18){
    throw new Error('Você deve ser maior de idade') //throw é feito para o erro ser executado, porém o programa não é continuado
}*/


    //com o try catch se o erro for executado, é possível continuar com o programa

try {       //tentativa de executar um código

    const idade = 17
    if(idade < 18){
        throw new Error('Você deve ser maior de idade!')
    }

} catch (error) { //se caso o try não der certo, o cath vai pegar algum erro que estiver presente no código, executar e continuar o programa
     console.log(error.message) //.message para exibir como uma mensagem normal
}

console.log('Continuando o programa...')

//
//Callback => função que será executada em outra função

function cumprimentar(nome, callback){
    console.log(`Olá ${nome}`)
    callback()
}

function pergunta(){
    console.log('Como você está?')
}

cumprimentar('Lucas', pergunta)

// setTimout => depois de um determinado tempo, ele executa algo, uma vez

/*function mensagem(){
    console.log('Essa mensagem será exibida após 7 segundos.')
}

/* 1000ms = 1s
setTimeout(mensagem, 7000)


setTimeout(function(){
    console.log('Olá')
}, 3000)*/


/*const email = 'Lucas015x@gmail.cm'

if(email.endsWith('@gmail.com')){
    console.log('Sua inscrição foi concluída')
} else {
    console.warn('Email inválido')
}*/


//Promisses => promette que um código vai ser executado após alguma coisa
//Estados de uma promise: pending = estado incial, fulfilled: operação concluída com sucesso, rejectd: operação falha

const promessa = new Promise((resolve, reject) =>{
    const condicao = false

    if(condicao){
        resolve('A condição é verdadeira!')
    }else{
        reject('A condição é falsa!')
    }
})

promessa.then(mensagem =>{ //O then vai executar a promessa, mas se caso o valor do retorno for falso, ele não irá executar a promessa
    console.log(mensagem)
})
.catch((erro) =>{ //Mas com o cath, se o valor retornado for false, é possível executar o programa.
    console.log(erro)
})

//Bibliotecas feitas que são 'promise based'

const promise1 = Promise.resolve(3) //resposta imediata no console
const promise2 = new Promise((resolve, reject) => { //demora de 2 segundos e meio para responder no console
    setTimeout(resolve, 2500, 'testando') // o terceiro argumento é o retorno
})

Promise.all([promise1, promise2]).then((valores) => console.log(valores))

//Async Await

async function obterValor(){
    const promessa = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Valor obtido'), 2000)
    })

    const valor = await promessa //await faz com que o JS espere até que a promessa seja resolvida e retorne o seu resultado

    console.log(valor);
}

obterValor()

async function valorComErro(){
    try {
        const promessa = new Promise((resolve, reject) => {
            setTimeout(() => reject('Valor com erro'))
        })
    //try/catch usado para poder obter o erro e executar o programa depois
        const valor = await promessa
        console.log(valor)
    } catch (error) { 
        console.log(error)
    }
}

valorComErro()

//JSON (JavaScript Object Notation)
// {nome: 'teste'} => {'nome': 'teste'}
//Padroniza a comunicação
//front-end e back-end em uma linguagem só

const objeto = {nome: 'Lucas', idade: 17}

const jsonString = JSON.stringify(objeto) //stringfy transformando o objeto em uma string

console.log(typeof jsonString)

const json = '{"nome": "Lucas", "idade": 17}'

const objeto2 = JSON.parse(json) //convertendo o JSON para um objeto mesmo

console.log(objeto2.nome)