import Table from "react-bootstrap/Table";
import "./chart.css";

function Chart({ sales }) {
  return (
    <div className="chart_module">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Week Ending</th>
            <th>Retail Sales</th>
            <th>Whole Sales</th>
            <th>Units Sold</th>
            <th>Retail Margin</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((item) => {
            return (
              <tr>
                <td>{item.weekEnding}</td>
                <td>${item.retailSales.toLocaleString("en-US")}</td>
                <td>${item.wholesaleSales.toLocaleString("en-US")}</td>
                <td>{item.unitsSold}</td>
                <td>${item.retailerMargin.toLocaleString("en-US")}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
export default Chart;
