let input = document.getElementById('input');

let ln= document.getElementById('length-para');
let ln2 = document.getElementById('length-para-2');

let tmp = document.getElementById('temp-para');
let tmp2 = document.getElementById('temp-para-2');

let currentcies =document.getElementById('cur-para');
let currentcies2 = document.getElementById('cur-para-2');

let num = document.getElementById('num-para');
let num2 = document.getElementById('num-para-2');

let times= document.getElementById('time-para');
let times2 = document.getElementById('time-para-2');

input.addEventListener('input', inputfun)

function inputfun(){
  let input_value = input.value

  if(input_value == ''){
    input_value =0
}
ln.innerText=input_value
ln2.innerText=input_value*100

  tmp.innerText=input_value
  tmp2.innerText=input_value*(9/5)+32

  currentcies.innerText=input_value
  currentcies2.innerText=input_value*(81.72)

  num.innerText=input_value
  num2.innerText=input_value*1000

  times.innerText=input_value
  times2.innerText=input_value*60
      
}
