input.onButtonPressed(Button.A, function () {
    temp = Math.trunc(weatherbit.temperature())
    radio.sendString("" + (temp))
    basic.showIcon(IconNames.Yes)
    basic.showNumber(weatherbit.temperature() / 100)
})
input.onButtonPressed(Button.B, function () {
    wspeed = "" + current_WindSpeed
    basic.showIcon(IconNames.Sword)
    radio.sendString("" + (wspeed))
    basic.showString("" + (wspeed))
})
let current_WindDirection_List = ""
let current_WindSpeed = 0
let wspeed = ""
let temp = 0
let rain = 0
let wdir = ""
serial.redirectToUSB()
weatherbit.startWindMonitoring()
weatherbit.startRainMonitoring()
weatherbit.startWeatherMonitoring()
rain = rain
basic.showIcon(IconNames.Heart)
let x = true
basic.showString("R")
basic.showIcon(IconNames.Pitchfork)
loops.everyInterval(1000, function () {
	
})
basic.forever(function () {
    radio.setGroup(12)
    current_WindSpeed = weatherbit.windSpeed()
    current_WindDirection_List = weatherbit.windDirection()
    serial.writeLine("" + current_WindSpeed + "," + current_WindDirection_List)
})
