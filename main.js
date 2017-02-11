//Define answer:
var answer =document.getElementById("answer");

//Define calculate button:
var calcButton =document.getElementById("calculate-button");

var calculate = function () {
  //Define the two input boxes
  var input1 =document.getElementById("value-one");
  var input2 =document.getElementById("value-two");

  //Math Time!
  var x = Number(input1.value);
  var y = Number(input2.value);
    var sum = x + y;

    //Answer on the page
    answer.innerHTML = sum;
};

//Click Event:
calcButton.addEventListener("click", calculate);
