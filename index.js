import "./styles.css";

var serverURL = "https://api.funtranslations.com/translate/minion.json";
var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var divOutput = document.querySelector("#div-output");

btnTranslate.addEventListener("click", clickHandler);

function clickHandler() {
  var inputText = txtInput.value;
  fetch(getTranslationURL(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translatedText = json.contents.translated;
      divOutput.innerText = translatedText;
    })
    .catch(errorHandler);
}

function getTranslationURL(text) {
  return serverURL + "?text=" + text;
}

function errorHandler(error) {
  alert("Something went wong with server! Try after sometime.");
}
