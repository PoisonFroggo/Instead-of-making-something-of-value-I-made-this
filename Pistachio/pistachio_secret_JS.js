/*

The timer will be used to cycle between the three images 'pistachio_secret1, pistachio_secret2, and pistachio_secret3'
Selectors will be easy enough to figure out how to use
For event methods, it would be cool to have one for each image being clicked, I think that should be easy enough to do.
I assume that the Methods need to be separate from the Event Methods, so make them their own things
*/

//Here I removed Jquery references because I don't like Jquery



    microsec = 0;
    x = 1;
document.addEventListener("DOMContentLoaded", () => {
        var top1 = document.getElementById("top1"); //selector
        var secrets_uncovered = document.getElementById("pstcho_secret_uncovered"); //Jquery references are removed, idk why this still works or why it stops working when I remove Jquery stuff. 
    //cycles images of pistachios
    setInterval(() => {
        //top1.innerHTML += x.toString();
        var slide = document.getElementById("slide"); //selector
        x ++;
        if (x > 3) {
            x = 1;
        }

        if (x==1) {
            slide.setAttribute("src", "../images/Pistachio_secret1.jpg");
            //console.log("Pistachio_secret1.jpg");
        }
        else if(x==2) {
            slide.setAttribute("src", "../images/Pistachio_secret2.jpg");
            //console.log(slide1.attr("src"));
        }
        else if(x==3) {
            slide.setAttribute("src", "../images/Pistachio_secret3.jpg");
            //console.log("Pistachio_secret3.jpg")
        }
    }, 3000);

    setInterval(() => { //previously this did not round, and spit out a massive string of numbers due to floating point errors. I fixed this by using whole numbers
        microsec++;
        secrets_uncovered.innerHTML = microsec.toString();
    }, 200);

    
});