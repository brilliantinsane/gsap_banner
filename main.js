var tl = new TimelineMax();

var first = document.getElementsByClassName('background');
document.getElementById(['samsung', 'aliente', 'gb', 'arrow'])
var btn = document.getElementsByClassName('btn');

tl.from(first, 1 , {
    opacity: 0,
    delay: .2
})

tl.from(samsung, 0.7 , {opacity: 0})
  .from(aliente, 0.7, {opacity:0})
  .from(gb, 0.7, {opacity: 0})

tl.fromTo(samsung, .3, {scale:1}, { delay: 2, scale: 1.2, ease: Power1.easeIn, yoyo: true, repeat: 1})
tl.fromTo(aliente, .3, {scale:1}, {scale: 1.2, ease: Power1.easeIn, yoyo: true, repeat: 1})
tl.fromTo(gb, .3, {scale:1}, {scale: 1.2, ease: Power1.easeIn, yoyo: true, repeat: 1})

tl.from(btn, 1 , { opacity: 0, delay: 1})
  .fromTo(arrow, .3, {x: 0}, {delay: -1, x: 3, ease: Power2.easeIn, yoyo: true, repeat: 5})

