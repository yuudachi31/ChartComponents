import React from 'react';
import { BarChart as MuiBarChart } from '@mui/x-charts/BarChart';
import type { ChartData } from './types';

interface Props {
  data: ChartData;
  width?: number;
  height?: number;
}

export default function BarChart({ data, width = 600, height = 300 }: Props) {
  // 基本資料驗證
  if (
    !data ||
    !Array.isArray(data.labels) ||
    data.labels.length === 0 ||
    !Array.isArray(data.datasets) ||
    data.datasets.length === 0
  ) {
    return <div style={{ color: 'red' }}>資料格式錯誤：無法載入柱狀圖，請確認資料完整</div>;
  }

  try {
    return (
      <MuiBarChart
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
        width={width}
        height={height}
      />
    );
  } catch (e) {
    return <div style={{ color: 'red' }}>資料格式錯誤：無法載入柱狀圖</div>;
  }
}