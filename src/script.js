function tryBubbleTea() {
  let name = prompt("What's your name?");
  let like = prompt("Do you like bubble tea 🧋?");

  like = like.toLowerCase();
  like = like.trim();
  like = like.replace("ye", "yes");

  if (like === "yes") {
    alert(
      "Hi" +
        " " +
        name +
        "! WE LOVE BUBBLE TEA 🧋. Go drink some boba and hope you have a great day 😄!"
    );
  } else {
    alert(
      "Hi" +
        " " +
        name +
        "! I LOVE BUBBLE TEA 🧋. I recommend it to you. But if you don't like it, it's okay. Hope you have a great day 😄!"
    );
  }
}

let tryBubbleTeaButton = document.querySelector("button");
tryBubbleTeaButton.addEventListener("click", tryBubbleTea);
