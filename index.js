const quotes = [
    "Wiase y3 den",
    "Nipa y3 bad",
    "Ohia y3 ya",
    "Life is full of ups and downs",
    "Trust God",
    "You win when you help others win"
]

const usedIndexes = new Set()
const quoteElement = document.getElementById('quote')

//quotes generator

function generateQuote() {
    while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length)

    if (usedIndexes.has(randomIdx)) continue

    const quote = quotes[randomIdx]
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx)
    break
    }
}