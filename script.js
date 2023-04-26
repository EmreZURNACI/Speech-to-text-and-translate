var language = "tr-TR";
var languageTo = "en-GB";
const text = document.querySelector(".text");
const microfone = document.querySelector(".fa-microphone");
const translatedText = document.querySelector(".translatedLang");
const translateToText = document.querySelector(".translatedText");
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();
recognition.lang = language;
recognition.onspeechend = function () {
    recognition.stop();
    microfone.style.color = "#F1F6F9";
}
recognition.onresult = function (event) {
    var transcript = event.results[0][0].transcript;
    text.innerHTML += "  " + transcript;
    transalteWords();
};
function changeLang(input) {
    recognition.lang = input.value;
}
function changeLangTo(input) {
    languageTo = input.value;
}
console.log(recognition.lang);
console.log(languageTo);
function transalteWords() {
    let apiURl = `https://api.mymemory.translated.net/get?q=${text.innerHTML}&langpair=${recognition.lang}|${languageTo}`;
    fetch(apiURl).then(res => res.json()).then(data => {
        translateToText.innerHTML += data.responseData.translatedText; console.log(recognition.lang);
        console.log(languageTo); console.log(data)
    });

}