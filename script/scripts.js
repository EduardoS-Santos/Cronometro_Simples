let sec = 0; //represents the seconds
let min = 0; //represents minutes
let hour = 0; //represents hours
let inter; // will be used as a host of intervals
let buton = document.getElementById("botao"); // controls the operation of the start button
let counter = document.getElementById("counter"); // shows the operation of the counter to the customer

function twoDigits(digits) {
  if (digits < 10) {
    //checks if the number is less than 10, if it is, add a digit to the number
    return "0" + digits;
  } else {
    //else it returns a normal number
    return digits;
  }
}

function start() {
  //calls the watch function and starts an interval starting the count
  watch(); //prevents set interval delay
  inter = setInterval(watch, 1000);
  buton.disabled = true;
}
function pause() {
  //stops the break and activates the start button
  clearInterval(inter);
  buton.disabled = false;
}
function stopp() {
  // interrupts the interval and resets hour minute and second

  clearInterval(inter);
  sec = 0;
  min = 0;
  hour = 0;
  counter.innerHTML = "00:00:00";
  botao.disabled = false;
}

function watch() {
  // executes the main function calculating second minute and hour displaying on the screen together with two digits
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
  } else if (min == 60) {
    hour++;
    min = 0;
    sec = 0;
  }

  counter.innerHTML = `${twoDigits(hour)}:${twoDigits(min)}:${twoDigits(sec)}`;
}
