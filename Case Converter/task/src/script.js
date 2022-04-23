// case changing buttons
let upper_but = document.querySelector("#upper-case");
let lower_but = document.querySelector("#lower-case");
let proper_but = document.querySelector("#proper-case");
let sentence_but = document.querySelector("#sentence-case");
let save_but = document.querySelector("#save-text-file");
// text from textarea
let textfield = document.getElementById("main-area");

// event handlers for buttons
upper_but.addEventListener("click", () => textfield.value = textfield.value.toUpperCase());
lower_but.addEventListener("click", () => textfield.value = textfield.value.toLowerCase());
proper_but.addEventListener("click", () => textfield.value = changeCase(textfield.value, " "));
sentence_but.addEventListener("click", function() {
    textfield.value = textfield.value.toLowerCase();
    textfield.value = changeCase(textfield.value, ". ");
})
save_but.addEventListener("click", () => download("text.txt", textfield.value));

// changes case on string str based on trim symbol separating the words/sentences
function changeCase(str, trim )
{
    let newWords = "";
    let words = str.split(trim);
    words.forEach(word => {
        if (newWords != "") {
            newWords= newWords + trim;
        }
        newWords = newWords.concat(word.replace(word[0],word[0].toUpperCase()));
    });
    return newWords;
}

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
