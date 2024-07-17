import './App.css';
import { ExamplePaginated } from './sections/ExamplePaginated';
import { ExampleSimple } from './sections/ExampleSimple';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Data grid</h1>
        <ExampleSimple />

        <ExamplePaginated />
      </div> 
    </div>
  );
}

export default App;
