let contador = 0

function escolher1(opcao1){
    const opcaoEscolhida = document.querySelector('.cardapio1 .selecionado')

    if (opcaoEscolhida !== null){
        opcaoEscolhida.classList.remove('selecionado')

        contador += -1
    }

    opcao1.classList.toggle("selecionado")

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

    contador += 1

    ativarbtn()
}

function ativarbtn(){

    if(contador === 3){
        const btn = document.querySelector(".botao")
        
        btn.classList.add('botao-verdin')

        btn.innerHTML = "Fechar pedido"
    }
}