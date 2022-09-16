alert('Hello World!')//Mostra mensagem em uma janela assim que a página é aberta
const nomeUsuario = prompt('Olá, usuário, qual o seu nome?')
let num = Number(prompt('Olá,' +nomeUsuario+'digite um número: '))

// prompt('Olá usuário, qual o seu nome?') //Mostra uma janela que o usuário pode digitar
//Outra forma de concatenar é utilizando o + 'Bem vindo'+usuario+
/*const nomeUsuario = prompt('Digite seu nome: ')//Armazena o nome de um usuário em uma variável
let idade = Number(prompt(`Bem vindo ${nomeUsuario}, digite sua idade: `))
console.log(typeof idade)
let peso = Number.parseFloat(prompt(`Bacana ${nomeUsuario}, agora digite seu peso em Kg`))
let altura = Number.parseFloat(prompt(`Legal, agora digite sua altura em cm`))
alert(`${nomeUsuario}, você tem ${idade} de idade, pesa ${peso} Kgs e tem ${altura} cm de altura, no ano de 2023 você vai estar com ${++idade}, no ano de 2021 você tinha ${idade-2}`)**/

// alert('O sucessor de ' + num + 'é' +(num +1))
console.log(num++) // 5 // operador de pós-incremento
console.log(++num) // 7 // operador de pré-incremento

//operadores de decremento
console.log(num--) // pós-decremento
console.log(num)
console.log(--num) // pré-decremento

