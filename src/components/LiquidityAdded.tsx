import { DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { truncateHash, formatNumber, formatTimeAgo, formatNumberWithCommas } from "@/lib/utils";
import type { LiquidityAddedData } from "@/types";

interface LiquidityAddedProps {
  data: LiquidityAddedData;
}

export const LiquidityAdded = ({ data }: LiquidityAddedProps) => {
  const { transactions, transactionCount, totalLiquidity } = data;
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">LIQUIDITY ADDED</CardTitle>
        <DollarSign className="h-4 w-4 text-green-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold mb-4">${formatNumberWithCommas(totalLiquidity)}</div>
        <div className="space-y-2">
          {transactions.map((tx) => (
            <div
              key={tx.id}
              className="flex justify-between items-center text-xs gap-2"
            >
              <div className="flex items-center gap-2">
                <span className="text-muted-foreground font-mono hidden lg:inline">{tx.hash}</span>
                <span className="text-muted-foreground font-mono lg:hidden">{truncateHash(tx.hash)}</span>
                <span className="text-muted-foreground">• {formatTimeAgo(tx.timestamp)}</span>
              </div>
              <span className="font-medium whitespace-nowrap">${formatNumber(tx.amount)}</span>
            </div>
          ))}
        </div>
        {transactionCount - transactions.length > 0 && (
          <p className="text-xs text-center text-muted-foreground/60 mt-4">
            +{transactionCount - transactions.length} more transactions
          </p>
        )}
      </CardContent>
    </Card>
  );
};
