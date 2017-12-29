let ZigZag = function(){

/*************************************************************************
 *
 *  Implementación de archivo de excel encontrado en excelforums.com
 *  Autor: Amir Canto
 *  Fecha: 25/Dic/2017
 ************************************************************************/
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
               // console.log('-------------------------------------');
                //console.log('Point:'+pointQuote);
                // Inicializamos la diferencia acumulada y la Base
                if(undefined == quotes[i -1])
                {
                    Base = parseFloat(pointQuote);

                    diffAccumulated += parseFloat(0);
                  //  console.log('Diff:'+ diffAccumulated);

                }
                else
                {
               //     console.log('Diferencia Acumulada:'+ diffAccumulated);
                 //   console.log('Cambio porcentual Diario:'+parseFloat(((pointQuote - Base)  / Base) * 100));
                    diffAccumulated =  parseFloat(((pointQuote - Base)  / Base) * 100);
                    //console.log('Base actual:'+ Base);


                }
                // llamamos a la funcion para eliminar puntos de la fecha (Only works with investing.com historical data)
                dateQuote = removeDateDots_(quotes[i].Date);
                 if(Math.abs(parseFloat(diffAccumulated)) >= parseFloat(minSwingPct))
                {

                    diffAccumulated = 0.0;
                    Base = pointQuote;
                    console.log(quotes[i].Date + ',' + quotes[i].Open + ',' + quotes[i].High + ','+ quotes[i].Low+','+ quotes[i].Close + ','+ Base);
                    zigZag_.push(Base);
                }
                else
                {
                   console.log(quotes[i].Date + ',' + quotes[i].Open + ',' + quotes[i].High + ','+ quotes[i].Low+','+ quotes[i].Close + ',');
                }


            }

           callback(null, zigZag_);


        }

    }
}();
module.exports = ZigZag;