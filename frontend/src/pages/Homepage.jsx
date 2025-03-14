import Work from "../section/Homepage/Work";
import Features from "../section/Homepage/Features";
import CTA from "../section/Homepage/CTA";
import Hero from "../section/Homepage/Hero";
import Priceing from "../section/Homepage/Pricing";

const Homepage = () => {
  return (
    <div className="text-gray-900 bg-gray-100 font-Nunito">
      <Hero />
      <Work />
      <Features />
      <Priceing />
      <CTA />
    </div>
  );
};

export default Homepage;
