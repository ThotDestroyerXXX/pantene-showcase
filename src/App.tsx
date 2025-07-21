import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Benefit from "./components/benefit";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger, SplitText } from "gsap/all";
import Ingredient from "./components/ingredient";
import Flow from "./components/flow";
import Footer from "./components/footer";
import BlackFocus from "./components/black-focus";

const App = () => {
  gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);
  return (
    <>
      <BlackFocus />
      <Navbar />
      <Hero />
      <Benefit />
      <Ingredient />
      <Flow />
      <Footer />
    </>
  );
};

export default App;
