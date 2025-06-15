import React from 'react';
import { LineChart as MuiLineChart } from '@mui/x-charts/LineChart';
import type { ChartData } from './types';

interface Props {
  data: ChartData;
  width?: number;
  height?: number;
  className?: string;
}

export default function LineChart({ data, width = 600, height = 300, className }: Props) {
  // 簡易資料驗證函式
  const isValidData = (data: ChartData) => {
    if (!data) return false;
    if (!Array.isArray(data.labels) || data.labels.length === 0) return false;
    if (!Array.isArray(data.datasets) || data.datasets.length === 0) return false;
    for (const ds of data.datasets) {
      if (!Array.isArray(ds.data) || ds.data.length !== data.labels.length) return false;
      // 可再檢查資料是否為數字
      if (ds.data.some(value => typeof value !== 'number' || isNaN(value))) return false;
    }
    return true;
  };

  if (!isValidData(data)) {
    return <div style={{ color: 'red' }}>資料格式錯誤：請確認 labels 與 datasets 是否正確且長度一致。</div>;
  }

  try {
    return (
      <MuiLineChart
        className={className}
        width={width}
        height={height}
        xAxis={[
          {
            scaleType: 'band',
            data: data.labels,
          } as any,
        ]}
        series={data.datasets.map(ds => ({
          data: ds.data,
          label: ds.name,
          color: ds.color || undefined,
        }))}
      />
    );
  } catch (error) {
    return <div style={{ color: 'red' }}>載入折線圖時發生錯誤</div>;
  }
}
