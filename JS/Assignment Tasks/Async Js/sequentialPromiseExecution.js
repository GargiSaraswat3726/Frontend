let list = document.getElementById("stepsList");
let btn = document.getElementById("start");

// create a function to show steps in DOM
function showStep(text, highlight = false) {
  let li = document.createElement("li");
  li.textContent = text;

  if (highlight) {
    li.classList.add("bold");
  }

  list.appendChild(li);
}

// Promises (each resolves after 1 second)
function step1() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Step 1 done"), 1000);
  });
}

function step2() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Step 2 done"), 1000);
  });
}

function step3() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Step 3 done"), 1000);
  });
}

// Sequential execution using async/await
btn.addEventListener("click", async () => {
  
  list.innerHTML = ""; // clear old steps
  
  showStep("Running Step 1...", true);
  let s1 = await step1();
  showStep(s1);

  showStep("Running Step 2...", true);
  let s2 = await step2();
  showStep(s2);

  showStep("Running Step 3...", true);
  let s3 = await step3();
  showStep(s3);
});

