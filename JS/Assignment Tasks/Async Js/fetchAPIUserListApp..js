let btn = document.getElementById("loadBtn");
let msg = document.getElementById("message");
let userList = document.getElementById("userList");

btn.addEventListener("click", async () => {
  userList.innerHTML = "";
  msg.textContent = "Loading...";

  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    
    if (!response.ok) {
      throw new Error("Network Error");
    }

    let data = await response.json();
    msg.textContent = ""; // remove loading text

    data.forEach(user => {
      let li = document.createElement("li");
      li.textContent = `${user.name} — ${user.email}`;
      userList.appendChild(li);
    });

  } catch (error) {
    msg.textContent = "Failed to load users!";
    msg.style.color = "red";
  }
});
