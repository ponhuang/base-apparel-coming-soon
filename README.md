# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

[Solution URL](https://github.com/ponhuang/base-apparel-coming-soon)
[Live site URL](https://ponhuang.github.io/base-apparel-coming-soon/)

## My process

### Built with

- Semantic HTML5 markup
- node-sass
- SCSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow

### What I learned

1.) The import file order in SASS is important, put the variable on the very first top to avoide "Undefined variable".

```scss
@import "variables";
@import "base";
@import "layout";
@import "media";
```

2.) Learn how to make email validation

```js
form.addEventListener("submit", (e) => {
  // prevent form from submitting
  e.preventDefault();
  if (email.value == "") {
    errorMessage.innerText = "Email cannot be blank";
    form.classList.add("error");
    form.classList.remove("success");
  } else if (!email.value.match(regexEmail)) {
    // if regexEmail is not matched user's enter value
    errorMessage.innerText = "Please enter a valid email";
    form.classList.add("error");
    form.classList.remove("success");
  } else {
    form.classList.add("success");
    form.classList.remove("error");
  }
});
```

### Continued development

### Useful resources

- [Email Validation](https://www.youtube.com/watch?v=ouCTndDS4zk) This YouTube video help me to know how to make email validation with HTML&CSS and JavaScript

- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

Pon Huang

[Intagram](https://www.instagram.com/ponhuang/)
[Art Blog](https://une722.wordpress.com)

## Acknowledgments
