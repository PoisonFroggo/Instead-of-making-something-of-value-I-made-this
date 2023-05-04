const regexThreeLetter = /^\w{3}/; 
const pointlessRegex = /Gherkin/; //This is to test if I'm using regex correctly because I suck at it
const search1 = /Guh.jpg/
const pistachioRegex = /Pistachio/i;
const caseSensitiveUpper = /CASE SENSITIVE/;
const caseSensitiveLower = /case sensitive/;

document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById("search_btn").addEventListener("click", () => {
//        const a = 'abc def ghi?';
const regex = /^\w{3}\s\w{3}\s\w{3}\?/;
const search_bar = document.getElementById("Search_bar").value;
/*
if (regex.test(search_bar)) {
  window.location.href = "index.html";
}
else if (regexThreeLetter.test(search_bar)) {
    window.location.href = "pistachio_secrets.html"
}
else if (pointlessRegex.test(search_bar)) {
    //change css here
}*/

switch(true) {
    case regex.test(search_bar):
      window.location.href = "index.html";
      break;
    case pistachioRegex.test(search_bar):
      window.location.href = "pistachio_secrets.html";
      break;
    case caseSensitiveLower.test(search_bar):
      window.location.href = "Loredump.html"
      break;
      //window.location.href = 
  }

        /*
        search_bar.value = "Button Works";
        if(search_bar == regexThreeLetter){
            window.location.href = "He_Is_Praised.html";
        }
        if(pointlessRegex == search_bar){
            window.location.href = "index.html";
        }*/
    });
    
});