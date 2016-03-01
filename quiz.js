//This is the function to draw the j order line of star. Height is the total height of the tree, and j is the j(order) line.
function print(j, height){
  var phrase = "";

//This is for the space on the left.
  for (i=0; i<=height-j;i+=1){
  	phrase += " ";
  }

//This is for the star.
  for (i=0; i<2*j-1;i+=1){
    phrase+= "p";
  }

// //This is for the space on the right.
//   for (i=0; i<=height-j;i+=1){
//   	phrase += " ";
//   }

  var output = phrase.replace(/p/g, document.getElementById("mark").value)
  console.log(output);
}

//This is the function to draw multiple lines. Second
function draw(height){
  for (j=1; j<=height;j+=1){
    print(j, height);
  }
}

//trigger this function first.
document.getElementById("btn").addEventListener("click", btn);



function btn(){
var height = document.getElementById("height").value;
draw(height);
}



