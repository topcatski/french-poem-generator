function displayPoem(response) {
  console.log("Poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "8717badd797bf40d3ca2to48c422f094";
  let prompt = `Generate a french poem about ${instructionsInput.value}`;
  let context =
    "You are an AI Short French poem expert and love to write short poems.  Your mission is to generate a 4 line poem in basic HTML.  Follow the user instructions. Sign the poem at the end with 'SheCodesAI' inside a <strong> element. Leave out the ```html and ``` at the end";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  console.log(`Generating poem...`);
  //build API url
  //make call to api
  axios.get(apiUrl).then(displayPoem);
  //display poem
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
