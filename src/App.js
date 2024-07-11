import { About } from "./components/About/About";
import { About2 } from "./components/About/About2";
import { About3 } from "./components/About/About3";
import AppBanner from "./components/AppBanner/AppBanner";
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div className="overflow-x-hidden bg-white dark:bg-black dark:text-white text-black">
      <Navbar />
      <Hero />
      <About />
      <About2 />
      <About3 />
      <Contact />
      <Pricing />
      <AppBanner />
    </div>
  );
}

export default App;
