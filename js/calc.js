var displayInput = document.getElementById("screen");

var buttonInput1 = document.getElementById("one");
var buttonInput2 = document.getElementById("two");
var buttonInput3 = document.getElementById("three");
var buttonInput4 = document.getElementById("four");
var buttonInput5 = document.getElementById("five");
var buttonInput6 = document.getElementById("six");
var buttonInput7 = document.getElementById("seven");
var buttonInput8 = document.getElementById("eight");
var buttonInput9 = document.getElementById("nine");

var buttonInputClear = document.getElementsByClassName('buttonClear')[0];
var buttonInputEquals = document.getElementsByClassName('equals')[0];
var buttonInputMultiply = document.getElementById("multiply");
var buttonInputDivide = document.getElementById("divide");
var buttonInputMinus = document.getElementById("minus");
var buttonInputPlus = document.getElementById("plus");

buttonInput1.addEventListener("click", function(){
  displayInput.innerHTML = displayInput.innerHTML+"1";
  } );

buttonInput2.addEventListener("click", function(){
  displayInput.innerHTML = displayInput.innerHTML+"2";
  } );

buttonInput3.addEventListener("click", function(){
  displayInput.innerHTML = displayInput.innerHTML+"3";
  } );

buttonInput4.addEventListener("click", function(){
  displayInput.innerHTML = displayInput.innerHTML+"4";
  } );

buttonInput5.addEventListener("click", function(){
  displayInput.innerHTML = displayInput.innerHTML+"5";
  } );

buttonInput6.addEventListener("click", function(){
  displayInput.innerHTML = displayInput.innerHTML+"6";
  } );

buttonInput7.addEventListener("click", function(){
  displayInput.innerHTML = displayInput.innerHTML+"7";
  } );

buttonInput8.addEventListener("click", function(){
    displayInput.innerHTML = displayInput.innerHTML+"8";
    } );

buttonInput9.addEventListener("click", function(){
        displayInput.innerHTML = displayInput.innerHTML+"9";
        } );

  buttonInputClear.addEventListener("click", function(){
      displayInput.innerHTML = "";
      } );


buttonInputMultiply.addEventListener("click", function(){
      displayInput.innerHTML = displayInput.innerHTML+"*";
          } );

  buttonInputDivide.addEventListener("click", function(){
        displayInput.innerHTML = displayInput.innerHTML+"/";
                    } );

  buttonInputMinus.addEventListener("click", function(){
    displayInput.innerHTML = displayInput.innerHTML+"-";
                                      } );

  buttonInputPlus.addEventListener("click", function(){
    displayInput.innerHTML = displayInput.innerHTML+"+";
  } );

    buttonInputEquals.addEventListener("click", function(){
      displayInput.innerHTML = eval(displayInput.innerHTML);
                    } );
