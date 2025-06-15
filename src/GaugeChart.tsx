import React from 'react';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

interface Props {
  data: {
    value: number; // 百分比值，如 75
    label?: string;
  };
  width?: number;
  height?: number;
}

export default function GaugeChart({ data, width = 300, height = 200 }: Props) {
  if (
    !data ||
    typeof data.value !== 'number' ||
    isNaN(data.value) ||
    data.value < 0 ||
    data.value > 100
  ) {
    return (
      <div style={{ color: 'red' }}>
        資料錯誤：請提供介於 0 到 100 之間的數字型別 value
      </div>
    );
  }

  return (
    <div>
      {data.label && <div style={{ marginBottom: 8, fontWeight: 'bold' }}>{data.label}</div>}
      <Gauge
        value={data.value}
        valueMax={100}
        width={width}
        height={height}
        text={({ value }) => `${value}%`}
        sx={{
          [`& .${gaugeClasses.valueText}`]: {
            fontSize: 24,
          },
        }}
      />
    </div>
  );
}
