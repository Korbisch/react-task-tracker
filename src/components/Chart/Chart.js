import ChartBar from "./ChartBar";
import "./Chart.css";
import { div } from "prelude-ls";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const calculateMaxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={calculateMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
