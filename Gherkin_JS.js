

//check if the player has actually decided, switching the form's reference if the button is clicked



document.addEventListener("DOMContentLoaded", () => {
    //This adds the portion at the top of the page, adding the phrase 'Gherkins Above,
    //Gnomes Below' in addition adding two buttons
    elem = document.createElement("div");
    GrknIcon = document.createElement("button");
    NomIcon = document.createElement("button");

    //gives the IDs to the generated elements
    elem.id = 'GAGB';
    GrknIcon.id = 'GrknIcon';
    NomIcon.id= 'NomIcon';

    /*generates the text/images for the elements. Proud of this little pointless bit of work
    Noticeable problems: The GrknIcon and NomIcon are added as innerHTML of the elem. If 
    elem is edited, these buttons are removed. Problem probably won't happen, but would like
    to avoid it anyway*/
    elem.innerHTML = 'Gherkin Above, Gnomes Below';
    GrknIcon.innerHTML = '<img src= "GherkinIcon.png" height="60"></img>';
    NomIcon.innerHTML = '<img src= "GnomeIcon.png" height="60"></img>';

    document.body.insertBefore(elem,document.body.childNodes[0]);
    document.getElementById('GAGB').prepend(GrknIcon);
    document.getElementById('GAGB').appendChild(NomIcon);


    //When gnome button is pressed, switch the CSS file referenced to Gnome_Source.css. When
    //Gherkin button is pressed, switch back to Index_Source.css. If sufficient time is left
    //over, change the Index_Source.css filename to Gherkin_Source.css for consistency
    //#######################################################################################
    //Gherkin button event listener
    $("#GrknIcon").addEventListener("click", () => {
        //document.getElementById('GAGB').innerHTML ='Gherkin Button Works'; //This line checks if the buttons are working
        document.getElementById('stylesheet').setAttribute("href", "Index_Source.css"); //Make this a callable function later
    });
    //#######################################################################################
    //Gnome button event listener
    $("#NomIcon").addEventListener("click", () => {
        //document.getElementById('GAGB').innerHTML ='Gnome Button Works'; //This line checks if the buttons are working
        document.getElementById('stylesheet').setAttribute("href", "Gnome_Source.css"); //Make this a callable function later
        
    });
    


    //Change the image between the angry and happy image whenever the user clicks a button
        //Meets requirements for event handler 1
    $("#GnomeBtn").addEventListener("click", () => {
            document.getElementById("Gherkin_image").src="AngryGherkin.png"
    });

    $("#GherkinBtn").addEventListener("click", function() {
        document.getElementById("Gherkin_image").src="HappyGherkin.png"
    });
    //calls the function 'check decision' when the decision button is clicked
    $('#BtnDecision').addEventListener("click", () => {
        CheckDecision();
    });
    //checks if the radio button selected is the correct button or not
    function CheckDecision(){
        var ele = document.getElementsByName('GorG');
        var e = "";
          
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
            {
                //window.alert(ele[i].value);
                if(ele[i].value == "Gherkin")
                {
                    $('#WillPraise').submit();
                }
                else{
                    document.getElementById("PraiseCommand").innerHTML=("Praise the Gherkin");
                    document.getElementById("WorshipDemand").innerHTML=("You must Praise");
                }
            }
                /*window.alert(ele[i].value);
                if(ele[i].value == "Gnome"){
                    window.alert("Praise the Gherkin")}
                else {
                    $('#form').submit;
                }*/
                
        }
    }
    
});