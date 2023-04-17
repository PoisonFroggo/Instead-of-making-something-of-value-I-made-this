const $ = selector => document.querySelector(selector);
/*Javascript file for the pistachio secrets html. Fulfill all requirements for the assignment here, even though some 
may have been fulfilled by prior pages. 
Requirements:
3 JQuery Selectors
3 JQuery Methods
3 JQuery Event Methods
At least 1 timer

The timer will be used to cycle between the three images 'pistachio_secret1, pistachio_secret2, and pistachio_secret3'
Selectors will be easy enough to figure out how to use
For event methods, it would be cool to have one for each image being clicked, I think that should be easy enough to do.
I assume that the Methods need to be separate from the Event Methods, so make them their own things
*/





    length = 300;
    x = 1;
    y = 1;
document.addEventListener("DOMContentLoaded", () => {
    var  isVisible = false;
    setInterval(() => {
        var top = $("#top");
        var slide = $("slide");
        top.innerHTML += x.toString();
        x ++;
        y ++;
        if (x > 3) {
            x = 1;
        }

        if (x==1) {
            slide.attr("src", "Pistachio_secret1.jpg");
        }
        else if(x==2) {
            slide.attr("src", "Pistachio_secret2.jpg");
        }
        else if(x==3) {
            slide.attr("src", "Pistachio_secret3.jpg");
        }
    }, 3000);
});