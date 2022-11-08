let inputText = document.querySelector("#input-text")
let outputText = document.querySelector("#output-text")
let btnTranslate = document.querySelector("#btnTranslate")



btnTranslate.addEventListener("click", function(){
    
    let text1= inputText.value;
    // let url = "	https://api.funtranslations.com/translate/minion.json" + "?" + "text=" + text1;
    let url = "https://api.funtranslations.com/translate/shakespeare.json" + "?" + "text=" + text1;
   
    fetch(url)
    .then(response =>response.json())
    .then(json => {

        var translatedText = json.contents.translated;

       outputText.innerText = translatedText

    })


})