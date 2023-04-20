const textField = document.querySelector("#textfield")
const encryptButton = document.querySelector("#encrypt-button")
const decryptButton = document.querySelector("#decrypt-button")
const output = document.querySelector("#output")
//
const fragment = new DocumentFragment()

encryptButton.addEventListener("click", (event) => {
    if (textField.value.length) {
        const newText = encrypt(textField.value)
        createResults(newText)
    }
})

decryptButton.addEventListener("click", (event) => {
    if (textField.value.length) {
        const newText = decrypt(textField.value)
        createResults(newText)
    }

})

output.addEventListener('', )

function encrypt(text) {
    let encriptedText = ""
    for (let i = 0; i < text.length; i++) {
        let thingsToAppend = ""
        switch (text[i]) {
            case 'e':
                thingsToAppend = 'enter'
                break;
            case 'i':
                thingsToAppend = 'imes'
                break;
            case 'a':
                thingsToAppend = 'ai'
                break;
            case 'o':
                thingsToAppend = 'ober'
                break;
            case 'u':
                thingsToAppend = 'ufat'
                break;
            default:
                thingsToAppend = text[i];
        }
        encriptedText += thingsToAppend
    }
    return encriptedText
}

function decrypt(text) {
    let decryptedText = ""
    for (let i = 0; i < text.length;) {
        let thingsToAppend = ""
        let sliceText = ""
        switch (text[i]) {
            case 'e':
                sliceText = text.slice(i, i + 5)
                sliceText === 'enter' ? i += 5 : i++
                thingsToAppend = 'e'
                break;
            case 'i':
                sliceText = text.slice(i, i + 4)
                sliceText === 'imes' ? i += 4 : i++
                thingsToAppend = 'i'
                break;
            case 'a':
                sliceText = text.slice(i, i + 2)
                sliceText === 'ai' ? i += 2 : i++
                thingsToAppend = 'a'
                break;
            case 'o':
                sliceText = text.slice(i, i + 4)
                sliceText === 'ober' ? i += 4 : i++
                thingsToAppend = 'o'
                break;
            case 'u':
                sliceText = text.slice(i, i + 4)
                sliceText === 'ufat' ? i += 4 : i++
                thingsToAppend = 'u'
                break;
            default:
                thingsToAppend = text[i];
                i++
        }
        decryptedText += thingsToAppend
    }
    return decryptedText
}


function createResults(text) {
    output.style.justifyContent = 'space-between'
    const paragraph = document.createElement('div');
    const button = document.createElement('button');

    button.onclick = (e)=>{ 
        navigator.clipboard.writeText(text);
    }

    button.classList.add('output__button')
    button.innerText = 'Copiar'
    paragraph.textContent = text;
    paragraph.classList.add('output__text')

    fragment.append(paragraph, button)

    output.replaceChildren(fragment);
}