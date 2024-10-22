import React, { useState } from 'react';
import { ChartData } from '../types';

interface ChartFormProps {
  onSubmit: (data: ChartData) => void;
}

const ChartForm: React.FC<ChartFormProps> = ({ onSubmit }) => {
  const [jsonInput, setJsonInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const parsedData = JSON.parse(jsonInput);
      onSubmit(parsedData);
    } catch (error) {
      alert('Invalid JSON input. Please check your data and try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <textarea
        value={jsonInput}
        onChange={(e) => setJsonInput(e.target.value)}
        className="w-full h-64 p-2 border rounded"
        placeholder="Paste your JSON data here..."
      />
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Generate Chart
      </button>
    </form>
  );
};

export default ChartForm;