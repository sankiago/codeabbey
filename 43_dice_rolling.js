let dataAmount = input()
let data = []
for(let i = 0; i<dataAmount; i++) data.push(Math.floor(Number(input()) * 6) + 1)

output(data.join(' '))