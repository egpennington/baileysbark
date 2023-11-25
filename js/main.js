import quotes from "./quotes.js"
// set up variables
const authorEl = document.getElementById("author")
const quoteEl = document.getElementById("quote")
const btnEl = document.getElementById("btn")


// function to generate quotes
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const randomQuote = quotes[randomIndex]

    quoteEl.innerHTML = `
            <h1>${randomQuote.quote}</h1>
            `
    
    authorEl.innerHTML = `
            <h2 class="rt-side">- ${randomQuote.author}</h2>
            `
    document.body.style.background = "url('https://source.unsplash.com/random/1920x1280/?water,nature')"
}

// random quote at start
generateRandomQuote()

// event listener for button
btnEl.addEventListener("click", function() {
        location.reload()
})

