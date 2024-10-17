import "./App.css";
import Home from "./pages/Home";
import PageLayout from "./components/PageLayout";
import { ThemeProvider } from "./components/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <PageLayout>
        <Home />
      </PageLayout>
    </ThemeProvider>
  );
}

export default App;
