import React from 'react';
import ReactECharts from 'echarts-for-react';
import { ChartData } from '../types';

interface ChartProps {
  data: ChartData;
}

const Chart: React.FC<ChartProps> = ({ data }) => {
  const getOption = () => {
    const baseOption: any = {
      title: {
        text: data.title,
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
      },
      legend: {
        data: data.legend,
        bottom: 0,
      },
    };

    switch (data.type) {
      case 'line':
      case 'bar':
        return {
          ...baseOption,
          xAxis: {
            type: 'category',
            data: data.xAxis,
          },
          yAxis: {
            type: 'value',
          },
          series: data.series,
        };
      case 'pie':
        return {
          ...baseOption,
          series: [
            {
              type: 'pie',
              radius: '50%',
              data: data.series,
            },
          ],
        };
      case 'scatter':
        return {
          ...baseOption,
          xAxis: { type: 'value' },
          yAxis: { type: 'value' },
          series: data.series,
        };
      case 'radar':
        return {
          ...baseOption,
          radar: {
            indicator: data.indicator,
          },
          series: data.series,
        };
      case 'mixed':
        return {
          ...baseOption,
          xAxis: {
            type: 'category',
            data: data.xAxis,
          },
          yAxis: {
            type: 'value',
          },
          series: data.series,
        };
      default:
        return baseOption;
    }
  };

  return <ReactECharts option={getOption()} style={{ height: '400px', width: '100%' }} />;
};

export default Chart;