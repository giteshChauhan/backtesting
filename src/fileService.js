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
