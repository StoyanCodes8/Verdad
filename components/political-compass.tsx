"use client"

import { ScatterChart, Scatter, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Politician A", economic: 7, social: 3 },
  { name: "Politician B", economic: -5, social: 4 },
  { name: "Politician C", economic: 2, social: -6 },
  { name: "Politician D", economic: -3, social: -2 },
]

export function PoliticalCompass() {
  return (
    <ChartContainer
      config={{
        position: {
          label: "Position",
          color: "hsl(var(--chart-1))",
        },
      }}
      className="aspect-square"
    >
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <XAxis
            type="number"
            dataKey="economic"
            name="Economic"
            domain={[-10, 10]}
            label={{ value: "Economic Left-Right", position: "bottom" }}
          />
          <YAxis
            type="number"
            dataKey="social"
            name="Social"
            domain={[-10, 10]}
            label={{ value: "Social Liberal-Conservative", angle: -90, position: "left" }}
          />
          <Tooltip content={<ChartTooltipContent />} />
          <Scatter name="Politicians" data={data} fill="var(--chart-1)" />
        </ScatterChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

