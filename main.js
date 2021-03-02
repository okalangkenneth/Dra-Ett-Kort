const container = document.getElementById("draw");

document.addEventListener("click", function (event) {
  // Checking if the button was clicked
  if (!event.target.matches("#button")) return;

  /*
  Here we send a request to DeckofCard API
  Then process the response into JSON
  Then pass the data to our renderDraw function.
  */

  fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1")
    .then((response) => response.json())
    .then((data) => renderDraw(data))
    .catch(() => renderError());
});

function renderDraw(data) {
  container.innerHTML = "";
  var img = document.createElement("img");
  img.src = data.sprites.front_default;
  img.alt = data.name;

  var text = document.createElement("p");
  text.className = "drawName";
  text.innerHTML = data.name;

  container.appendChild(text);
  container.appendChild(img);
}

function renderError() {
  container.innerHTML = "Whoops, something went wrong. Please try again!";
}


