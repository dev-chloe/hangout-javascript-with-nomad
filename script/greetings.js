const loginForm = document.querySelector("#login_form");
const loginInput = document.querySelector("#login_form input");
const greeting = document.getElementById("greeting");

const link = document.querySelector("a");
const hiddenClassName = "hidden";
const usernameKey = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(hiddenClassName);
  const username = loginInput.value;
  localStorage.setItem(usernameKey, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.classList.remove(hiddenClassName);
  greeting.innerText = `Hello ${username}`;
}

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
}

link.addEventListener("click", handleLinkClick);

const savedUsername = localStorage.getItem(usernameKey);

if(savedUsername === null) {
  loginForm.classList.remove(hiddenClassName);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername);
}