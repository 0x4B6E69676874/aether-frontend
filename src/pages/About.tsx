import { SocialIcon } from "react-social-icons";
import { DistributionChart } from "@/components/DistributionChart";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6 space-y-8 max-w-3xl">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">about aether</h1>
          <p className="text-muted-foreground">a new liquidity management system</p>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-3">what is aether?</h2>
            <p className="text-muted-foreground leading-relaxed">
              AETHER is a token built on a next-generation liquidity management system designed to make better use of trading fees from new token launches.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Traditionally, developers fund a decentralized exchange (DEX) liquidity pool and then burn the resulting LP tokens to prevent liquidity withdrawal. 
              While this practice protects against rug pulls, it also permanently locks away valuable trading fees that could support the token’s long-term stability.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              AETHER Protocol changes this model by locking the initial liquidity position inside a transparent, verifiable smart contract. 
              This removes developer control over liquidity while enabling rule-based, community-driven actions — such as reinvesting collected fees or executing controlled buybacks.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              By transforming passive LP fees into an active mechanism for liquidity growth and stability, AETHER establishes a more sustainable foundation for token ecosystems.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">token distribution</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The initial token distribution for AETHER is designed to support the protocol's development,
              incentivize early adopters, and ensure long-term sustainability. The allocation is as follows:
            </p>
            <DistributionChart />
            <p className="text-muted-foreground mb-2">
              Treasury wallet: 0x5E2CB7a61aA77c5b829Ce285E9C59c9ed4B3629e
            </p>
            <p className="text-muted-foreground">
              Tokens allocated to the treasury will be used for ongoing development, marketing, and ecosystem growth.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">key features</h2>
            <ul className="text-muted-foreground leading-relaxed space-y-2 list-disc list-inside">
              <li>rug proof liquidity / fee collection</li>
              <li>token buybacks and burn</li>
              <li>liquidity reinvestment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">get involved</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Join our community to stay updated on the latest developments and participate
              in decisions. 
            </p>
            <div className="flex items-center gap-4">
              <a href="https://x.com/_aetherprotocol" className="text-muted-foreground hover:text-foreground transition-colors">
                <SocialIcon network="x" bgColor="#141414" fgColor="#999999" style={{ height: 32, width: 32 }} />
              </a>
              <a href="https://t.me/+DmNt3Zo-BoM5YTdh" className="text-muted-foreground hover:text-foreground transition-colors">
                <SocialIcon network="telegram" bgColor="#141414" fgColor="#999999" style={{ height: 32, width: 32 }} />
              </a>
            </div>
          </section>
        </div>

        <div className="flex justify-center items-center gap-4 py-8 border-t border-border">
          <a href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            wip
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
