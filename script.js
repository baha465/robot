const message = document.getElementById("message")
const buttonElement = document.getElementById("submit")

function wordCount(str) {
    return str.split(" ").length;
}

function letterCount(str) {
    let length = str.split('').filter(c => c != ' ').length;
    return length;
}

findMostFrequentWords = (string) => {
    let wordsArray = string.split(/\s/);
    let wordOccurrences = []
    for (let i = 0; i < wordsArray.length; i++) {
        wordOccurrences[wordsArray[i]] = (wordOccurrences[wordsArray[i]] || 0) + 1;
    }
    const maximum = Object.keys(wordOccurrences).reduce(function (accomulated, current) {
        return wordOccurrences[current] >= wordOccurrences[accomulated] ? current : accomulated;
    });
    const result = []
    Object.keys(wordOccurrences).map((word) => {
        if (wordOccurrences[word] === wordOccurrences[maximum])
            result.push(word);
    })
    return result
}
/*
1. Split message words and store it in an array.
2. Display in CONSOLE the number of elements in the array and the most frequent word in the array
*/
buttonElement.onclick = function () {
    if (letterCount((message.value)) < 20) {
        alert("Please enter more than 20 characters");
    } else {
        let messageWords = [];
        messageWords = (message.value).replace().split(/\s/);
        let theMostFrequentWord = findMostFrequentWords(message.value);
        let numberOfWordsInTheMessage = wordCount(message.value);

        console.log(`The most frequent word of the message is "${theMostFrequentWord}"`)
        console.log(`The number of words in the message is ${numberOfWordsInTheMessage}`)
        console.log(messageWords);


// Random phrases and its pictures (represented as an array of objects)
        const randomPhrasesAndPictures = [
            {
                phrase: "A wizard is never late, nor is he early. He arrives precisely when he means to. (c) Gandalf The Grey",
                imageURL: "https://lh3.googleusercontent.com/proxy/zHYUtIFhvkGC3VGNULLKzWEZuxYZQBGWsAHlgqbAYgOQz5rnEuKbDsDLPuXGcE-BbZyUsktqm_LCEM6imgT8gBA8IhL4SZgjscJBU6X5I4UbD4xxi6_8nGgy-VSApCkSBsCVBTRS7PRe75V6Ed72N4dFdMYs4MaB6WE"
            },
            {
                phrase: "We must all face the choice between what is right and what is easy. (c) Albus Dumbledore",
                imageURL: "https://www.magicalquote.com/wp-content/uploads/2020/02/We-must-all-face-the-choice-between-what-is-right-and-what-is-easy.jpg"
            },
            {
                phrase: "You are a wizard, Harry (c) Hagrid",
                imageURL: "https://thejapanhobbyist.files.wordpress.com/2017/03/64013553.jpg"
            }
        ];
        let randomNumber = Math.floor(Math.random() * 3);
        $('#photo').attr('src', randomPhrasesAndPictures[randomNumber].imageURL);
        $('#random_message').text(randomPhrasesAndPictures[randomNumber].phrase);
    }
}