let ZigZag = function(){




    return {

        calculate: function(quotes, minSwingPct, callback) {

            let swingHigh  = false;
            let swingLow = false;
            let zigZag_ = [];
            let obsStart = 0;
            let obsEnd = quotes.length - 1;
            console.log(quotes);
            let obsLow = 0, obsHigh = 0;

            let base = 0;
            let MinMax = 0.00;
                // Recorremos todo el array de quotes de 0 hasta el MAX_QUOTES
                for (let i = 0; i < quotes.length; i++)
                {

                    if(quotes[i-1]!=undefined)
                    {
                            if( quotes[i].High < quotes[i - 1].High )
                            {
                                MinMax = quotes[i].Low;
                            }
                            else
                            {
                                MinMax = quotes[i].High;
                            }
                            var date =(quotes[i].Date);
                            date = date.replace('.','/');
                            date = date.replace('.','/');
                            console.log(date+','+quotes[i].Open+','+quotes[i].High+','+quotes[i].Low+','+ quotes[i].Close+','+ MinMax);

                    }

                }

               callback(null, zigZag_);


        }

    }
}();
module.exports = ZigZag;