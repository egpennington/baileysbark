import quotes from "./quotes.js"
import imagesFile from './images.js'

// set up variables
const authorEl = document.getElementById("author")
const quoteEl = document.getElementById("quote")
const btnEl = document.getElementById("btn")

// function to generate quotes
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const randomQuote = quotes[randomIndex]
    const randomImage = generateImage()

    quoteEl.innerHTML = `
            <h1>${randomQuote.quote}</h1>
            `
    
    authorEl.innerHTML = `
            <h2 class="rt-side">- ${randomQuote.author}</h2>
            `
    document.body.style.backgroundImage = `url('${randomImage}')` 
}

// function to generate random images from js file
function generateImage() {
        const randomIndex = Math.floor(Math.random() * imagesFile.length);
        const imagePath = `./${imagesFile[randomIndex]}`;
        return imagePath;
    }

// event listener for button
btnEl.addEventListener("click", function() {
        location.reload()
})

generateRandomQuote()
