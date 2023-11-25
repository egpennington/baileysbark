# BaileysBark
 Inspirational daily quotes

#Scrimba boot camp exclusive solo project Module 2

This is a solution to the [Inspirational quotes boot camp solo project from Scrimba](https://discord.com/channels/684009642984341525/959014685586382879/1054502122118459482). Scrmimba is a fun and fast way of learning to code. The interactive courses and tutorials  challenges help improve coding skills by building realistic projects. Scrimba boot camp takes you from HTML basics through CSS to JavaScript, api's, React and more.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Build it from scratch
- Make sure to use:
  - Classes
  - Background-image
  - Google font: inter
  - Use a different background-image and quotes
  - Use flexbox
  - Change color of quotes box on :hover state
  - **Bonus**: Stretch goals
        - Place quote box exactly in the center
        - Use JavaScript to 
            - Display a new quote on every refresh
            - Display a random background-image on each refresh
- View the optimal layout for the interface depending on their device's screen size

### Screenshot

![image](https://github.com/egpennington/baileysbark/assets/53251137/3de0fbaa-4261-45e7-b99e-412d4efb1fbc)


### Links

- Solution URL: (https://github.com/egpennington/baileysbark/tree/main)
- Live Site URL: (https://baileysbark.netlify.app/)

## My process
- Looked at figma file.
- Looked at the project HTML, CSS, JS setup on Scrimba
- Then built from scratch with own HTML, CSS and JS

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

Relearned how to get random quotes to appear in innerHTML
Learned to use local.reload() to reload page on "click"
Main challenges were with getting JS to work properly

To see how you can add code snippets, see below:
Enjoyed getting HTML to work with JS innerHTML code, first using a quote place holder then working with innerHTML to code it

```<div id="quote">
      <!-- <h1>Today is your opportunity to build the tomorrow you want.</h1> -->
   </div>

   <div id="author">
      <!-- <h2>- Ken Poirot</h2> -->
   </div>
```
JS was a good challenge to find the location.reload()
And used import and export to use hard coded quotes list

import quotes from "./quotes.js"

```js
btnEl.addEventListener("click", function() {
        generateRandomQuote()
        location.reload()
})

document.body.style.background = "url('https://source.unsplash.com/random/1920x1280/?water,nature')"
```

Help with writing markdown, check out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


### Continued development

Next development will to learn to use API's to make this app more dynamic with unlimited quotes.

### Useful resources

- [Main resource 1](https://scrimba.com/scrim/cG8EnJHv) - This helped me set up the session. Then I took it and went from scratch.

## Author

- Website - [Emmett Pennington](https://www.penningtonmagic.com)
- Github - [egpennington](https://github.com/egpennington?tab=repositories)
- Twitter - [@emmettpenn23](https://www.twitter.com/emmettpenn23)

## Acknowledgments

Credit goes out to Scrimba for the great process of learning to code!
