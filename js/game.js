// Passwords
var passwords = ["LooseLeaf", "Belgium", "Avatar", "Dumpling"];

// Page Titles
var titles = ["The Beach", "Studying Abroad", "Distance", "Summer 2020", "Where we are now", "Final Clue"];

// Questions
var questions = ["What milk tea shop did we go to?", "What country did you almost confess to me in?"];

// Load Sequence
var seq = ["clue-text", "title-text", "part-num", "question-text"];

// Clue Data
var clue_num = 0;
var clues = [];

clues.push("Clue 1 Placeholder ".repeat(80), "Clue 2 Placeholder ".repeat(80));

$(function () {  // $(document).ready shorthand

    // Insert the first clue, title, part, and question
    loadSequence(clues[clue_num], titles[clue_num], "Part " + String(clue_num + 1), questions[clue_num]);

    // Fade in the elements
    var divs = document.querySelectorAll("body > div:not(.background)");
    for (var i = 0; i < divs.length; i++) {
        $(divs[i]).hide().fadeIn(3000);
    }

    // Get the form and the password input element
    const form = document.getElementById('login-form');
    let password = form.elements.namedItem("password");

    // Start the eventListener to check the password at every keystroke
    password.addEventListener('input', validate);
});


function loadSequence(clue, title, part, question) {
    toreplace = [clue, title, part, question];

    // TODO: Add fade in
    // Fade in the elements
    for (var i = 0; i < seq.length; i++) {
        x = document.getElementById(seq[i]);
        document.body.innerHTML = document.body.innerHTML.replace(x.innerHTML, toreplace[i]);
    }
}
function validate(e) {
    console.log(e.target.value)
    if (e.target.value == passwords[clue_num]) {

        // Change color to indicate correct password
        e.target.style.color = "#44E444";

        // Display the Hint

        // Fade in the new background, title, clue, and question
        clue_num += 1;
        $(document.getElementsByClassName("container")[0]).fadeOut(1000, function () {
            e.target.style.color = "white";
            loadSequence(clues[clue_num], titles[clue_num], "Part " + String(clue_num + 1), questions[clue_num]);
            $(document.getElementsByClassName("container")[0]).fadeIn(3000);

            // NOTE: We destroyed the element that the original event listener was attached to when we replaced the text
            // As such, we need to create a new eventListener
            
            // Get the form and the password input element
            const form = document.getElementById('login-form');
            let password = form.elements.namedItem("password");

            // Start the eventListener to check the password at every keystroke
            password.addEventListener('input', validate);
        });
    }
}


