input.onButtonPressed(Button.A, function () {
    RingbitCar.forward()
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.back()
})
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
