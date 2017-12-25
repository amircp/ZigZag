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
            let MinMax = []
            let base = 0;

                // Recorremos todo el array de quotes de 0 hasta el MAX_QUOTES
                for (let i = obsStart; i < quotes.length -1 ; i++)
                {

                    MinMax.push((quotes[i].High < quotes[((i - 1 < 0) ? 0 : (i-1))].High) ? quotes[i].Low : quotes[i].High);
                    if(base == 0)
                    {
                        base = quotes[i].High;
                    }
                    let MinMaxPlus = (quotes[i + 1].High < quotes[i].High) ? quotes[i+1].Low : quotes[i+1].High;

                    if(MinMax[i] < MinMax[((i - 1 < 0) ? 0 : (i-1))])
                    {
                        if(MinMaxPlus < MinMax[i])
                        {


                        }
                        else
                        {
                            if( Math.abs(   ((MinMax[i] - base) / base) * 100) >= minSwingPct)
                            {
                                zigZag_[i] = (MinMax[i]);
                                base = MinMax[i];
                              //  console.log('test')
                            }

                        }
                    } else
                    {
                        if(MinMaxPlus > MinMax[i])
                        {


                        }
                        else
                        {

                          if( Math.abs(   ((MinMax[i] - base) / base) * 100) >= minSwingPct)
                            {
                                zigZag_[i] = (MinMax[i]);
                                base = MinMax[i];
                                //console.log('test2');
                            }

                        }
                        if(zigZag_[i] == undefined)
                        {
                           // console.log(quotes[i].Date+','+quotes[i].Open+','+quotes[i].High+','+quotes[i].Low+','+ quotes[i].Close+','+ MinMax[i]);
                        }
                        else
                        {
                         //     console.log(quotes[i].Date+','+quotes[i].Open+','+quotes[i].High+','+quotes[i].Low+','+ quotes[i].Close+','+zigZag_[i]+ ', ZigZag');

                        }

                    }

                                    console.log(quotes[i].Date+','+quotes[i].Open+','+quotes[i].High+','+quotes[i].Low+','+ quotes[i].Close+','+ MinMax[i]);

                }

               callback(null, zigZag_);


        }

    }
}();
module.exports = ZigZag;