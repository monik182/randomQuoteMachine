document.addEventListener('DOMContentLoaded', function () {

    function setTwitterLink (quote) {
        var tweetQuote = quote.quote + " -J.K.R.";
        var tweetHref = 'https://twitter.com/intent/tweet?hashtags=HarryPotter&related=freecodecamp,monik305&text=' + encodeURIComponent(tweetQuote);
        return tweetHref;
    }

    function setQuote(quote) {
        document.querySelector(".quote").innerHTML = quote.quote;
        document.querySelector(".author").innerHTML = quote.author;
        document.querySelector(".twitter-share-button").setAttribute("href", setTwitterLink(quote));
    }

    function loadQuote () {
        getQuote(1, function(data) {
            //console.log("data", data)

            if (data) {
                var quote = data[0];
                setQuote(quote);
            }
        })
    }

    loadQuote(); //First Time


    document.querySelector(".changeQuote").addEventListener("click", function () {
        loadQuote()
     });





});
