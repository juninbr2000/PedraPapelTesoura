const itemsPC = document.querySelectorAll('.item')
const btnAction = document.querySelectorAll('.btn')
const mensagem = document.querySelector('.mensagem')
const selecionado = document.querySelectorAll('.selec')

const btnClick = (value) => {
    const numero = parseInt(Math.random() * 3)
    PcSelect(numero)

    btnAction[0].disabled = true
    btnAction[1].disabled = true
    btnAction[2].disabled = true
    
    selecionado[value].classList.remove('ocult')
    
    setTimeout(() => checkGame(numero, value), 500)
    setTimeout(() => resetGame(value, numero), 3000)
}


const PcSelect = (numero) => {
    itemsPC[numero].classList.remove('ocult')
}

const checkGame = (numero, value) => {
    if(numero === value){
        mensagem.innerHTML = '<p class="results">Empate</p>'
    } else if(numero === 0 && value === 1 || value === 2 && numero === 1 || value === 0 && numero === 2){
        mensagem.innerHTML = '<p class="results">Você Venceu!</p>'
    } else {
        mensagem.innerHTML = '<p class="results">Você Perdeu!</p>'
    };
}

const resetGame = (value, numero) => {
    itemsPC[numero].classList.add('ocult');
    selecionado[value].classList.add('ocult');
    btnAction[0].disabled = false
    btnAction[1].disabled = false
    btnAction[2].disabled = false
    mensagem.innerHTML = ''
} 