function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav fixed-top") {
      x.className += " responsive";
    } else if(x.className === "nav") {
     x.className += " responsive2";
    } else if(x.className === "nav responsive"||x.className === "nav responsive2") {
     x.className = "nav";
    }
    else{
     x.className = "nav fixed-top";
    }
 }