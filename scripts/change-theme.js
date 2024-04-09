"use strict"

// Getting theme button.
const ThemeButton = document.getElementById('theme-button');

// Initializing currentTheme with 1.
let currentTheme = 1;

// Adding event listener to ThemeButton so that when it clicked it change the theme of the app accordingly and toggles the switch based on current theme.
ThemeButton.addEventListener('click', () => {

    // Getting theme-link element.
    const LinkTheme = document.getElementById('theme-link');
    
    if (currentTheme === 1) {   // Add theme 2

        ThemeButton.classList.add('theme2-active');
        LinkTheme.href = `./styles/theme2.css`;

    } else if (currentTheme === 2) {    // Add theme 3

        ThemeButton.classList.remove('theme2-active');
        ThemeButton.classList.add('theme3-active');
        LinkTheme.href = `./styles/theme3.css`;

    } else if (currentTheme === 3) {    // Add theme 2

        ThemeButton.classList.remove('theme3-active');
        ThemeButton.classList.add('theme2-active');
        LinkTheme.href = `./styles/theme2.css`;

    } else if (currentTheme === 4) {    // Add theme 1

        ThemeButton.classList.remove('theme2-active');
        LinkTheme.href = `./styles/theme1.css`;
        currentTheme = 1;

        return;
    }

    // Update the currentTheme value.
    currentTheme++;
})