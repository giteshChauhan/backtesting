import { useState } from "react";
import ChartLine from "./chartLine";

import { fetchData, movingAverage } from "./fileService";

const App = () => {
  const [data, setData] = useState([]);
  const [avgData, setAvgData] = useState([]);
  const [isSpinner, setIsSpinner] = useState(false);

  return (
    <>
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
            const avgData = movingAverage("csv-file");
            setIsSpinner(true);
            setTimeout(() => {
              setIsSpinner(false);
              setData(data);
              setAvgData(avgData);
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
      {data.length ? (
        <>
          {" "}
          <h6
            className="ms-4 mt-2"
            style={{ color: "#2929e6", marginBottom: "-15px" }}
          >
            Last 100 days trade:
          </h6>
          <ChartLine data={data} />
        </>
      ) : null}

      {avgData.length ? (
        <>
          {" "}
          <h6
            className="ms-4 mt-2"
            style={{ color: "green", marginBottom: "-15px" }}
          >
            Finding 30 day moving average for each day trade & plotting onto
            same chart :
          </h6>
          <ChartLine data={avgData} isAvg={true} />
        </>
      ) : null}
    </>
  );
};

export default App;
