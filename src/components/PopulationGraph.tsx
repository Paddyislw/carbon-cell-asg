import { useEffect, useMemo, useRef } from "react";
import { useGetPopulationData } from "../api";
import * as echarts from "echarts";
import { formatNumber } from "../utils/helperFunction";

const PopulationGraph = () => {
  const { data, isSuccess, isError } = useGetPopulationData();
  console.log("data.....", data);
  const { years, populations, nations, originalData } = data || {};
  const lineChartRef = useRef(null);
  const pieChartRef = useRef(null);

  const optionsForLine = useMemo(() => {
    return isSuccess
      ? {
          title: {
            text: "Population Trend",
            textStyle: {
              color: "#ccc",
            },
          },
          tooltip: {
            trigger: "axis",
          },
          legend: {
            data: nations,
            textStyle: {
              color: "#ccc",
            },
          },
          xAxis: {
            type: "category",
            data: years,
          },
          yAxis: {
            type: "value",
            name: "Population",
            offset: 0,
            axisLabel: {
              show: true,
              formatter: function (value: number) {
                return formatNumber(value);
              },
            },
          },
          series:
            nations?.length &&
            nations.map((nation) => ({
              name: nation,
              type: "line",
              data: originalData
                .filter((item: any) => item.Nation === nation)
                .map((item: any) => item.Population),
              smooth: true,
              symbol: "circle",
              symbolSize: 6,
              itemStyle: {
                color: "#2ab42a",
              },
            })),
        }
      : {};
  }, [data, isSuccess]);

  const optionsForPie = useMemo(() => {
    return isSuccess
      ? {
          tooltip: {
            trigger: "item",
          },
          legend: {
            top: "5%",
            left: "center",
            textStyle: {
              color: "#ccc",
            },
          },
          series: [
            {
              name: "Population",
              type: "pie",
              radius: ["40%", "70%"],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: "#fff",
                borderWidth: 2,
              },
              label: {
                show: false,
                position: "center",
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 40,
                  fontWeight: "bold",
                },
              },
              labelLine: {
                show: false,
              },
              data: years.map((item: string, index: number) => ({
                value: populations[index],
                name: item,
              })),
            },
          ],
        }
      : {};
  }, [data, isSuccess]);

  useEffect(() => {
    const lineChart = echarts.init(lineChartRef.current);
    const pieChart = echarts.init(pieChartRef.current);
    if (optionsForLine && optionsForPie) {
      lineChart.setOption(optionsForLine);
      pieChart.setOption(optionsForPie);
    }
  }, [optionsForLine, optionsForPie]);

  return (
    <div>
      {isError && <p>Something went wrong from fetching population data</p>}
      <div className="flex gap-2 flex-wrap">
        <div
          ref={lineChartRef}
          style={{ width: "600px", height: "400px" }}
          id="chart-container"
          className="mt-6 bg-[#171717] pt-3 px-2 rounded-lg shadow"
        />
        <div
          ref={pieChartRef}
          style={{ width: "600px", height: "400px" }}
          id="chart-container"
          className="mt-6 bg-[#171717] pt-3 px-2 rounded-lg shadow"
        />
      </div>
    </div>
  );
};

//

export default PopulationGraph;
