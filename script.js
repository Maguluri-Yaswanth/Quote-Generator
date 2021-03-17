let apiQuotes = [];

//Show newQuote
function newQuote(){
    //Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)];

    // const quote = localQuotes[Math.floor(Math.random()*apiQuotes.length)];
}

// Get quotes from Api
async function getQuotes(){
    const apiUrl = "https://type.fit/api/quotes";
    try{
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    }catch(error){
        //Handle your error here 
    }
}

//On load
getQuotes();