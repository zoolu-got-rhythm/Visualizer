//js
// ello mate name's jake
//I am chris. it's a pleasure to be here. fancy a martini? shaken non stirred'.

var dad = document.getElementsByClassName("container");

var mother;

var kids;

//alert(mother.childNodes);


//hmmm, oops thought it was a while loop for a sec. mother length is only 5 though?  10 dots (bars) per column, a total of 50 incrementations
//sorry, yeah.. so how many loops?
function bars(){

for (var i = 0; i < 50; i++) {   //now?for(var i=0; i<=50; i++){ that could work hmm, * that should be 50 then.

  kids = document.createElement("div");
  kids.classList.add("dot");

  //alert(mother.length);
  //alert(mother.children);
  //var c = document.body.children;

  if(i < 10 ){
    if(i === 0){
      //alert("is being read");
       mother = document.createElement("div");
       mother.classList.add("column");
       dad.appendChild(mother);

    }

    mother.appendChild(kids);
                                                //This evaluates to undefined! hmm, have you got voice comms? sure i have a headset on.
  }else if(i < 20){                             //yeah, i can download skype... should prob have it
    if(i === 10){
       mother = document.createElement("div");
       mother.classList.add("column");
    }

    mother.appendChild(kids);

  }else if(i < 30){
    if(i === 20){
       mother = document.createElement("div");
       mother.classList.add("column");
    }

    mother.appendChild(kids);

  }else if(i < 40){
    if(i === 30){
       mother = document.createElement("div");
       mother.classList.add("column");
    }

    mother.appendChild(kids);

  }else{
    if(i === 40){
       mother = document.createElement("div");
       mother.classList.add("column");
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
