import React from "react";
import Plot from "react-plotly.js";

export const Chart =(props)=> {
 
    return (
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [
              props.firstChart.positives0 + 1,
              props.firstChart.negatives0,
              props.firstChart.neutrals0,
            ],
            type: "bar",
            marker: { color: "red" },
            name: "9-10-2022",
          },
          {
            type: "bar",
            x: [5, 6, 7],
            y: [
              props.secChart.positives1+1,
              props.secChart.negatives1,
              props.secChart.neutrals1,
            ],
            name: "10-10-2022",
            marker: { color: "#005467" },
          },
        ]}
        layout={{ width: 620, height: 540, title: "Twitter" }}
      />
    );
  
}
