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

  $('#snail_img').on('click','img',function(){alert('it works');})

  snail_img.click(function(){
    window.location.href='pistachio_secrets.html';
 })