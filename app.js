const button = document.querySelector('button')
const div = document.querySelectorAll('div')
const animateCSS = ['animate__rubberBand', 'animate__swing', 'animate__jello']

button.addEventListener('click', function() {
    for (let i = 0; i < div.length; i++) {
        const positionRandom = Math.floor(Math.random() * 200)
        const randomAnim = Math.floor(Math.random() * animateCSS.length)
        const x = animateCSS[randomAnim]

        div[i].style.transform = `translateX(${positionRandom}px)`
        div[i].classList.add('animate__animated')
        div[i].classList.add(x)
        div[i].style.animationDelay =  `${positionRandom}ms`
    }
})