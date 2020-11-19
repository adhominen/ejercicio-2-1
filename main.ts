basic.forever(function () {
    if (input.acceleration(Dimension.X) >= -25 && input.acceleration(Dimension.X) <= 25) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (input.acceleration(Dimension.X) > 26 && input.acceleration(Dimension.X) < 500) {
        basic.showLeds(`
            . . . # .
            . . # . .
            . # # # #
            . . # . .
            . . . # .
            `)
    } else if (input.acceleration(Dimension.X) > 500) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (input.acceleration(Dimension.X) <= -26 && input.acceleration(Dimension.X) > -500) {
        basic.showLeds(`
            . # . . .
            . . # . .
            # # # # .
            . . # . .
            . # . . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
