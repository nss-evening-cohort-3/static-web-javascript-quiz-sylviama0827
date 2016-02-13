//This is the function to draw one line of star.
function print(j){
  var phrase = "";
  for (i=0; i<2*j-1;i+=1){
    phrase+= "p";
  }
  document.getElementById("here").innerHTML+= phrase + "<br>";
}

//This is the function to draw multiple lines.
function draw(height){
  for (j=1; j<=height;j+=1){
    print(j);
  }
}

function btn(){
var height = document.getElementById("height").value;
draw(height);

var Rep = document.getElementById("here").innerHTML;
var newRep= Rep.replace(/p/g, document.getElementById("mark").value);
document.getElementById("here").innerHTML= newRep;
}



