radio.onReceivedNumber(function (receivedNumber) {
    a = receivedNumber
})
let a = 0
radio.setGroup(1)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
a = 0
basic.forever(function () {
    if (a == 1) {
        RingbitCar.forward()
        basic.pause(500)
        RingbitCar.turnright()
        basic.pause(100)
    } else {
        RingbitCar.brake()
    }
})
