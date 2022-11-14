/** My fileServices includes methods:
 *  fetchData() : In order to parse csv data from input file to json object. (here I used papaparse module).
 * movingAverage() : This function is used to find moving average using past 30 days records from that date. (with O(n) time complexity ).
 * trades() : Here I tried to simulate some trades using avgData as calculated in above function. Also I simulated only long trades (buy trades).
 */

import Papa from "papaparse";

export function fetchData(id) {
  let arr = [];
  Papa.parse(document.getElementById(id).files[0], {
    delimiter: ",",
    download: true,
    header: true,
    complete: (res) => {
      for (let i = res.data.length - 101; i < res.data.length; i++)
        arr.push(res.data[i]);
    },
  });

  return arr;
}

export function movingAverage(id) {
  let arr = [];
  Papa.parse(document.getElementById(id).files[0], {
    delimiter: ",",
    download: true,
    header: true,
    complete: (res) => {
      let sum = 0;
      let baseAvg;

      for (let i = res.data.length - 131; i <= res.data.length - 101; i++)
        sum += parseFloat(res.data[i].Close);
      baseAvg = Math.round((sum / 30) * 100) / 100;
      arr.push({
        ...res.data[res.data.length - 101],
        Avg: baseAvg,
      });

      for (let i = res.data.length - 100; i < res.data.length; i++) {
        baseAvg =
          (baseAvg * 30 -
            parseFloat(res.data[i - 30].Close) +
            parseFloat(res.data[i].Close)) /
          30;
        baseAvg = Math.round(baseAvg * 100) / 100;
        arr.push({
          ...res.data[i],
          Avg: baseAvg,
        });
      }
    },
  });

  return arr;
}

export function trades(avgData) {
  let trades = [];

  let entryPoint = null,
    entryPrice;
  for (let data of avgData) {
    let currentDate = data.Date;
    let currentPrice = parseFloat(data.Close);
    let avgPrice = parseFloat(data.Avg);

    // entryPosition :  ClosePrice <= AvgPrice

    if (!entryPoint && currentPrice <= avgPrice) {
      entryPoint = currentDate;
      entryPrice = currentPrice;
    }

    // exitPosition
    else if (entryPoint) {
      let netProfit = Math.round((currentPrice - entryPrice) * 10000) / 10000;
      let profitPercent = (netProfit / currentPrice) * 100;

      // here profitPercent will ensure my stoploss which is 2%

      if (currentPrice > avgPrice || profitPercent < -2.0) {
        let exitPrice = currentPrice;
        // As Stoploss id auto enabled hence exitPrice is different from the currentPrice.
        if (profitPercent < -2.0) {
          exitPrice = entryPrice - entryPrice * 0.02;
          profitPercent = -1.999999;
          netProfit = Math.round((exitPrice - entryPrice) * 10000) / 10000;
        }

        trades.push({
          entryPoint,
          exitPoint: currentDate,
          entryPrice,
          exitPrice,
          netProfit,
          profitPercent,
        });
        entryPoint = null; // to ensure beginning of new trade
      }
    }
  }

  return trades;
}
