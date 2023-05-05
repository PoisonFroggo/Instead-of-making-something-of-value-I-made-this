/*This is a library for the search bar terms, as in what you can put in and what the 
search bar will spit out as a result. It is all in the form of regex because idk man
*/

const regexThreeLetter = /^\w{3}/; 
const pointlessRegex = /Gherkin/; //This is to test if I'm using regex correctly because I suck at it
const search1 = /Guh.jpg/
const pistachioRegex = /Pistachio/i;
const caseSensitiveUpper = /CASE SENSITIVE/;
const caseSensitiveLower = /case sensitive/;
const areYouStupid = /guh/; //Modify this regex to take in a credit card number
const regex = /^\w{3}\s\w{3}\s\w{3}\?/;
const game = /game/i;


document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById("search_btn").addEventListener("click", () => {

const search_bar = document.getElementById("Search_bar").value;

//This following case statement requires the ../  nomenclature due to the fact that it is being called from a folder and needs to be set back a directory to go to the correct folder
switch(true) {
    case regex.test(search_bar):
      window.location.href = "../Base/index.html";
      break;
    case pistachioRegex.test(search_bar):
      window.location.href = "../Pistachio/pistachio_secrets.html";
      break;
    case caseSensitiveLower.test(search_bar):
      window.location.href = "../CaseSensitivity/i_hate_case_sensitivity_lower.html"
      break;
    case caseSensitiveUpper.test(search_bar):
      window.location.href = "../CaseSensitivity/i_hate_case_sensitivity_upper.html"
      break;
    case game.test(search_bar):
      window.location.href = "../Gaem/Gaem.html"
      break;
    case regexThreeLetter.test(search_bar):
      window.location.href = "../Eclectic/Loredump.html"
      break;
  }

    });
    
});