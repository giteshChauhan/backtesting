const Table = ({ data }) => {
  return (
    <div>
      <table className="table">
        <thead
          style={{ color: "green", fontWeight: "bold", marginBottom: "5px" }}
        >
          <tr>
            <th scope="col">#Trade</th>
            <th scope="col">EntryDate</th>
            <th scope="col">ExitDate</th>
            <th scope="col">EntryPrice</th>
            <th scope="col">ExitPrice</th>
            <th scope="col">Net Profit/Loss</th>
            <th scope="col">Profit %</th>
          </tr>
        </thead>
        <tbody>
          {data.map(
            (
              {
                entryPoint,
                exitPoint,
                entryPrice,
                exitPrice,
                netProfit,
                profitPercent,
              },
              index
            ) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{entryPoint}</td>
                <td>{exitPoint}</td>
                <td>{entryPrice}</td>
                <td>{exitPrice}</td>
                <td>{netProfit}</td>
                <td>{profitPercent}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
