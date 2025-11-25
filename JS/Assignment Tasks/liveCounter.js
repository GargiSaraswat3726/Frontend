let box = document.getElementById("textBox");
let count = document.getElementById("counter");
let max = 100;

box.addEventListener("input", () => {
  let remaining = max - box.value.length;
  count.textContent = "Characters left: " + remaining;

  // COLOR CHANGE
  if (remaining > 60) {
    count.style.color = "green";
  } 
  else if (remaining > 20) {
    count.style.color = "orange";
  } 
  else {
    count.style.color = "red";
  }

  // STOP TYPING
  if (remaining === 0) {
    box.value = box.value.substring(0, max);
  }
});
