import IndexTop from "../components/IndexTop/IndexTop";
import PortfolioSection from "../components/PortfolioSection/portfolioSection";
import CTASection from "../components/CTASection/CTASection";

// TODO: 首頁背景圖片未完成
export default function Home() {
  return (
    <div className="container-fulid">
      <IndexTop />
      <PortfolioSection />
      <CTASection />
    </div>
  );
}
