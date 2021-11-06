//Getting codeabbey input
let temperaturesAsFarenheit = input().split(' ')
let dataAmount = temperaturesAsFarenheit.shift()

function roundNum(numToRound) {
    const decimalNumber = (num) => {
      const pointAndDecimal = "0" + `${num}`.match(/\.\d+/)
      let result = pointAndDecimal != null ? parseFloat(pointAndDecimal) : null
      return result
    }
  
    let incremento = numToRound > 0 ? 1 : -1;
  
    while (decimalNumber(numToRound) != null && decimalNumber(numToRound) != 0) {
        console.log(decimalNumber(numToRound))
      if (decimalNumber(numToRound) == 0.5) {
        numToRound = numToRound + (1 - decimalNumber(numToRound));
      } else {
        if (decimalNumber(numToRound) > 0.5) {
          numToRound = numToRound + incremento * (1 - decimalNumber(numToRound));
        } else {
          if (decimalNumber(numToRound) < 0.5) {
            numToRound = numToRound + -incremento * decimalNumber(numToRound);
          }
        }
      }
    }
    return numToRound;
  }

const farenheitToCelsius = (farenheit) =>{
    let celusius = (farenheit - 32) * 5/9
    return celusius
}

let temperaturesAsCelsius = temperaturesAsFarenheit.map((currentTemperature) =>{
    let currentTemperatureAsCelsius = roundNum(farenheitToCelsius(currentTemperature))
    return currentTemperatureAsCelsius
})

output(temperaturesAsCelsius.join(' '))
