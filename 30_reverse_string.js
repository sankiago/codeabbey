let text = input()

for (let i = 0; i < text.length; i++) {
    let extractedChar = text.shift()
    text.splice((text.length -  i), 0, extractedChar)
}

output()
