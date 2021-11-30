let dataAmount = parseInt(input())
let words = []
for(let i = 0; i<dataAmount; i++) words.push(input())

let vowels = ['a', 'e', 'i', 'o', 'u', 'y']

function countVowels(myString){
    let vowelsNum = 0
    for(char of myString){
        if (vowels.includes(char)) vowelsNum++
    }
    return vowelsNum
}

let vowelsNumInWords = words.map((word) =>{
    return countVowels(word)
})

output(vowelsNumInWords.join(' '))