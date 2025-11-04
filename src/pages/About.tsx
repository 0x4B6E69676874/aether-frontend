import { SocialIcon } from "react-social-icons";

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
              AETHER is a new liquidity management system designed to make better use 
              of the fees generated from initial liquidity in new token launches.
              Traditionally, developers create and fund a DEX liquidity pool, 
              then burn the resulting LP tokens / position to eliminate any ability to withdraw liquidity—preventing 
              rug pulls but also locking away valuable trading fees forever.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              AETHER protocol changes this model by depositing the initial LP tokens / position into a 
              controlled smart contract that removes the dev's ability to pull liquidity, while allowing for actions that benefit the token.
              This structure enables the protocol to utilize trading fees for actions that strengthen the token—such as 
              reinvesting liquidity or performing buybacks—turning idle LP fees into an engine for sustainable token growth.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">key features</h2>
            <ul className="text-muted-foreground leading-relaxed space-y-2 list-disc list-inside">
              <li>fee collection</li>
              <li>token buybacks and burn</li>
              <li>automated liquidity reinvestment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">get involved</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Join our community to stay updated on the latest developments and participate
              in decisions. 
            </p>
            <div className="flex items-center gap-4">
              <a href="https://x.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <SocialIcon network="x" bgColor="#141414" fgColor="#999999" style={{ height: 32, width: 32 }} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <SocialIcon network="telegram" bgColor="#141414" fgColor="#999999" style={{ height: 32, width: 32 }} />
              </a>
            </div>
          </section>
        </div>

        <div className="flex justify-center items-center gap-4 py-8 border-t border-border">
          <a href="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            back to home
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
