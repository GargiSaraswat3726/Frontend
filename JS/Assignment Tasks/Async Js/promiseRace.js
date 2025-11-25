let btn = document.getElementById("startRace");
let result = document.getElementById("result");

// Promise generator function
function createPromise(name) {
  return new Promise(resolve => {
    let time = Math.floor(Math.random() * 3000) + 1000; // 1–4 secs
    setTimeout(() => resolve(`${name} finished in ${time} ms`), time);
  });
}

btn.addEventListener("click", () => {
  result.textContent = "Racing...";

  let p1 = createPromise("Promise 1");
  let p2 = createPromise("Promise 2");
  let p3 = createPromise("Promise 3");

  Promise.race([p1, p2, p3])
    .then(winner => {
      result.textContent = "Winner → " + winner;
    });
});
