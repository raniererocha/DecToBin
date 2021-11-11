export const binToDec = (input) => {

  let verificacao = Number(input)

  if (verificacao != input) {
    return "Digite um número Válido"
  }
  let bin = []
  let dividendo = input
  let quociente = Math.floor(dividendo / 2)

  do {
      bin.unshift(dividendo % 2)
      quociente = Math.floor(dividendo/ 2)
      dividendo = quociente
  } while (quociente > 0);

  //bin.unshift(1)
  let result = bin.join('')
  
  return result
}