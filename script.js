let contador = 0
let prato =''
let valorPrato = 0
let bebida =''
let valorBebida = 0
let sobremesa =''
let valorSobremesa = 0
let valorTotal = 0

function escolher1(opcao1){
    const opcaoEscolhida = document.querySelector('.cardapio1 .selecionado')

    if (opcaoEscolhida !== null){
        opcaoEscolhida.classList.remove('selecionado')

        contador += -1
    }

    opcao1.classList.toggle("selecionado")

    let divprato = document.querySelector('.cardapio1 .selecionado .pedido')
    let divvalorPrato = document.querySelector('.cardapio1 .selecionado .valor')

    prato = divprato.innerHTML
    valorPrato = divvalorPrato.innerHTML
    valorPrato = (valorPrato.replace(/\D/g, '')/100).toFixed(2)
    
    contador += 1

    ativarbtn()
}

function escolher2(opcao2){
    const opcaoEscolhida = document.querySelector('.cardapio2 .selecionado')

    if (opcaoEscolhida !== null){
        opcaoEscolhida.classList.remove('selecionado')

        contador += -1
    }

    opcao2.classList.toggle("selecionado")

    let divbebida = document.querySelector('.cardapio2 .selecionado .pedido')
    let divvalorBebida = document.querySelector('.cardapio2 .selecionado .valor')

    bebida = divbebida.innerHTML
    valorBebida = divvalorBebida.innerHTML
    valorBebida = (valorBebida.replace(/\D/g, '')/100).toFixed(2)

    contador += 1

    ativarbtn()
}

function escolher3(opcao3){
    const opcaoEscolhida = document.querySelector('.cardapio3 .selecionado')

    if (opcaoEscolhida !== null){
        opcaoEscolhida.classList.remove('selecionado')

        contador += -1
    }

    opcao3.classList.toggle("selecionado")

    let divsobremesa = document.querySelector('.cardapio3 .selecionado .pedido')
    let divvalorSobremesa = document.querySelector('.cardapio3 .selecionado .valor')

    sobremesa = divsobremesa.innerHTML
    valorSobremesa = divvalorSobremesa.innerHTML
    valorSobremesa = (valorSobremesa.replace(/\D/g, '')/100).toFixed(2)
    contador += 1

    ativarbtn()
}

function ativarbtn(){

    if(contador === 3){
        const btn = document.querySelector(".botao")
        
        btn.classList.add('botao-verdin')

        btn.innerHTML = "Fechar pedido"

        valorTotal = Number(valorPrato) + Number(valorBebida) + Number(valorSobremesa)

    }
}

function popup(btn){

    const popup = document.querySelector(".pop-up")
    const item1 = document.querySelector(".item1")
    const valor1 = document.querySelector(".valor1")
    const item2 = document.querySelector(".item2")
    const valor2 = document.querySelector(".valor2")
    const item3 = document.querySelector(".item3")
    const valor3 = document.querySelector(".valor3")
    const valorpagar = document.querySelector(".valorsomado")

    if(btn.innerHTML === "Fechar pedido" ){
        item1.innerHTML = prato
        item2.innerHTML = bebida
        item3.innerHTML = sobremesa
        valor1.innerHTML = valorPrato
        valor2.innerHTML = valorBebida
        valor3.innerHTML = valorSobremesa
        valorpagar.innerHTML = valorTotal.toFixed(2)

        popup.classList.remove('sumir')
        popup.classList.add('aparecer')
    }

    else if(btn.innerHTML === "Cancelar" ){
        popup.classList.remove('aparecer')
        popup.classList.add('sumir')
    }

}

function whatsapp (tudocerto){
    const nome = prompt("Qual o seu nome?")
    const endereco = prompt("Qual o seu endereço?")

    let pedido = `Olá, gostaria de fazer o pedido:
    \n - Prato: ${prato}
    \n - Bebida: ${bebida}
    \n - Sobremesa: ${sobremesa}
    \n Total: R$ ${valorTotal.toFixed(2)}

    \n   Nome: ${nome}
    \n   Endereço: ${endereco}`

    let textwhats = encodeURIComponent(pedido)
    let linkwhats = "https://wa.me/5583998371434?text=" + textwhats

    window.open(linkwhats)
}