gsap.from("#i1", {
    x:-200,
    opacity:0,
    scale:0,
    duration:2,
    
})
gsap.from("#i2", {
    opacity:0,
    scale:0,
    duration:2,
    
})
gsap.from("#i3", {
    x:200,
    opacity:0,
    scale:0,
    duration:2,
    
})
gsap.from("#i4", {
    x:-200,
    opacity:0,
    scale:0,
    duration:2,
    
})
gsap.from("#i5", {
    opacity:0,
    scale:0,
    duration:2,
    
})
gsap.from("#i6", {
    x:200,
    opacity:0,
    scale:0,
    duration:2,
    
})

var main = document.querySelector('.main');
var cursor = document.querySelector('.cursor');
main.addEventListener("mousemove", function(dets) {
    
    console.log(dets);
})