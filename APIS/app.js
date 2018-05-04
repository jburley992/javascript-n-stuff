var request = require("request");
//make a request to google.com
request("https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",function(error, response,body){
    //Error: holds any potential error such as no internet, etc.
    //Status code 200 indicates everything is okay and we successfully recieved a response

    //These 2 things should always be checked
    if(!error && response.statusCode == 200){
        //Turns a JSON string into a javascript object
        var parsedData = JSON.parse(body);
        // console.log(parsedData);
        console.log(parsedData.query.results.channel.astronomy.sunset);
    }
    else{
        console.log("Something went wrong");
        console.log(error);
    }
});