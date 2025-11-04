import { PriceChart } from "@/components/PriceChart";
import { TokensBurnt } from "@/components/TokensBurnt";
import { LiquidityAdded } from "@/components/LiquidityAdded";
import { UniswapPosition } from "@/components/UniswapPosition";
import { SocialIcon } from "react-social-icons";
import { useAetherData } from "@/hooks/useAetherData";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Index = () => {
  const { data, isLoading, error } = useAetherData();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground text-xl">loading aether data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <p className="text-foreground text-xl mb-2">failed to load data</p>
          <p className="text-muted-foreground text-sm">{String(error)}</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground text-xl">no data available</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">aether</h1>
          <p
            className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
            onClick={() => {
              navigator.clipboard.writeText("0xDcFa32Cc9E29E13dE685118b2aeF353e057d12FE");
              toast.success("address copied to clipboard");
            }}
            title="Click to copy address"
          >
            ca: 0xDcFa32Cc9E29E13dE685118b2aeF353e057d12FE
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <PriceChart data={data.priceChart} />
          </div>
          <UniswapPosition data={data.uniswapPosition} />
        </div>

        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <TokensBurnt data={data.tokensBurnt} />
          <LiquidityAdded data={data.liquidityAdded} />
        </div>

        <div className="flex justify-center items-center gap-4 py-8">
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            about
          </Link>
          <span className="text-muted-foreground">|</span>
          <a href="https://x.com" className="text-muted-foreground hover:text-foreground transition-colors">
            <SocialIcon network="x" bgColor="#141414" fgColor="#999999" style={{ height: 26, width: 26 }} />
          </a>
          <span className="text-muted-foreground">|</span>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <SocialIcon network="telegram" bgColor="#141414" fgColor="#999999" style={{ height: 26, width: 26 }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
