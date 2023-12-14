let form = document.querySelector("form");
let main = document.querySelector(".main");
let input = document.querySelector("input");
async function getData(word) {
  let response = await axios.get(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );
  console.log(response.data);
  drawCard(response.data);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  getData(input.value);
});

function drawCard(data) {
  main.innerHTML = "";
  data.forEach((element) => {
    main.innerHTML += `  <div class="text2" >
    <div class="text1">
    <p>Word:${element.word}</p>
    <i class="fa-solid fa-volume-high"></i>
    </div>
    <p>Phonetic:[${element.phonetics[1].text}]</p>
    <p>${element.meanings[0].partOfSpeech}</p>
    
    </div>
    <p>${element.meanings[0].definitions[0].definition}</p>
    <i onclick="playAudio(this)"><audio src="${element.phonetics[0].audio}"></audio></i> 

    `;
  });
}
function playAudio(icon) {
  icon.querySelector("audio").play();
}
