let fs = require('fs');
let csv = require("fast-csv");
const historicalData = __dirname + '/historical/';
let stream = fs.createReadStream(historicalData + "/MXN/USDMXN.csv");
let quotes = [];

let csvStream = csv
    .parse()
    .on("data", (data) => {

         let ticker = {
            Date: data[0],
           Close: data[1],
            Open: data[2],
            High: data[3],
            Low: data[4]
         };
         quotes.push(ticker);
    })
    .on("end", () =>{

        // Aqui empezamos a trabajar con el ZigZag

        let ZigZag = require(__dirname +'/modules/zigzag3');
        ZigZag.calculate(quotes, 2, (err, data) => {
               // console.log(data);
        });



     });

stream.pipe(csvStream);