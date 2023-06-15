const billEl = document.getElementById("bill");
const btnEl = document.getElementById("btn");
const tipEl = document.getElementById("tip");
btnEl.addEventListener("click", calculate);
const amtEl = document.getElementById("amt");


function calculate (){
  const billValue = billEl.value;
  const tipValue = tipEl.value;
  const total = billValue * (1 + tipValue / 100);
  amtEl.innerHTML = "$" + total.toFixed(2);
}