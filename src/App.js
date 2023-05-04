import './App.css';
import Navbar from './components/Navbar';
import Filter from './components/Filter';
import Cards from './components/Cards';
import { filterData } from './data/filterData';
import { useEffect, useState } from 'react';
import { apiUrl } from './data/filterData';
import Spinner from './components/Spinner';
import {toast} from "react-toastify";

function App() {

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async() => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      //save data into a variable
      setCourses(output.data);
    } catch (error) {
      toast.error("Network me koi dikkat hai");
      console.log("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  },[]);

  return (
    <div className='app'>
      <div>
        <Navbar />
      </div>

      <div>
        <Filter 
            filterData = {filterData}
          />
      </div>

      <div>
        {
          loading ? (<Spinner />) : (<Cards courses={courses}/>)
        }
      </div>
       
        
    </div>
  );
}

export default App;
