let ZigZag = function(){




    return {

        calculate: function(quotes, minSwingPct, callback) {

            let swingHigh  = false;
            let swingLow = false;
            let zigZag_ = [];
            let obsStart = 0;
            let obsEnd = quotes.length - 1;

            let obsLow = 0, obsHigh = 0;

                // Recorremos todo el array de quotes de 0 hasta el MAX_QUOTES
                for (let obs = obsStart; obs <= quotes.length - 1; obs++)
                {


                    console.log('obs:'+obs);
                                        console.log('obsHigh:'+obsHigh);
                    if (quotes[obs].High > quotes[obsHigh].High)
                    {
                            obsHigh = obs;
                        if (!swingLow &&
                             Math.abs(   ((quotes[obsHigh].High - quotes[obsLow].Low) / quotes[obsLow].Low) * 100) >= minSwingPct)
                        {
                            zigZag_.push(quotes[obsLow].Low);  // new swinglow
                            swingHigh = false;
                            swingLow = true;
                        }
                        if (swingLow)
                        {
                            obsLow = obsHigh;
                        }
                    }
                    if (quotes[obs].Low < quotes[obsLow].Low)
                    {
                        obsLow = obs;
                        if (!swingHigh &&
                            Math.abs( (   (quotes[obsHigh].High - quotes[obsLow].Low) / quotes[obsLow].Low) * 100) >= minSwingPct)
                        {
                            zigZag_.push(quotes[obsHigh].High);  // new swinghigh
                            swingHigh = true;
                            swingLow = false;
                        }
                        if (swingHigh)
                        {
                            obsHigh = obsLow;
                        }
                    }


                }

               callback(null, zigZag_);


        }

    }
}();
module.exports = ZigZag;