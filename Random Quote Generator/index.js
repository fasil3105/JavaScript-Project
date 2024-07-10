const quotes = ["Anything that is worth teaching can be presented in many different ways",
                "These multiple ways can make use of our multiple intelligences",
                "Design is the method of putting form and content together",
                "Design, just as art, has multiple definitions; there is no single definition", 
                "Design can be art. Design can be aesthetics", 
                "Design is so simple, that's why it is so complicated",
                "We all have aspects of ourselves that we my not be aware of",
                "Actors in particular - they have multiple personality disorder",
                "They get paid a lot of money to exhibit that",
                "True horror, I think, deals with dread and menace and gets under your skin"];

const usedIndex = new Set();
const quoteElemnet = document.getElementById("quote");

function generateQuote(){

    while(true){
        if (usedIndex.size  >= quotes.length)
              usedIndex.clear();

        const randomIdx = Math.floor(Math.random() * quotes.length);
    
        if (usedIndex.has(randomIdx)) continue
        
        const quote = quotes[randomIdx];
        quoteElemnet.innerHTML = quote;
        usedIndex.add(randomIdx);
        break;

    }

   
}
             