import './App.css';
import { DataGrid } from 'data-grid'

function App() {
  const datas = {
    schema: [
      { displayName: 'Name', field: 'name' },
      { displayName: 'Age', field: 'age' },
      { displayName: 'Email', field: 'email' },
    ],
    data: [
      { name: 'Alice', age: 25, email: 'alice@alice.co' },
      { name: 'Bob', age: 30, email: 'bob@email.co' },
      { name: 'Charlie', age: 35, email: 'charlie@email.co' },
    ],
  }

  return (
    <div className="App">
      <DataGrid schema={datas.schema} data={datas.data} onRowClick={(row) => console.log(row)} />
    </div>
  );
}

export default App;
