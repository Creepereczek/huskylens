serial.redirect(
SerialPin.P1,
SerialPin.P0,
BaudRate.BaudRate9600
)
serial.setTxBufferSize(8)
serial.setRxBufferSize(8)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
let x = 0
let y = 0
huskylens.writeOSD("" + x + ";" + y, 0, 0)
basic.forever(function () {
    huskylens.request()
    huskylens.writeLearn1(1)
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        x = huskylens.readeBox(1, Content1.xCenter)
        y = huskylens.readeBox(1, Content1.yCenter)
        huskylens.writeOSD("" + x + ";" + y, 0, 0)
        serial.writeNumber(0)
        huskylens.forgetLearn()
    }
    basic.clearScreen()
})
