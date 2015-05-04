//js
// ello mate name's jake
//I am chris. it's a pleasure to be here. fancy a martini? shaken non stirred'.

var dad = document.getElementById("container");

var mother;

var kids;

//alert(mother.childNodes);

//hmmm, oops thought it was a while loop for a sec. mother length is only 5 though?  10 dots (bars) per column, a total of 50 incrementations
//sorry, yeah.. so how many loops?
function bars(){

for (var i = 0; i <= 50; i++) {
//now?for(var i=0; i<=50; i++){ that could work hmm, * that should be 50 then.

    kids = document.createElement("div");
    kids.classList.add("dot");

    if (i < 10) {
        if (i === 0) {
            mother = document.createElement("div");
            mother.classList.add("column");
            dad.appendChild(mother);
        }
        mother.appendChild(kids);
    }
    if (i < 20) {
        if (i === 10) {
            mother = document.createElement("div");
            mother.classList.add("column");
            dad.appendChild(mother);            
        }
        mother.appendChild(kids);
    }
    if (i < 30) {
        if (i === 20) {
            mother = document.createElement("div");
            mother.classList.add("column");
            dad.appendChild(mother);            
        }
        mother.appendChild(kids);
    }
    if (i < 40) {
        if (i === 30) {
            mother = document.createElement("div");
            mother.classList.add("column");
            dad.appendChild(mother);            
        }
        mother.appendChild(kids);
    }
    if (i < 50) {
        if (i === 40) {
            mother = document.createElement("div");
            mother.classList.add("column");
            dad.appendChild(mother);            
        }
        mother.appendChild(kids);
    }

  }

};

bars();


//Vanilla JS Dom manipulation = Beastmode aha.
//Just fixed a typo, cheers.
//js

//the code ends here.
