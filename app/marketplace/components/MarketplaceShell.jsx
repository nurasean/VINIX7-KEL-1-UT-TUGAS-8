import MarketplaceFooter from "./MarketplaceFooter";
import MarketplaceHeader from "./MarketplaceHeader";

export default function MarketplaceShell({ children }) {
  return (
    <div className="min-h-screen bg-[#F0F2F8] text-[#08497A]">
      <MarketplaceHeader />
      {children}
      <MarketplaceFooter />
    </div>
  );
}
