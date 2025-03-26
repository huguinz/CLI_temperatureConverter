/***********************************************************************************************
 * Objetivo: Criar um script que recebe uma temperatura e a converte para outra escala desejada.
 * Data: 16/03/2025
 * Autor: Hugo Lopes
 * Versão: 1.0
 **********************************************************************************************/

const temperatureConverter = (temperatureValue, originScale, destinationScale) => {
	let converterResult
	originScale = String(originScale).toUpperCase()
	destinationScale = String(destinationScale).toUpperCase()

	if (originScale == 'CELSIUS') {
		if (destinationScale == 'FAHRENHEIT') {
			converterResult = (temperatureValue * 9) / 5 + 32
		} else if (destinationScale == 'KELVIN') {
			converterResult = temperatureValue + 273.15
		}
	} else if (originScale == 'FAHRENHEIT') {
		if (destinationScale == 'CELSIUS') {
			converterResult = ((temperatureValue - 32) * 5) / 9
		} else if (destinationScale == 'KELVIN') {
			converterResult = ((temperatureValue - 32) * 5) / 9 + 273.15
		}
	} else if (originScale == 'KELVIN') {
		if (destinationScale == 'CELSIUS') {
			converterResult = temperatureValue - 273.15
		} else if (destinationScale == 'FAHRENHEIT') {
			converterResult = ((temperatureValue - 273.15) * 9) / 5 + 32
		}
	}
	return converterResult
}

console.log(temperatureConverter(10, 'celsius', 'kelvin'))

module.exports = {
	temperatureConverter
}
