import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reward from "./pages/Reward";
import About from "./pages/About";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f8f6f1]">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/rewards" element={<Reward />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
