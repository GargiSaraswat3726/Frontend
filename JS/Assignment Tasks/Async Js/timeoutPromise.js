let btn = document.getElementById("start");
let result = document.getElementById("result");

// Slow task (3–5 sec)
function slowPromise() {
  return new Promise(resolve => {
    let time = Math.floor(Math.random() * 3000) + 3000; // 3–6 sec
    setTimeout(() => resolve("Slow task finished in " + time + " ms"), time);
  });
}

// Timeout promise (2 sec)
function timeoutPromise() {
  return new Promise((_, reject) => {
    setTimeout(() => reject("❌ Timeout: Task took too long!"), 2000);
  });
}

btn.addEventListener("click", async () => {
  result.textContent = "Running...";
  result.className = "";

  try {
    let finalResult = await Promise.race([
      slowPromise(),
      timeoutPromise()
    ]);

    result.textContent = finalResult;
    result.classList.add("success");

  } catch (error) {
    result.textContent = error;
    result.classList.add("error");
  }
});
