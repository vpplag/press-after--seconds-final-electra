input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    Start = input.runningTime()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("HELLO!")
    soundExpression.hello.play()
})
input.onButtonPressed(Button.B, function () {
    Elapsed = input.runningTime() - Start
    basic.clearScreen()
    basic.showNumber(Math.abs(Seconds - Elapsed / 1000))
    basic.clearScreen()
    if (Math.abs(Seconds - Elapsed / 1000) <= 1) {
        basic.showIcon(IconNames.Happy)
        soundExpression.happy.play()
    } else {
        basic.showIcon(IconNames.Sad)
        soundExpression.sad.play()
    }
})
let Elapsed = 0
let Start = 0
let Seconds = 0
Seconds = randint(3, 8)
basic.showNumber(Seconds)
