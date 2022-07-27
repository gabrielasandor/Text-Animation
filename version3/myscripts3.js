const text = document.getElementById("text");
const wordInProg = "WeVideo";
let letterIndex = 1;

setInterval(writeText, 300);

function writeText() {
    text.innerText = wordInProg.slice(0, letterIndex)
    letterIndex++;
    // if (letterIndex > wordInProg.length) {
    //     letterIndex = 1;
    // }

}