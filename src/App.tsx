import React, { useState } from 'react';
import { ChartData } from './types';
import Chart from './components/Chart';
import ChartForm from './components/ChartForm';
import { BarChart } from 'lucide-react';

function App() {
  const [chartData, setChartData] = useState<ChartData | null>(null);

  const handleChartSubmit = (data: ChartData) => {
    setChartData(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <BarChart className="mx-auto h-12 w-12 text-blue-500" />
          <h1 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            ECharts Visualization
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Create beautiful charts by pasting your JSON data below
          </p>
        </div>

        <ChartForm onSubmit={handleChartSubmit} />

        {chartData && (
          <div className="bg-white shadow rounded-lg p-6">
            <Chart data={chartData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;