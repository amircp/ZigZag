#Zig Zag Technical Indicator

The intention of this repository is to build a set of technical indicators tools, currently i have  created the "ZigZag" indicator it is still in "build process":

**¿What is Zig Zag?**
The zig zag indicator is a basic tool that analysts use to find out when a security's trend is reversing. By determining the support and resistance areas, it helps to identify significant changes in price while filtering out short-term fluctuations, thus eliminating the noise of everyday market conditions. It is an excellent tool for any trader who follows indicators that use swing highs and swing lows.



## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* Historical Data
* Nodejs v6+


### Installing

To install dependencies:


```
npm install
```

Download historical data from investing.com on "historical" folder in the project directory.
Modify the index.js line 4

```
let stream = fs.createReadStream(historicalData + "/MXN/USDMXN.csv");
```
(TODO: create a better way to choose historical data and automated download)



## Running Code

```
node index.js
```
after it you will get the ZigZag data:

```
[ NaN,
  NaN,
  { Close: 18.217, Date: '03/10/17' },
  NaN,
  NaN,
  NaN,
  NaN,
  { Close: 18.8295, Date: '10/10/17' },
  { Close: 18.7095, Date: '11/10/17' },
  NaN,
  NaN,
  { Close: 19.035, Date: '16/10/17' },
  { Close: 18.771, Date: '17/10/17' },
  { Close: 18.862, Date: '18/10/17' },
  { Close: 18.808, Date: '19/10/17' },
  NaN,
  NaN,
  { Close: 19.2325, Date: '24/10/17' },
  { Close: 19.0405, Date: '25/10/17' },
  { Close: 19.206, Date: '26/10/17' },
  { Close: 19.135, Date: '27/10/17' },
  { Close: 19.2405, Date: '30/10/17' },
  NaN,
  NaN,
  { Close: 18.9849, Date: '02/11/17' },
  { Close: 19.2025, Date: '03/11/17' },
  { Close: 19.0235, Date: '06/11/17' },
  { Close: 19.1553, Date: '07/11/17' },
  NaN,
  { Close: 19.0395, Date: '09/11/17' },
  NaN,
  NaN,
  NaN,
  { Close: 19.251, Date: '15/11/17' },
  NaN,
  { Close: 18.914, Date: '17/11/17' },
  { Close: 18.9937, Date: '20/11/17' },
  NaN,
  NaN,
  NaN,
  { Close: 18.575, Date: '24/11/17' },
  { Close: 18.5848, Date: '27/11/17' },
  { Close: 18.543, Date: '28/11/17' },
  NaN,
  { Close: 18.631, Date: '30/11/17' },
  NaN,
  { Close: 18.6115, Date: '04/12/17' },
  NaN,
  NaN,
  { Close: 18.972, Date: '07/12/17' },
  { Close: 18.933, Date: '08/12/17' },
  NaN,
  { Close: 19.173, Date: '12/12/17' },
  { Close: 19.0128, Date: '13/12/17' },
  { Close: 19.1535, Date: '14/12/17' },
  NaN,
  { Close: 19.082, Date: '18/12/17' },
  { Close: 19.2085, Date: '19/12/17' },
  { Close: 19.2065, Date: '20/12/17' },
  NaN,
  { Close: 19.7492, Date: '22/12/17' } ]
  
```


## Authors

* **Amir Canto** 


## Acknowledgments

* InvestingMX for historical data.
