var tl = gsap.timeline();
var tl2 = gsap.timeline();

tl2.to(".main-img", {left: -600, duration: 14, ease: "none"})

tl.to(".logo", { duration: 0.5, scale: 1, opacity: 1, delay: 0.5})
tl.to("svg.ornament", {opacity: 1, delay: -0.5 })
tl.from(".ornament circle", {drawSVG: "0", duration: 2, ease: Power2.easeInOut});

tl.to(".right-black", { left: 0, duration: 1, delay: -3.5})

tl.to(".logo, .ornament", {opacity: 0, delay: 3})
// tl.to(".second-frame-black", {left: 0, delay: -0.5})

tl.to("svg.ornament-2, .logo-2", {opacity: 1, ease: "none"})
tl.to(".frame-2-text", {opacity: 1, ease: "none"})
tl.from(".ornament-2 .line-1", {duration: 2, drawSVG: "0"});

tl.to(".ornament-wrapper-2, .frame-2-text", {opacity: 0, delay: 3})

tl.to(".frame-3-text", {opacity: 1, ease: "none"})
tl.to(".link-music", {top: 0, opacity: 1})
tl.to(".link-ent", {top: 0, opacity: 1})
tl.to(".link-fb", {top: 0, opacity: 1})
tl.to(".link-web", {top: 0, opacity: 1})
tl.to(".button", {top: 0, opacity: 1})