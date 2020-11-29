$(function () {  // $(document).ready shorthand
  $('.background-text').hide().fadeIn(1500);
  $('.hidden').hide();
  $('.secret').hide();
});

var clicks = 0;
var CLICK_THRESHOLD = 5;

function triggerHidden() {
  clicks += 1;

  if (clicks == CLICK_THRESHOLD) {
    $('.hidden').fadeIn(1500);
    $('input.hidden').focus();
  }
};  

// Get the form and the password input element
const form = document.getElementById('login-form');
let password = form.elements.namedItem("password");

// Start the eventListener to check the password at every keystroke
password.addEventListener('input', validate);

function validate(e) {
  if (e.target.name == "password") {
    if (e.target.value == "temptemp") {
      // Change color to indicate correct password
      e.target.style.color = "#44E444"; 

      // Fade out all the elements 
      var stage1 = document.querySelectorAll('.background-text, .hidden, .footer');
      var stage2 = document.querySelectorAll('.secret');

      for (var i = 0; i < stage1.length; i++) {
        $(stage1.item(i)).fadeOut(3000, function() {
          for (var j = 0; j < stage2.length; j++) {
            $(stage2.item(j)).fadeIn(3000);
          }
        });
      }
    }
  }
}

function loadRules() {

}