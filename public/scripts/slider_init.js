import ChiefSlider from "./slider";

const elms = document.querySelectorAll('.slider');
console.log(elms)
for (let i = 0, len = elms.length; i < len; i++) {
    new ChiefSlider(elms[i], {
        loop: false,
        autoplay: false,
        interval: 5000,
        swipe: true,
        refresh: true
    })
}