import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { filterData } from './data/filterData';
import { useEffect, useState } from 'react';
import { apiUrl } from './data/filterData';

function App() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
      try {
        const result = await fetch(apiUrl);
        const output = await result.json();
        //save data into a variable
        setCourses(output.data);
      } catch (error) {
        console.log("Something went wrong");
        throw error;
      }
    }
    fetchData();
  },[]);

  return (
    <div className="App">
        <Navbar />
        <Filter 
          filterData = {filterData}
        />
        <Cards courses={courses}/>
    </div>
  );
}

export default App;
