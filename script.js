function add(){
  document.getElementById("textbox").value = document.getElementById("textbox").value + "+"
}
function minus(){
  document.getElementById("textbox").value = document.getElementById("textbox").value + "-"
}
function multiply(){
  document.getElementById("textbox").value = document.getElementById("textbox").value + "*"
}
function divide(){
  document.getElementById("textbox").value = document.getElementById("textbox").value + "/"
}

function reset(){
  document.getElementById('textbox').value = ''
}


function textbox(){
  var x = document.getElementById("textbox").value;
  var result = eval(x)
  console.log(result)
  document.getElementById("Result").innerHTML = result
}

function isNumber(evt) {
    evt = (evt)? event: window.event;
    var charCode = (evt. which)? evt.which: evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}