basic.forever(function () {
    if (input.isGesture(Gesture.TiltRight)) {
        basic.showArrow(ArrowNames.East)
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        basic.showArrow(ArrowNames.West)
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        basic.showArrow(ArrowNames.South)
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.LogoDown)) {
        basic.showArrow(ArrowNames.North)
    }
})
