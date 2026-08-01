import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import PageLayout from "./components/PageLayout";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./components/ThemeContext";
import Home from "./pages/Home";
import Research from "./pages/Research";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Life from "./pages/Life";

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <ScrollToTop />
        <PageLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/life" element={<Life />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </PageLayout>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
