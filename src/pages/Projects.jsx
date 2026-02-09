import React from "react";
import ProductList from "../components/ProductList/ProductList";
// Images
import bgpng from "../assets/images/index/section1BG.png";

export default function Projects() {
  return (
    <div className="projects-page">
      <section className="projects-section" style={{
          backgroundImage: `url(${bgpng})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
        }}>
          <ProductList />
      </section>
    </div>
  );
}