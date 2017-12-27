let ZigZag = function(){


    function removeDateDots_(date)
    {
        date = date.replace('.','/');
        date = date.replace('.','/');

        return date;
    }

    return {

        calculate: function(quotes, minSwingPct, callback) {

            let swingHigh  = false;
            let swingLow = false;
            let zigZag_ = [];
            let i = 0;
            let quotesEnd = quotes.length;
            let dateQuote;
            let pointQuote;
            let diffAccumulated = 0.0;
            let Base;
            let lastBase;


            // Reco rremos todo el array de quotes de 0 hasta el MAX_QUOTES
            for (i; i  < quotesEnd; i++)
            {
                // Obtenemos el promedio de la cotización alta y máxima
                pointQuote = (parseFloat(quotes[i].High) + parseFloat(quotes[i].Low)) / 2;
                console.log(pointQuote);    
                // Inicializamos la diferencia acumulada y la Base
                if(undefined == quotes[i -1] &&  undefined == quotes[i - 1])
                {
                    Base = parseFloat(pointQuote);
                    diffAccumulated += parseFloat(0);     
                }
                else 
                {
                    diffAccumulated += Math.abs((pointQuote / Base) * 100);

                }
                // llamamos a la funcion para eliminar puntos de la fecha (Only works with investing.com historical data)
                dateQuote = removeDateDots_(quotes[i].Date);
                

                if(diffAccumulated > minSwingPct)
                {

                    console.log(diffAccumulated);
                    diffAccumulated = 0.0;
                    Base = pointQuote;
                    zigZag_.push(Base);
                }
        

            }

           callback(null, zigZag_);


        }

    }
}();
module.exports = ZigZag;