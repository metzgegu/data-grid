import "./App.css";
import { ExampleInfinite } from "./sections/ExampleInfinite";
import { ExamplePaginated } from "./sections/ExamplePaginated";
import { ExampleSimple } from "./sections/ExampleSimple";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Data grid</h1>
        <ExampleSimple />

        <ExamplePaginated />

        <ExampleInfinite />
      </div>
    </div>
  );
}

export default App;
