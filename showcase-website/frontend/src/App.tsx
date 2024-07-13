import './App.css';
import { DataGrid } from 'data-grid'
import { useUsersData } from './hooks/useUsersData';

function App() {
  const schema = [
    { displayName: 'Name', field: 'name' },
    { displayName: 'Birth Date', field: 'birhdate' },
    { displayName: 'Email', field: 'email' },
    { displayName: 'Address', field: 'address' },
    { displayName: 'Phone', field: 'phone' },
  ]

  const users = useUsersData()

  return (
    <div className="App">
      <DataGrid schema={schema} data={users} onRowClick={(row) => console.log(row)} />
    </div>
  );
}

export default App;
