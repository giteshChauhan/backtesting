import { useState } from "react";
import Papa from "papaparse";
import ChartLine from "./chartLine";

const App = () => {
  const [data, setData] = useState([]);

  function fetchData() {
    Papa.parse(document.getElementById("csv-file").files[0], {
      delimiter: ",",
      download: true,
      header: true,
      complete: (res) => {
        let arr = [];
        for (let i = res.data.length - 101; i < res.data.length; i++)
          arr.push(res.data[i]);
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
      {data.length ? <ChartLine data={data} /> : null}
    </>
  );
};

export default App;
