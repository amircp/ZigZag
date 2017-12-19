let fs = require('fs');
let csv = require("fast-csv");
const historicalData = __dirname + '/historical/';
let stream = fs.createReadStream(historicalData + "/BTC/4h.csv");
let quotes = [];

let csvStream = csv
    .parse()
    .on("data", (data) => {

         let ticker = {
            High: data[3],
            Low: data[4],
            Open: data[2],
            Close: data[5],
            Date: data[0]
         };
         quotes.push(ticker);
    })
    .on("end", () =>{

        // Aqui empezamos a trabajar con el ZigZag

        let ZigZag = require(__dirname +'/modules/zigzag2');
        ZigZag.calculate(quotes, 3, (err, data) => {
               // console.log(data);
        });



     });

stream.pipe(csvStream);