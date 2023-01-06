const inputWord = document.querySelector('.writ-word');
const btnAdd = document.querySelector('.add');
const btnRESET = document.querySelector('.reset');
const text = document.querySelector('textarea');
const btnCENZOR = document.querySelector('.cenzor-btn');
const badWord = document.querySelector('.red-w');
const such = document.querySelector('.err-input');
const bad = ['java', 'tottenham'];
badWord.innerText += bad;
btnAdd.addEventListener('click', function () {
    if (!inputWord.value) {
        such.style.display = 'none';
        inputWord.placeholder = "Please write a word!";
        inputWord.style.borderColor = "rgba(180, 51, 51, 0.693)";
        inputWord.style.boxShadow = "0px 0px 5px 0px rgba(180, 51, 51, 0.693)";
    }
    else if (!bad.some(mass => mass.toLowerCase() === inputWord.value.toLowerCase())) {
        such.style.display = 'none';
        bad.push(inputWord.value);
        badWord.innerText = '';
        badWord.innerText += bad;
        console.log(bad);
        inputWord.value = '';
        inputWord.placeholder = "word here...";
        inputWord.style.borderColor = "rgba(51, 115, 180, 0.693)";
        inputWord.style.boxShadow = " 0px 0px 5px 0px rgb(17, 104, 158)";
    }
    else if (bad.some(mass => mass.toLowerCase() === inputWord.value.toLowerCase())) {
        such.style.display = 'block';
        inputWord.placeholder = "word here...";
        inputWord.style.borderColor = "rgba(180, 51, 51, 0.693)";
        inputWord.style.boxShadow = "0px 0px 5px 0px rgba(180, 51, 51, 0.693)";
        inputWord.value = '';
    }
});
btnRESET.addEventListener('click', function () {
    bad.length = 0;
    badWord.innerText = '';
    console.log(bad);
});
// const replacer = (word) =>{
//    for(let i=0; i<bad.length; i++){
//       const badW = bad[i].toLowerCase()
//       if(word.includes(badW)){
//          return replacer(word.replace(badW,'*'.repeat(badW.length)));
//       }
//    }
//    return word
// }
btnCENZOR.addEventListener('click', function () {
    let textCheck = text.value;
    if (textCheck) {
        for (let j = 0; j < bad.length; j++) {
            textCheck = textCheck.replace(bad[j], '*'.repeat(bad[j].length));
            text.value = textCheck;
        }
    }
    else {
        text.placeholder = "Please write a text!";
        text.style.borderColor = "rgba(180, 51, 51, 0.693)";
        text.style.boxShadow = "0px 0px 5px 0px rgba(180, 51, 51, 0.693)";
    }
});
