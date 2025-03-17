/***********************************************************************************************
 * Objetivo: Criar um script que recebe uma temperatura e a converte para outra escala desejada.
 * Data: 16/03/2025
 * Autor: Hugo Lopes
 * Versão: 1.0
 **********************************************************************************************/

const temperatureConverter = (temperatureValue, originScale, destinationScale) => {
	let converterResult

	if (originScale == 'Celsius') {
		if (destinationScale == 'Fahrenheit') {
			converterResult = (temperatureValue * 9) / 5 + 32
		} else if (destinationScale == 'Kelvin') {
			converterResult = temperatureValue + 273.15
		}
	} else if (originScale == 'Fahrenheit') {
		if (destinationScale == 'Celsius') {
			converterResult = ((temperatureValue - 32) * 5) / 9
		} else if (destinationScale == 'Kelvin') {
			converterResult = ((temperatureValue - 32) * 5) / 9 + 273.15
		}
	} else if (originScale == 'Kelvin') {
		if (destinationScale == 'Celsius') {
			converterResult = temperatureValue - 273.15
		} else if (destinationScale == 'Fahrenheit') {
			converterResult = ((temperatureValue - 273.15) * 9) / 5 + 32
		}
	}
	return converterResult
}

console.log(temperatureConverter(350, 'Kelvin', 'Celsius'))

module.exports = {
	temperatureConverter,
}
