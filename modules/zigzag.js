let ZigZag = function(){


/*************************************************************************
 *
 *  Implementación de Investing.mx
 *  Autor: Amir Canto
 *  Fecha: 26/Dic/2017
 ************************************************************************/
    return {

        calculate: function(quotes, minSwingPct, callback) {


            let zigZag_ = [];
            const MAX_QUOTES = quotes.length;
            let lastZag = 0;
            let swingHigh;
            // Recorremos todo el array de quotes de 0 hasta el MAX_QUOTES
            for (let i = 0; i < MAX_QUOTES; i++)
            {
                // Inicializamos valores

               // console.log(JSON.stringify(zigZag_));
                if(quotes[i - 1] == undefined){
                    lastZag = parseFloat(quotes[0].Close);
                    zigZag_.push(lastZag); // Metemos la base
                    if(parseFloat(lastZag) < parseFloat(quotes[1].Close))
                    {
                        swingHigh = true;
                    }
                    else
                    {
                        swingHigh = false;
                    }
                }
                //****************************

                if(parseFloat(lastZag) < parseFloat(quotes[i].Close))
                {


                    if(swingHigh)
                    {

                      // zigZag_ = zigZag_.slice(0, zigZag_.length - 1);
                       zigZag_[zigZag_.length - 1] = NaN;
                    }
                    swingHigh = true;

                    zigZag_.push({Close:parseFloat(quotes[i].Close), Date:quotes[i].Date});
                      //  console.log(quotes[i].Date + ',' + quotes[i].Open + ',' + quotes[i].High + ','+ quotes[i].Low+','+ quotes[i].Close + ',' + zigZag_[zigZag_.length - 1]);
                    lastZag = parseFloat(quotes[i].Close);


                    // Alcista
                }
                else
                {

                    if(swingHigh == false)
                    {
                        // Si swingHigh es falso estamos ante una bajada
                        // el anterior swinghigh es false quiere decir que es un dia consecutivo de baja
                        // por lo que sacamos el anterior del zig zag y re-asignamos un nuevo zig.
                        //zigZag_ = zigZag_.slice(0, zigZag_.length - 1);
                        zigZag_[zigZag_.length - 1] = NaN;
                    }

                                     zigZag_.push({Close:parseFloat(quotes[i].Close), Date:quotes[i].Date});
                    //console.log(quotes[i].Date + ',' + quotes[i].Open + ',' + quotes[i].High + ','+ quotes[i].Low+','+ quotes[i].Close + ',' + zigZag_[zigZag_.length - 1]);
                    swingHigh = false;
                    lastZag = parseFloat(quotes[i].Close);

                    // Es Bajista
                }


            }

            callback(null, zigZag_);


        }

    }
}();
module.exports = ZigZag;