// initialize count
let count = 0;

//set value and button
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

console.log(btns);
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let style = e.currentTarget.classList;
    if(style.contains("decrease")){
      count --;
    }
    else if(style.contains("increase")){
      count ++;
    }
    else{
      count = 0;
    }
    if(count < 0){
      value.style.color = "red";
    }
    if(count > 0){
      value.style.color = "green";
    }
    if(count === 0){
      value.style.color = "rgb(48, 77, 92)";
    }
    value.textContent = count;
  });
});
