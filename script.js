var language = "tr-TR"
const btnStart = document.querySelector(".btn");
const btnStop = document.querySelector(".btn2");
const text = document.querySelector(".text");
const microfone = document.querySelector(".fa-microphone");
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
};
function changeLang(input) {
    recognition.lang = input.value;
    console.log(recognition.lang);
}