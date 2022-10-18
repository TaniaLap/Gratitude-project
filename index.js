function join() {
  let name = prompt("What is your name?");
  let email = prompt("What is your e-mail?");

  if (name === "" || (name === null && email === "") || email === null) {
    alert("Hi, join now 🤗");
  } else {
    alert("Hi, " + name + "! The SheCodes team will contact you by e-mail 🙃");
  }
}

let buyButton = document.querySelector(".join-button");
buyButton.addEventListener("click", join);
