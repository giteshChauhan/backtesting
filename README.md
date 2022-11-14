# Backtest: https://drag-equation-calculator.herokuapp.com/backtest

## About:
- To implement mean reversion strategy for backtesting.
- Using a NIFTY-50 dataset (2000-2021) for ITC stock.
- Here I used {papaparse} to parse .csv to json object.
- Also {recharts} for visual representation of data.

## DOM-Tree:
<pre>
                      Dashboard
                    /     |     \
                   /      |      \
                  /       |       \
              ChartLine  Table   ChartBar  
</pre>
