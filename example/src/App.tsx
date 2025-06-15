// App.tsx
import React from 'react';
// import './App.css';

// 匯入你剛剛做好的圖表元件
import { LineChart, BarChart, GaugeChart } from '../../src';
// import type { ChartData } from '../../src/types';
interface ChartData {
  labels: string[];
  datasets: {
    name: string;
    data: number[];
    color?: string;
  }[];
}
function App() {
  // 範例資料
  const sampleData: ChartData = {
    labels: ['一月', '二月', '三月', '四月'],
    datasets: [
      {
        name: 'CPU 使用率',
        data: [20, 40, 60, 80],
        color: '#3f51b5',
      },
      {
        name: '記憶體使用率',
        data: [50, 70, 30, 90],
        color: '#f50057',
      },
    ],
  };

  const gaugeData = {
    value: 68,
    label: '磁碟使用率',
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>📊 系統監控儀表板example</h2>

      <h3>折線圖 - 系統使用率</h3>
      <LineChart data={sampleData} />

      <h3>柱狀圖 - 系統使用率</h3>
      <BarChart data={sampleData} />

      <h3>儀表圖 - 磁碟使用率</h3>
      <GaugeChart data={gaugeData} />
    </div>
  );
}

export default App;