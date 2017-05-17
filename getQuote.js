function getQuote(quantity, callback) {
    var quotes = [],
        rand = 0;


    var request = new XMLHttpRequest();
    request.open('GET', 'data.json', true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
            //console.log("request", request);
            var data = JSON.parse(request.response);
            //console.log("data", data);

            var idx = 0;
            while (quotes.length < quantity) {
                rand = Math.ceil(Math.random() * 14);
                if (idx !== rand) {
                    quotes.push(data[rand]);
                    idx = rand;
                }


            }



        }

        callback(quotes);
    };

    request.onerror = function() {
        console.log("request on error", request);
    };

    request.send();




}




