var add = document.getElementById('addBtn');
var subtract = document.getElementById('subtractBtn');
var multiply = document.getElementById('multiplyBtn');
var divide = document.getElementById('divideBtn');
var num1 = document.getElementById('num_one');
var num2 = document.getElementById('num_two');
var resultArea = document.getElementById('answer');

add.onclick = function () {

  var answer = Number(num1.value) + Number(num2.value);
  resultArea.innerHTML = answer;

};

subtract.onclick = function () {

  var answer = Number(num1.value) - Number(num2.value);
  resultArea.innerHTML = answer;

};

multiply.onclick = function () {

  var answer = Number(num1.value) * Number(num2.value);
  resultArea.innerHTML = answer;

};

divide.onclick = function () {

  var answer = Number(num1.value) / Number(num2.value);
  resultArea.innerHTML = answer;

};
