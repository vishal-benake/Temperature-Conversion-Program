textBox = document.getElementById("textBox");
toFarhenheit = document.getElementById("toFarhenheit");
toCelsius = document.getElementById("toCelsius");
output = document.getElementById("output");
const form = document.querySelector('form'); 
let temp;

function convert(){
   if(toFarhenheit.checked){
    temp = Number(textBox.value);
    temp = temp * 9 / 5 + 32;
    output.textContent = temp.toFixed(1) + "°F";
   }
   else if(toCelsius.checked){
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    output.textContent = temp.toFixed(1) + "°C";
   } else {
    output.textContent = "Select a unit";
   }
};


form.addEventListener('submit', function(event) { 
  event.preventDefault(); 
}); 