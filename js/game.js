// Passwords
var passwords = ["LooseLeaf", "Belgium", "Avatar", "Dumpling", "RoastedOolong", "JodieMa"];

// Page Titles
var titles = ["The Beach", "Studying Abroad", "Distance", "Summer 2020", "Where we are now", "Final Clue", "Happy Anniversary"];

// Questions
var questions = ["What milk tea shop did we go to?",
    "What country did you almost confess to me in?",
    "Which show did we watch in quarantine?",
    "What keychain kept popping up during our calls?",
    "What flavor of milk tea do you always get?",
    "What is the name of my favorite sweet and ticklish dumpling?"
];

// Hints
var hints = ["I like you more than html, css, and javascript <3.",
    "I love everything about you, from your amazing smile to the way you get shy when I compliemnt you.",
    "I cherish every second I've gotten to spend with you and all the time I'll get in the future.",
    "The way you look at me always makes me blush and gives me butterflies.",
    "With everything we've been through and everything we've put behind us, I appreaciate that you were there for all of it.",
    "I love that you can be yourself around me and I can be myself."
];

// Load Order Sequence
var seq = ["clue-text", "title-text", "part-num", "question-text", "hint-text"];

// Clue Data
var clue_num = 0;
var clues = [];

clues.push("Clue 1 Placeholder ".repeat(80), "Clue 2 Placeholder ".repeat(80));

$(function () {  // $(document).ready shorthand

    // Insert the first clue, title, part, and question
    loadSequence(clues[clue_num], titles[clue_num], "Part " + String(clue_num + 1), questions[clue_num], hints[clue_num]);
    
    // Fade in the elements
    var divs = document.querySelectorAll("body > div:not(.background) >div:not(.hint-container)");
    for (var i = 0; i < divs.length; i++) {
        $(divs[i]).hide().fadeIn(3000);
    }

    // Get the form and the password input element
    const form = document.getElementById('login-form');
    let password = form.elements.namedItem("password");

    // Start the eventListener to check the password at every keystroke
    password.addEventListener('input', validate);

    $('.hint-container').hide();
});

function loadSequence(clue, title, part, question, hint) {
    toreplace = [clue, title, part, question, hint];

    // Replace the relevant text
    for (var i = 0; i < seq.length; i++) {
        x = document.getElementById(seq[i]);
        document.body.innerHTML = document.body.innerHTML.replace(x.innerHTML, toreplace[i]);
        console.log(x);
    }
}

function loadNextPage() {

    if (clue_num < hints.length) {
        loadNextPart();
    }

    else {
        loadFinalPart();
    }
}

function loadNextPart() {
    $(document.getElementsByClassName("hint-container")[0]).fadeOut(1000, function () {
        loadSequence(clues[clue_num], titles[clue_num], "Part " + String(clue_num + 1), questions[clue_num], hints[clue_num]);
        $(document.getElementsByClassName("container")[0]).fadeIn(3000);

        // NOTE: We destroyed the element that the original event listener was attached to when we replaced the text
        // As such, we need to create a new eventListener

        // Get the form and the password input element
        const form = document.getElementById('login-form');
        let password = form.elements.namedItem("password");

        // Start the eventListener to check the password at every keystroke
        password.addEventListener('input', validate);

        window.scrollTo(0, 0);
    });
}

function loadFinalPart() {
    $(document.getElementsByClassName("hint-container")[0]).fadeOut(1000, function () {
        loadSequence(clues[clue_num], titles[clue_num], "Part " + String(clue_num + 1), questions[clue_num], hints[clue_num]);
        $(document.getElementsByClassName("container")[0]).fadeIn(3000);

        // NOTE: We destroyed the element that the original event listener was attached to when we replaced the text
        // As such, we need to create a new eventListener

        // Get the form and the password input element
        const form = document.getElementById('login-form');
        let password = form.elements.namedItem("password");

        // Start the eventListener to check the password at every keystroke
        password.addEventListener('input', validate);

        window.scrollTo(0, 0);
    });
}

function validate(e) {
    if (e.target.value == passwords[clue_num]) {

        // Change color to indicate correct password
        e.target.style.color = "#44E444";

        if (clue_num < passwords.length) {
            // Fade in the new background, title, clue, and question
            clue_num += 1;
            $(document.getElementsByClassName("container")[0]).fadeOut(2000, function () {
                e.target.style.color = "white";

                $(document.getElementsByClassName("hint-container")[0]).fadeIn(1000);
            });
        }
    }
}