import IndexTop from "../components/IndexTop/IndexTop";
import PortfolioSection from "../components/PortfolioSection/portfolioSection";
import QASection from "../components/QASection/QASection";
import RollSection from "../components/Roll/RollSection";
import CTASection from "../components/CTASection/CTASection";
import ArticleSection from "../components/ArticleSection/ArticleSection";


export default function Home() {
  return (
    <div className="home-page-wrap overflow-hidden">
      <IndexTop />
      <PortfolioSection />
      <ArticleSection />
      <QASection />
      <RollSection />
      <CTASection />
    </div>
  );
}
