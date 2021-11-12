export const binToDec = (input) => {
  
  
  return numberConverter(input)
}


const numberConverter = (input) => {
  let number = parseInt(input)
  let output = number.toString(2)
  
  return output
}