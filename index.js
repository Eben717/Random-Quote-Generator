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

function generateQuote() {
    const randomIdx = Math.floor(Math.random() * quotes.length)
}