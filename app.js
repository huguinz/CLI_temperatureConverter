/*****************************************************************************************************************************************************************
 * Objetivo: Criar um script que recebe uma função de conversão de temperatura, criar a interface na CLI para o usuário e realizar todas as validações necessárias.
 * Data: 16/03/2025
 * Autor: Hugo Lopes
 * Versão: 1.0
 *****************************************************************************************************************************************************************/

const importTemperatureFunction = require('./module/main.js')
const readline = require('readline')

const dataEntry = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})

dataEntry.question('Digite o valor da temperatura: ', (temperatureValue) => {
	temperatureValue = parseFloat(temperatureValue.replace(',', '.'))
	dataEntry.question('Digite a escala de origem(Celsius, Fahrenheit, Kelvin): ', (originScale) => {
		originScale = String(originScale).toUpperCase()
		dataEntry.question('Digite a escala de destino(Celsius, Fahrenheit, Kelvin): ', (destinationScale) => {
			destinationScale = String(destinationScale).toUpperCase()
			if (isNaN(temperatureValue) || originScale == '' || destinationScale == '') {
				console.log('ERRO: Todos os campos são obrigatórios')
				dataEntry.close()
				process.exit(1)
			} else if (temperatureValue == undefined || temperatureValue != parseFloat(temperatureValue)) {
				console.log('ERRO: Digite um valor numérico válido para a temperatura!')
				dataEntry.close()
				process.exit(1)
			} else if (
				(originScale != 'CELSIUS' && originScale != 'FAHRENHEIT' && originScale != 'KELVIN') ||
				(destinationScale != 'CELSIUS' && destinationScale != 'FAHRENHEIT' && destinationScale != 'KELVIN')
			) {
				console.log('ERRO: Escolha uma escala válida (Celsius, Fahrenheit ou Kelvin)!')
				dataEntry.close()
				process.exit(1)
			} else if (originScale == destinationScale) {
				console.log('ERRO: A escala de origem e destino não podem ser iguais!')
				dataEntry.close()
				process.exit(1)
			} else if (originScale == 'KELVIN' && temperatureValue < 0) {
				console.log('ERRO: Kelvin não pode ser menor que 0!')
				dataEntry.close()
				process.exit(1)
			} else {
				return finalResult(temperatureValue, originScale, destinationScale)
			}
		})
	})
})
const finalResult = (temperatureValue, originScale, destinationScale) => {
	const converterResult = importTemperatureFunction.temperatureConverter(temperatureValue, originScale, destinationScale)
	console.log(`${temperatureValue} graus ${originScale} equivalem a ${converterResult.toFixed(2)} ${destinationScale}!`)
	dataEntry.close()
	process.exit(0)
}
