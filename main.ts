input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    led.plotBrightness(4, 4, 33)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        # # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        # # . . .
        # # # . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        # # . . .
        # # # . .
        # # # # .
        `)
    basic.showLeds(`
        # . . . .
        # # . . .
        # # # . .
        # # # # .
        # # # # #
        `)
    basic.showLeds(`
        # # . . .
        # # # . .
        # # # # .
        # # # # #
        . # # # #
        `)
    basic.showLeds(`
        # # # . .
        # # # # .
        # # # # #
        . # # # #
        . . # # #
        `)
    basic.showLeds(`
        # # # # .
        # # # # #
        . # # # #
        . . # # #
        . . . # #
        `)
    basic.showLeds(`
        # # # # #
        . # # # #
        . . # # #
        . . . # #
        . . . . #
        `)
    basic.showLeds(`
        . # # # #
        . . # # #
        . . . # #
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . # # #
        . . . # #
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # #
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function on_forever() {
    
})
