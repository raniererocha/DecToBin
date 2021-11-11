export const binToDec = (input) => {
  
  if (parseInt(input) = NaN) {
   return console.log("Deu Ruim kkk")
  }
  return numberConverter(input)
}


const numberConverter = (input) => {
  let number = parseInt(input)
  let output = number.toString(2)
  
  return output
}