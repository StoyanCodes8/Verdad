"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    topic: "Healthcare Reform",
    mentions: 2100,
  },
  {
    topic: "Climate Policy",
    mentions: 1800,
  },
  {
    topic: "Economic Growth",
    mentions: 2800,
  },
  {
    topic: "Education",
    mentions: 2300,
  },
  {
    topic: "Immigration",
    mentions: 1950,
  },
]

export function TrendingTopics() {
  return (
    <div className="space-y-4">
      <ChartContainer
        config={{
          mentions: {
            label: "Mentions",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="aspect-[4/3]"
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: 10,
              bottom: 0,
            }}
          >
            <Tooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey="mentions"
              strokeWidth={2}
              activeDot={{
                r: 6,
                style: { fill: "var(--chart-1)", opacity: 0.8 },
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
      <div className="space-y-2">
        {data.map((item) => (
          <div key={item.topic} className="flex items-center justify-between text-sm">
            <span>{item.topic}</span>
            <span className="font-medium">{item.mentions.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

