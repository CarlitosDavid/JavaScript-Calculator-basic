// this function accepts the values clicked as a parameter and returns the same to the textbox.

function display(val) {
  document.getElementById("result").value += val;
  return val;
}

// this solve() method is called when the user clicks on the '=' operator. The varibles x accept the mathematical
// expression provided by the user.
function solve() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
  return y;
}

// this function is called when the user clicks on the C or the clear button. After clicking on its value of the results will be set to an empty string.
function clearScreen() {
  document.getElementById("result").value = "";
}
