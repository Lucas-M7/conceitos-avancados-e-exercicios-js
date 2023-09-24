// DOM - Document Object Model

//Selecionar elementos
const meuElemento = document.getElementById('meuId')

console.log(meuElemento) //aparece o elemento div que foi pego e o seu conteúdo

const porId2 = document.querySelector('#meuId') //mesmo resultado

const porClasse = document.getElementsByClassName('minhaClasse')

console.log(porClasse)

const porClasse2 = document.querySelector('.minhaClasse') //mesmo resultado


//Manipular conteúdo de texto

const element = document.querySelector('#meuId')

//.textContent => mostra o contéudo que está dentro do elemento

setTimeout(() => {
    element.textContent = 'Mudei de texto!'
}, 2000);

//Atributos

const meuLink = document.querySelector('a')

meuLink.setAttribute('href', "https://youtube.com") //mudando o destino do link

console.log(meuLink.getAttribute('href')) //pegando o atributo

console.log(meuLink.hasAttribute('target')); //verificando se um atributo existe

meuLink.removeAttribute('target') //removendo atributo

//Manipulação de classes do CSS
const meuElemento2 = document.querySelector('#meuId')
meuElemento2.classList.add('novaClasse') //adicionando uma classe que já existe no css a um elemento html

meuElemento2.classList.remove('minhaClasse') //removendo classe do css

meuElemento2.classList.toggle('outraClasse') //se a classe não existe ele coloca, mas se a classe já existe, ele remove

//Manipular o CSS

const elemento3 = document.querySelector('#meuId')
elemento3.style.color = 'blue'
elemento3.style.backgroundColor = 'rgba(0, 0, 0, 0.2)' //background-color => backgroundColor

//Navegação entre nós => navegação entre elementos

const elemento4 = document.querySelector('#meuInput')

const painho = elemento4.parentNode //pega o elemento pai do meuInput

console.log(painho)

//obter o primeiro filho

const primeiroFilho = painho.firstChild //pegando o primeiro filho do elemento pai

console.log(primeiroFilho)

const ultimoFilho = painho.lastChild //pegando o ultimo filho do elemento pai

console.log(ultimoFilho);

//Manipulação estrutura do DOM
const novoElemento = document.createElement('div')

console.log(novoElemento)

novoElemento.innerHTML = '<p>Minha div criada a partir do JavaScript</p>'

document.body.appendChild(novoElemento) //adicionando o novo elemento ao código html

document.body.insertBefore(novoElemento, painho) //adicionando a div depois de algum elemento pai

document.body.removeChild(meuElemento) //removendo elemento

//Eventos

//click

btn.addEventListener('click', function(){
    btn.textContent = 'Botão clicado!'
})

const botao = document.querySelector('#meuFormulario')

botao.addEventListener('mouseover', function(){ //mouse passando por cima
    console.log('O mouse passou aqui!')
})


//teclado

const elemento5 = document.querySelector('#meuInput')

elemento5.addEventListener('keydown', function(){
   console.log('Tecla pressionada') 
})