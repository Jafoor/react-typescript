import "./App.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
function App() {
  return (
    <div className="App">
      <Button
        handleClick={(event, id) => {
          console.log("🚀 ~ file: App.tsx:12 ~ App ~ handleClick:", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
