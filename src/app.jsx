import { useState } from "react";
import Papa from "papaparse";
import Chart from "./chart";

const App = () => {
  const [data, setData] = useState([]);

  function fetchData() {
    Papa.parse(document.getElementById("csv-file").files[0], {
      delimiter: ",",
      download: true,
      header: true,
      complete: (res) => {
        let arr = [];
        for (let i = 0; i < 20; i++) arr.push(res.data[i]);
        setData(arr);
      },
    });
  }

  return (
    <>
      <div className="input-group m-4">
        <input
          className="form-control"
          id="csv-file"
          type="file"
          accept=".csv"
        />
        <button onClick={() => fetchData()} className="btn btn-sm btn-success">
          Process
        </button>
      </div>
      {data.length ? <Chart data={data} /> : null}
    </>
  );
};

export default App;
