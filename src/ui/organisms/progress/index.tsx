import { Progress } from 'antd'
import React from 'react'

type ProgressChartProps = {
  value?: number
}

export default function ProgressChart({ value }: ProgressChartProps) {
  return (
    <Progress
      type='circle'
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068'
      }}
      percent={value}
      width={200}
    />
  )
}
