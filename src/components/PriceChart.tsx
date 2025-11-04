import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import type { PriceChartData } from "@/types";

interface PriceChartProps {
  data: PriceChartData;
}

export const PriceChart = ({ data: chartData }: PriceChartProps) => {
  const { data, currentPrice, changePercent } = chartData;
  const changeSign = changePercent >= 0 ? "+" : "-";
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="">token price</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="pb-">
            <div className="text-2xl">${currentPrice}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-muted-foreground font-medium">{changeSign}{Math.abs(changePercent)}%</span> from yesterday
            </p>
          </div>
          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke="hsl(var(--border))"
                  horizontal={true}
                  vertical={false}
                />
                <XAxis
                  dataKey="time"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col">
                              <span className="text-[0.70rem] uppercase text-muted-foreground">
                                Price
                              </span>
                              <span className="font-bold text-muted-foreground">
                                ${payload[0].value}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
