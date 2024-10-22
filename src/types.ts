export interface ChartData {
  type: 'line' | 'bar' | 'pie' | 'scatter' | 'radar' | 'mixed';
  title: string;
  legend?: string[];
  xAxis?: string[];
  yAxis?: string[];
  series: any[];
  indicator?: { name: string; max: number }[];
}