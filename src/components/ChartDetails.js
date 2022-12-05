import React,{useState,useEffect} from "react";
import { Chart } from "./Chart";

export const ChartDetails = () => {
  
  const [firstChart, setFirstChart] = useState({});
  const [secChart, setSecChart] = useState({});
  
      const getData = () => {
        fetch("twitter.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
          .then(function (response) {
            // console.log(response);
            return response.json();
          })
            .then(function (myJson) {
            const fixedPart0 =myJson.stats.twitter.timelineStats.timeline[0].sentimentAsCategories;
            const fixedPart1 =myJson.stats.twitter.timelineStats.timeline[1].sentimentAsCategories;
              
              setFirstChart((prevState) => {
                return {
                  positives0: fixedPart0.positiveTweets,
                  negatives0: fixedPart0.negativeTweets,
                  neutrals0: fixedPart0.neutralTweets,
                  ...prevState,
                };
              });
              setSecChart((prevState) => {
                return {
                  positives1: fixedPart1.positiveTweets,
                  negatives1: fixedPart1.negativeTweets,
                  neutrals1: fixedPart1.neutralTweets,
                  ...prevState,
                };
              });
           
           
          });
  };
  
      useEffect(() => {
        getData();
      }, []);
    
    
  return <Chart firstChart={firstChart} secChart={ secChart} />;
}