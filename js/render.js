import { binToDec } from './converter.js'

let input = document.getElementById("valor")
let buttom = document.getElementById("converter")
let resultado = document.getElementById("resultado")


const render = (i) => {
    switch (i) {
        case NaN:
            resultado.innerHTML = "Digite um numero Válido"
            break;
    
        default:
            resultado.innerHTML = i
            break;
    }
}


buttom.addEventListener("click", () => {
    render(binToDec(input.value))
})
