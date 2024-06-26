const textarea = document.querySelector("textarea");
const button = document.querySelector("button");

let synth = window.speechSynthesis;
let isSpeaking = false;
let utterance;

const textToSpeech = () => {
    const text = textarea.value;

    if (!synth.speaking && text) {
        utterance = new SpeechSynthesisUtterance(text);
        synth.speak(utterance);
        isSpeaking = true;

        if (text.length > 50) {
            button.innerText = "Pause";
        } else {
            button.innerText = "Convert to Speech";
        }
    } else if (text.length > 50) {
        if (synth.speaking && isSpeaking) {
            synth.pause();
            button.innerText = "Resume";
            isSpeaking = false;
        } else {
            synth.resume();
            button.innerText = "Pause";
            isSpeaking = true;
        }
    }
};

button.addEventListener("click", textToSpeech);

setInterval(() => {
    if (!synth.speaking && isSpeaking) {
        button.innerText = "Convert to Speech";
        isSpeaking = false;
    }
}, 100);
