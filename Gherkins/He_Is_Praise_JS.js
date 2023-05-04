const $ = selector => document.querySelector(selector);

//check if the player has actually decided, switching the form's reference if the button is clicked



document.addEventListener("DOMContentLoaded", () => {
    
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content.*/
function expandText(ElemID) {
    document.getElementById(ElemID).classList.toggle("show");
  };

  var snail_img = $('#snail_img');

//  $('#snail_img').on('click','img',function(){alert('it works');})

  snail_img.addEventListener("click", function(){
    window.location.href='pistachio_secrets.html';
 })

 const regexThreeLetter = /^\w{3}/; //I don't know what's wrong here, I actually copy pasted this code and it doesn't work
const pointlessRegex = /Gherkin/; //This is to test if I'm using regex correctly because I suck at it

const search1 = /Guh.jpg/

document.addEventListener("DOMContentLoaded", () => {
    
    document.getElementById("search_btn").addEventListener("click", () => {
//        const a = 'abc def ghi?';
const regex = /^\w{3}\s\w{3}\s\w{3}\?/;
const search_bar = document.getElementById("Search_bar").value;

if (regex.test(search_bar)) {
  window.location.href = "index.html";
}
else if (regexThreeLetter.test(search_bar)) {
    window.location.href = "pistachio_secrets.html"
}
else if (pointlessRegex.test(search_bar)) {
    //change css here
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