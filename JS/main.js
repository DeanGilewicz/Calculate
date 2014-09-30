var button = document.getElementById('calculateBtn');
var num1 = document.getElementById('num_one');
var num2 = document.getElementById('num_two');
var resultArea = document.getElementById('answer');

button.onclick = function () {

  var answer = Number(num1.value) + Number(num2.value);
  resultArea.innerHTML = answer;

};
