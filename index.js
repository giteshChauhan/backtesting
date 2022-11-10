const { parse } = require("csv-parse");
const fs = require("fs");

const data = [];

fs.createReadStream("./ITC.csv")
  .pipe(
    parse({
      delimiter: ",",
      ltrim: true,
      columns: true,
    })
  )
  .on("data", (row) => {
    data.push(row);
  })
  .on("close", () => {
    console.log(data);
  });
