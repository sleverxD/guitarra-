input.onPinPressed(TouchPin.P0, function () {
    music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onPinPressed(TouchPin.P2, function () {
    music.play(music.tonePlayable(247, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onPinPressed(TouchPin.P1, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
