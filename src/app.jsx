import { useState } from "react";
import Papa from "papaparse";

const App = () => {
  const [data, setData] = useState([]);

  function fetchData() {
    Papa.parse(document.getElementById("csv-file").files[0], {
      delimiter: ",",
      download: true,
      header: true,
      complete: (res) => console.log(res.data),
    });
  }

  return (
    <>
      <input id="csv-file" type="file" accept=".csv" />
      <button onClick={() => fetchData()}>Process</button>
    </>
  );
};

export default App;
