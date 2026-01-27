import IndexTop from "../components/IndexTop/IndexTop";
import PortfolioSection from "../components/PortfolioSection/portfolioSection";
import QASection from "../components/QASection/QASection";
import CTASection from "../components/CTASection/CTASection";
import ArticleSection from "../components/ArticleSection/ArticleSection";

// TODO: 首頁背景圖片未完成
export default function Home() {
  return (
    <div className="container-fulid">
      <IndexTop />
      <PortfolioSection />
      <ArticleSection />
      <QASection />
      <CTASection />
    </div>
  );
}
