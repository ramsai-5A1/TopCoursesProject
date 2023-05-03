import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { FilterData } from './data/filterData';

function App() {

  return (
    <div className="App">
        <Navbar />
        <Filter 
          filterData = {FilterData}
        />
        <Cards />
    </div>
  );
}

export default App;
