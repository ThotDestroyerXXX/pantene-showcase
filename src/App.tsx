import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Benefit from "./components/benefit";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Ingredient from "./components/ingredient";
import Product from "./components/product";

const App = () => {
  gsap.registerPlugin(SplitText);
  gsap.registerPlugin(ScrollTrigger);
  return (
    <>
      <Navbar />
      <Hero />
      <Benefit />
      <Ingredient />
      <Product />
    </>
  );
};

export default App;
