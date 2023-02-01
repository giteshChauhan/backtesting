# Backtest: Currently in dev stage

## About:
- To implement mean reversion strategy for backtesting.
- Using a NIFTY-50 dataset (2000-2021) for ITC stock.
- Here I used {papaparse} to parse .csv to json object.
- Also {recharts} for visual representation of data.
- <b>Here is my main code for calculating trades:https://github.com/giteshChauhan/backtesting/blob/master/src/fileService.js </b>

## DOM-Tree:
<pre>
                      Dashboard
                    /     |     \
                   /      |      \
                  /       |       \
              ChartLine  Table   ChartBar  
</pre>
