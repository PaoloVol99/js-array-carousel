let slidesList = [
    "./img/01.jpg", 
    "./img/02.jpg",
    "./img/03.jpg",
    "./img/04.jpg",
    "./img/05.jpg"
]

const wrapper = document.createElement("div")
wrapper.classList.add('wrapper')
console.log(wrapper)
document.body.appendChild(wrapper);
const carousel = document.createElement("ul")
carousel.classList.add('carousel')
wrapper.appendChild(carousel)
const arrowWrapper = document.createElement("div")
arrowWrapper.classList.add('arrow-wrapper')
wrapper.appendChild(arrowWrapper)
console.log(wrapper)
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
    // const img = document.createElement("img")
    slideImages = document.querySelectorAll('img')
    slideElements[i].innerHTML = '<img src=' + slidesList[i] + ' alt="">'
    // slideImages[i].innerHTML.src = slidesList[i]
    
}

console.log('slideelements è ', slideElements)
console.log('slideimages è ', slideImages)
let firstSlide = slideElements[0]
firstSlide.classList.add ('active')
// firstSlide.classList.add('active')

// for (let i = 0; i <  5; i++) {
//     console.log(slideElements[1], slidesList[i])
//     slideElements[i].innerHTML = slidesList[i]
// }
// // let slidesList = document.querySelectorAll('.slide')
// console.log(slidesList)
let arrowRight = document.getElementById('arrow-right')
let arrowLeft = document.getElementById('arrow-left')
let activeSlideIndex = 0

arrowRight.addEventListener('click', function() {
    
    // let currentSlide = slidesList[activeSlideIndex]
    // currentSlide.classList.remove('active')
    
    // let nextSlide = slidesList[activeSlideIndex + 1]
    // nextSlide.classList.add('active')
    
    if (activeSlideIndex < slidesList.length - 1) {
        let currentSlide = slideElements[activeSlideIndex]
        currentSlide.classList.remove('active')
    
        let nextSlide = slideElements[activeSlideIndex + 1]
        nextSlide.classList.add('active')
        activeSlideIndex++
    }
})

arrowLeft.addEventListener('click', function() {
    
    // let currentSlide = slidesList[activeSlideIndex]
    // currentSlide.classList.remove('active')
    
    // let nextSlide = slidesList[activeSlideIndex - 1]
    // nextSlide.classList.add('active')

    // activeSlideIndex -= 1
    
    if (activeSlideIndex > 0) {
        let currentSlide = slideElements[activeSlideIndex]
        currentSlide.classList.remove('active')
    
        let nextSlide = slideElements[activeSlideIndex - 1]
        nextSlide.classList.add('active')
        activeSlideIndex -= 1
    }
})