import { useEffect, useState } from "react";
import "./BarChart.css";

const BarChart = () => {
  const [freq, setFreq] = useState(undefined);

  const [yaxis, setYAxis] = useState([]);

  const fetchData = async () => {
    const url =
      "https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new";
    const result = await fetch(url);

    let data = await result.text();
    console.log(data);

    data = data.split("\n").filter(Boolean); // converts data into array.
    // at the end of the response there is an empty string insetead of a number ,
    // so we have filter it with Boolean so that we get only truthy value.

    let map = {};

    data.forEach((item) => {
      if (map[item]) {
        map[item] = map[item] + 1;
      } else {
        map[item] = 1;
      }
    });

    setFreq(map);
    console.log("map", map);
  };

  // preparing y-axis data
  // [40, 30, 20 ,10, 0] => if max val = 31, or 35 or in 30s.
  useEffect(() => {
    if (freq) {
      const maxVal = Math.max(...Object.values(freq));
      const maxValToPlot = Math.ceil(maxVal / 10) * 10;

      let arr = [];

      for (let i = maxValToPlot / 10; i >= 0; i--) {
        arr.push(i * 10); // 40, 30, 20 , 10 , 0
      }
      setYAxis(arr);
    }
  }, [freq]);

  console.log("freq", freq, yaxis);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <div
            className="box-y-axis"
            style={{ height: `${yaxis && yaxis[0]}%` }}
          >
            {yaxis?.map((val, index) => (
              <div key={index}>
                <span>{val}</span>
              </div>
            ))}
          </div>

          {freq &&
            Object.entries(freq)?.map(([key, val]) => (
              <div className="box-x-axis">
                <div style={{ height: `${val}%` }} className="graph"></div>

                <div className="index">{key}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BarChart;
