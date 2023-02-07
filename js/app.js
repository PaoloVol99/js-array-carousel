let slidesList = [
    "./img/01.jpg", 
    "./img/02.jpg",
    "./img/03.jpg",
    "./img/04.jpg",
    "./img/05.jpg"
]

const wrapper = document.createElement("div")
wrapper.classList.add('wrapper')
document.body.appendChild(wrapper);
const carousel = document.createElement("ul")
carousel.classList.add('carousel')
wrapper.appendChild(carousel)
const arrowWrapper = document.createElement("div")
arrowWrapper.classList.add('arrow-wrapper')
wrapper.appendChild(arrowWrapper)
let arrowsElements = `
<i id="arrow-left" class="arrow arrow-left fa-solid fa-chevron-left"></i>
<i id="arrow-right" class="arrow arrow-right fa-solid fa-chevron-right"></i>
`
arrowWrapper.innerHTML = arrowsElements

let slideElements

for (let i = 0; i < 5; i++) {
    const slide = document.createElement("li")
    slide.classList.add('slide')
    carousel.appendChild(slide)
    slideElements = document.querySelectorAll("li")
    slideImages = document.querySelectorAll('img')
    slideElements[i].innerHTML = '<img src=' + slidesList[i] + ' alt="">'
}

let firstSlide = slideElements[0]
firstSlide.classList.add ('active')

let arrowRight = document.getElementById('arrow-right')
let arrowLeft = document.getElementById('arrow-left')
let activeSlideIndex = 0

arrowRight.addEventListener('click', function() {

    let currentSlide = slideElements[activeSlideIndex]
    let nextSlide = slideElements[activeSlideIndex + 1]
    
    if (activeSlideIndex < slideElements.length - 1) {
        currentSlide.classList.remove('active')
    
        nextSlide.classList.add('active')
        activeSlideIndex++
        console.log(carousel)
    } else {
        activeSlideIndex -= slideElements.length 
        currentSlide.classList.remove('active')
        nextSlide = slideElements[activeSlideIndex + 1]
        nextSlide.classList.add('active')
        activeSlideIndex++
        console.log(carousel)
    }

})

arrowLeft.addEventListener('click', function() {

    let currentSlide = slideElements[activeSlideIndex]
    let nextSlide = slideElements[activeSlideIndex - 1]
    
    if (activeSlideIndex > 0) {
        currentSlide.classList.remove('active')
    
        nextSlide.classList.add('active')
        activeSlideIndex -= 1
    } else {
        activeSlideIndex += slideElements.length 
        console.log(currentSlide)
        currentSlide.classList.remove('active')
        nextSlide = slideElements[activeSlideIndex - 1]
        nextSlide.classList.add('active')
        activeSlideIndex -= 1
        console.log(carousel)

}
})