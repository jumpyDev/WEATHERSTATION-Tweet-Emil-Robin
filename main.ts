let Hum = 0
let current_WindDirection_List = ""
let Press = 0
let rainy = 0
let current_WindSpeed = 0
let wspeed = 0
let temp = 0
let wdir = ""
serial.redirectToUSB()
weatherbit.startWindMonitoring()
weatherbit.startRainMonitoring()
weatherbit.startWeatherMonitoring()
basic.showIcon(IconNames.Heart)
let x = true
basic.showString("R")
basic.showIcon(IconNames.Pitchfork)
loops.everyInterval(1000, function () {
	
})
loops.everyInterval(10000, function () {
    temp = weatherbit.temperature() / 100
    radio.sendNumber(temp)
    basic.showIcon(IconNames.Yes)
    basic.showNumber(weatherbit.temperature() / 100)
    wspeed = parseFloat("" + current_WindSpeed)
    basic.showIcon(IconNames.Sword)
    radio.sendNumber(wspeed)
    basic.showNumber(wspeed)
    rainy = parseFloat("" + rainy)
    radio.sendNumber(rainy)
    basic.showNumber(rainy)
    basic.showIcon(IconNames.Umbrella)
    Press = parseFloat("" + Press)
    basic.showIcon(IconNames.Chessboard)
    radio.sendNumber(Press / 25600)
    basic.showNumber(Press / 25600)
})
basic.forever(function () {
    radio.setGroup(12)
    current_WindSpeed = weatherbit.windSpeed()
    current_WindDirection_List = weatherbit.windDirection()
    rainy = weatherbit.rain()
    Hum = weatherbit.humidity()
    Press = weatherbit.pressure()
})
