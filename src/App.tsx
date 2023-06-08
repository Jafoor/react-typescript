import "./App.css";
import { ThemeContextProvide } from "./components/context/ThemeContext";
import { Box } from "./components/context/Box";
function App() {
  return (
    <div className="App">
      <ThemeContextProvide>
        <Box/>
      </ThemeContextProvide>
    </div>
  );
}

export default App;
