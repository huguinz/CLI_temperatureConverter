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

let resetProgram = 1
let converterHistory = []

const userImputs = () => {
	while (resetProgram == 1) {
		resetProgram = 2
		console.log('---------------------------- CONVERSOR DE TEMPERATURA -----------------------------')

		setTimeout(() => {
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
							const converterResult = importTemperatureFunction.temperatureConverter(temperatureValue, originScale, destinationScale)
							console.log(
								`${temperatureValue.toFixed(2)} graus ${originScale} equivalem a ${converterResult.toFixed(2)} ${destinationScale}!`
							)
							console.log('Calculando...')
							converterHistory.push(`${temperatureValue.toFixed(2)}° ${originScale} --> ${converterResult.toFixed(2)}° ${destinationScale}`)

							const resetOrCloseProgram = () => {
								while (resetProgram == 2) {
									resetProgram = 3
									dataEntry.question('Deseja fazer outra conversão? (S/N): ', (userResponse) => {
										if (userResponse == 's' || userResponse == 'S') {
											setTimeout(() => {
												resetProgram = 1
												return userImputs()
											}, 1500)

											console.log('Reiniciando programa...')
										} else if (userResponse !== 'n' && userResponse !== 'N') {
											console.log('ERRO: Opção inválida!')
											resetProgram = 2
											return resetOrCloseProgram()
										} else {
											setTimeout(() => {
												console.log('---------------------------- HISTÓRICO DE CONVERSÕES -----------------------------')
												console.log(converterHistory)
											}, 600)

											setTimeout(() => {
												console.log('-------------------------------- FIM DO PROGRAMA ---------------------------------')
											}, 1000)

											setTimeout(() => {
												dataEntry.close()
												process.exit(0)
											}, 1500)
										}
									})
								}
							}
							resetOrCloseProgram()
						}
					})
				})
			})
		}, 1500)
	}
}

userImputs()
