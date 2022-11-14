import { useState } from "react";

import ChartBar from "./chartBar";
import ChartLine from "./chartLine";
import Table from "./table";

import { fetchData, movingAverage, trades } from "./fileService";

const App = () => {
  const [data, setData] = useState([]);
  const [avgData, setAvgData] = useState([]);
  const [tradeData, setTradeData] = useState([]);
  const [isSpinner, setIsSpinner] = useState(false);
  const [isSpinnerLower, setIsSpinnerLower] = useState(false);

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
          <h6 style={{ color: "#2929e6", textAlign: "center" }}>
            Last 100 days trade:
          </h6>
          <ChartLine data={data} />
        </>
      ) : null}

      {avgData.length ? (
        <>
          <h6 style={{ color: "green", textAlign: "center" }}>
            Finding 30 day moving average for each day trade & plotting onto
            same chart :
          </h6>
          <ChartLine data={avgData} isAvg={true} />
        </>
      ) : null}
      {avgData.length ? (
        <button
          className="btn btn-success mb-4"
          style={{ width: "100%" }}
          onClick={() => {
            const data = trades(avgData);
            setIsSpinnerLower(true);
            setTimeout(() => {
              setIsSpinnerLower(false);
              setTradeData(data);
            }, 3000);
          }}
        >
          Process Trades
        </button>
      ) : null}
      {isSpinnerLower ? (
        <div
          className="spinner-border text-success"
          style={{ marginLeft: "44%" }}
          role="status"
        />
      ) : null}
      {tradeData.length ? <Table data={tradeData} /> : null}
      {tradeData.length ? <ChartBar data={tradeData} /> : null}
    </>
  );
};

export default App;
