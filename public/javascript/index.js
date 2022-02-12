const charactersAPI = new APIHandler("http://localhost:8000");
const fetchAllContainer = document.querySelector(".characters-container");


const characterId = document.getElementById("fetch-one-id")

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", async function (event) {
      const characters = await charactersAPI.getFullList();
      const charElements = characters.data
        .map(
          (
            char
          ) => `<div class="character-info"><div class="name">Character Name: ${char.name}</div>
                          <div class="occupation">Character Occupation: ${char.occupation}</div>
                          <div class="cartoon">Is a Cartoon?: ${char.cartoon}</div>
                          <div class="weapon">Character Weapon: ${char.weapon}</div>
                        </div>`
        )
        .reduce((prev, curr) => prev + curr);
      fetchAllContainer.innerHTML = charElements;
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", async function (event) {
      console.log(characterId.value)
      const character = await charactersAPI.getOneRegister(characterId.value);
      console.log(character);
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {});
});
