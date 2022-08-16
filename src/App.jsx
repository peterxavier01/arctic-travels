import "./App.css";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Sidebar from "./components/Sidebar";
import Regions from "./components/Regions";
import Resorts from "./components/Resorts";
import Passes from "./components/Passes";
import Footer from "./components/Footer";

import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const { sidebarActive } = useStateContext();

  return (
    <div className="max-w-[100vw]">
      <Header />
      {sidebarActive && <Sidebar />}
      <Experience />
      <Regions />
      <Resorts />
      <Passes />
      <Footer />
    </div>
  );
};

export default App;
