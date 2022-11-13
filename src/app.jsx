import { useState } from "react";
import ChartLine from "./chartLine";

import { fetchData } from "./fileService";

const App = () => {
  const [data, setData] = useState([]);
  const [isSpinner, setIsSpinner] = useState(false);

  return (
    <>
      <h6
        className="ms-4 mt-2"
        style={{ color: "#2929e6", marginBottom: "-15px" }}
      >
        Backtesting Mean Reversion Strategy: using last 100 days trade.
      </h6>
      <div className="input-group m-4">
        <input
          className="form-control"
          id="csv-file"
          type="file"
          accept=".csv"
        />
        <button
          onClick={() => {
            const data = fetchData("csv-file");
            setIsSpinner(true);
            setTimeout(() => {
              setIsSpinner(false);
              setData(data);
            }, 3000);
          }}
          className="btn btn-sm btn-success"
        >
          Process
        </button>
      </div>
      {isSpinner ? (
        <div
          className="spinner-border text-primary"
          style={{ marginLeft: "44%" }}
          role="status"
        />
      ) : null}
      {data.length ? <ChartLine data={data} /> : null}
    </>
  );
};

export default App;
