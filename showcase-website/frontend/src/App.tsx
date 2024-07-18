import "./App.css";
import { ExampleInfinite } from "./sections/examples/ExampleInfinite";
import { ExamplePaginated } from "./sections/examples/ExamplePaginated";
import { ExampleSimple } from "./sections/examples/ExampleSimple";
import { Features } from "./sections/Features";
import { Props } from "./sections/Props";
import { Usage } from "./sections/Usage";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Data grid</h1>

        <p>
          This is a showcase of the data grid component. It is a
          customizable and extensible data grid component that can be used to
          display data in a tabular format.
        </p>

        <h2>Features</h2>

        <Features />

        <h2>Usage</h2>

        <Usage />

        <h3>Props</h3>

        <Props />

        <h2>Examples</h2>

        <div className="example__list">
          <ExampleSimple />

          <ExamplePaginated />

          <ExampleInfinite />
        </div>
      </div>
    </div>
  );
}

export default App;
