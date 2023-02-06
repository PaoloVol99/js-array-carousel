let slidesList = document.querySelectorAll('.slide')
console.log(slidesList)
let arrowRight = document.getElementById('arrow-right')
let arrowLeft = document.getElementById('arrow-left')
let activeSlideIndex = 0

arrowRight.addEventListener('click', function() {
    
    // let currentSlide = slidesList[activeSlideIndex]
    // currentSlide.classList.remove('active')
    
    // let nextSlide = slidesList[activeSlideIndex + 1]
    // nextSlide.classList.add('active')
    
    if (activeSlideIndex < slidesList.length - 1) {
        let currentSlide = slidesList[activeSlideIndex]
        currentSlide.classList.remove('active')
    
        let nextSlide = slidesList[activeSlideIndex + 1]
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
        let currentSlide = slidesList[activeSlideIndex]
        currentSlide.classList.remove('active')
    
        let nextSlide = slidesList[activeSlideIndex - 1]
        nextSlide.classList.add('active')
        activeSlideIndex -= 1
    }
})