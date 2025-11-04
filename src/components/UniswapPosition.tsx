import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";
import { formatNumberWithCommas } from "@/lib/utils";
import type { UniswapPositionData } from "@/types";

const positionId = 123456;

interface UniswapPositionProps {
  data: UniswapPositionData;
}

export const UniswapPosition = ({ data }: UniswapPositionProps) => {
  const { protocolLiquidity, unclaimedFees, volume24h } = data;
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-6">
        <div>
          <CardTitle className="text-base font-medium">PROTOCOL POSITION</CardTitle>
          <CardDescription>aeth / eth • 0.3% fee tier</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">position id</p>
            <span className="text-sm font-medium">#{positionId}</span>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">price range</p>
            <Badge variant="outline" className="bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500 animate-gradient">FULL RANGE</Badge>
          </div>
        </div>

        <Separator />

        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">protocol liquidity</span>
            <span className="text-sm font-medium">${formatNumberWithCommas(protocolLiquidity)}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">unclaimed fees</span>
            <span className="text-sm font-medium">${formatNumberWithCommas(unclaimedFees)}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">24h volume</span>
            <span className="text-sm font-medium">${formatNumberWithCommas(volume24h)}</span>
          </div>
        </div>
        
        <a href="https://app.uniswap.org/" target="_blank" rel="noopener noreferrer" className="w-full block mt-6">
          <Button variant="outline" size="sm" className="w-full gap-2">
            VIEW ON UNISWAP
            <ExternalLink className="h-4 w-4" />
          </Button>
        </a>
      </CardContent>
    </Card>
  );
};
