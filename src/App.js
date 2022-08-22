import "./App.css";
import Header from "./Header";
import Chart from "./Chart";
import Graph from "./Graph";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const ninja = useSelector((state) => state.ninja);

  return (
    <div className="App">
      <Header title={ninja.details.title} />
      <div>
        <div className="d-flex">
          <Sidebar details={ninja.details} />
          <div>
            <Graph sales={ninja.sales} />
            <Chart sales={ninja.sales} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
