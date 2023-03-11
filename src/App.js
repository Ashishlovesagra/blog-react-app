import './App.css';
import DataApi from './Data/DataApi';
import Rout from './Utility/Routes';


function App() {
  return (
    <div className="App">
      <DataApi>
        <Rout/>
      </DataApi>
    </div>
  );
}

export default App;
