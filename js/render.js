import { binToDec } from './converter.js'

let input = document.getElementById("valor")
let buttom = document.getElementById("converter")
let resultado = document.getElementById("resultado")

const render = (i) => resultado.innerHTML = i

buttom.addEventListener("click", () => {
    render(binToDec(input.value))
   // render(input.value.charCodeAt())
})