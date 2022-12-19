// Custom JS
let textWrapper = document.querySelector(".title");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
);

anime.timeline().add({
    targets: ".title .letter",
    translateY: [-200, 0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 6500 + 30 * i,
});

TweenMax.staggerFrom(
    ".block_wrapper > .block", 2, {
        y: "110%",
        ease: Expo.easeInOut,
        delay: 1,
    }, 0.4 );

TweenMax.to(".block_wrapper", 2, {
    scale: window.outerWidth < 768 ? "1.3" : "2",
    y: window.outerWidth < 768 ? "12%" : "95%",
    height: "250px",
    ease: Expo.easeInOut,
    delay: 5.5,
});

TweenMax.staggerFrom(".navbar > div", 1.6, {
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut,
    delay: 6,
}, 0.08);

TweenMax.staggerFrom(".site-menu > li", 1, {
    opacity: 0,
    y: -100,
    ease: Power2.easeOut,
    delay: 6.5,
}, 0.1);