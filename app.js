/*****************************************************************************************************************************************************************
 * Objetivo: Criar um script que recebe uma função de conversão de temperatura, criar a interface na CLI para o usuário e realizar todas as validações necessárias.
 * Data: 16/03/2025
 * Autor: Hugo Lopes
 * Versão: 1.0
 *****************************************************************************************************************************************************************/

const importTemperatureFunction = require('./module/main.js')
const readline = require('readline')

const dataEntry = readline.createInterface({
	imput: process.stdin,
	output: process.stdout,
})

dataEntry.question('Digite o valor da temperatura: ', (temperatureValue) => {
	temperatureValue = parseFloat(temperatureValue)
	dataEntry.question('Digite a escala de origem(Celsius, Fahrenheit, Kelvin): ', (originScale) => {
		originScale = String(originScale)
		dataEntry.question('Digite a escala de destino(Celsius, Fahrenheit, Kelvin): ', (destinationScale) => {
			destinationScale = String(destinationScale)
			if (temperatureValue == '' || originScale == '' || destinationScale == '') {
				console.log('ERRO: Todos os campos são obrigatórios')
				dataEntry.close()
			} else if (
				temperatureValue == undefined ||
				temperatureValue == NaN ||
				temperatureValue == isNaN(temperatureValue) ||
				temperatureValue == false
			) {
				console.log('ERRO: Digite um valor numérico válido para a temperatura!')
				dataEntry.close()
			} else if (
				originScale != 'Celsius' ||
				originScale != 'Fahrenheit' ||
				originScale != 'Kelvin' ||
				destinationScale != 'Celsius' ||
				destinationScale != 'Fahrenheit' ||
				destinationScale != 'Kelvin'
			) {
				console.log('ERRO: Escolha uma escala válida (Celsius, Fahrenheit ou Kelvin)!')
				dataEntry.close()
			} else if (originScale == destinationScale) {
				console.log('ERRO: A escala de origem e destino não podem ser iguais!')
				dataEntry.close()
			} else if (
				(originScale == 'Kelvin' && originScale < 0) ||
				(destinationScale == 'Kelvin' && destinationScale < 0)
			) {
				console.log('ERRO: Kelvin não pode ser menor que 0!')
			} else {
				let converterResult = importTemperatureFunction.temperatureConverter(
					temperatureValue,
					originScale,
					destinationScale
				)
				console.log()
			}
		})
	})
})
