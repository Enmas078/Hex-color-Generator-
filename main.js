const btn = document.querySelector(".clickMe");
const span = document.querySelector(".span");

const hexcolor = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
btn.addEventListener ("click", function(){
  let colorTag ="#";
  // tag the length of the hexColor through loop and add colorTag to it, because hex always start with "#"
  for ( let i = 0; i < 6; i++){
    // add colorTag to hex
    colorTag += hexcolor[getRandom()];
  }
  document.body.style.backgroundColor = colorTag;
  span.textContent = colorTag;
});

// let's  loop it through random method
 function getRandom (){
   return Math.floor(Math.random() * hexcolor.length);
 }
