//For some reason the reference to $ breaks the code on this page, but removing it breaks the code on other pages. idk man
/*Javascript file for the pistachio secrets html. Fulfill all requirements for the assignment here, even though some 
may have been fulfilled by prior pages. 
Requirements:
1 Timer
1 Selector
Insert/remove html elements
multiple themes
one anonymous function
3 event handlers
exception handling
at least 1 input that affects program output
at least 1 use of regex to compare data

The regex and input will both be in a search bar. The search bar has no indication of what to put, but inputting
certain strings will cause different things. It will switch your current page to one of a fictional planet or 
character if you put in the name of them, change themes if you type certain strings.
*/



document.addEventListener("DOMContentLoaded", () => {
        var top1 = $("#top1"); //selector
        var secrets_uncovered = $("#pstcho_secret_uncovered");
    //cycles images of pistachios
    setInterval(() => {
        //top1.innerHTML += x.toString();
        var slide = $("#slide"); //selector
        x ++;
        if (x > 3) {
            x = 1;
        }

        if (x==1) {
            slide.attr("src", "images/Pistachio_secret1.jpg");
            //console.log("Pistachio_secret1.jpg");
        }
        else if(x==2) {
            slide.attr("src", "images/Pistachio_secret2.jpg");
            //console.log(slide1.attr("src"));
        }
        else if(x==3) {
            slide.attr("src", "images/Pistachio_secret3.jpg");
            //console.log("Pistachio_secret3.jpg")
        }
    }, 3000);

<<<<<<< Updated upstream:Eclectic/Loredump_JS.js
    setInterval(() => {    //I have no clue why the number this outputs is so long. This serves as the second timer method.
        microsec +=.1
=======
    setInterval(() => {    //This is the timer at the top of the screen that counts up.
        microsec +=1
>>>>>>> Stashed changes:pistachio_secret_JS.js
        secrets_uncovered.html(microsec.toString());
    }, 100);

    
});