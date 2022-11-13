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
