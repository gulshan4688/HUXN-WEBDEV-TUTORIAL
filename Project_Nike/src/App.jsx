import { useState } from 'react';
import Navigation from './Navigation/Nav'
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import product from './db/data';


function App() {
  const [selectCategory, setSelectCategory] = useState(null);
  // ------------------ input filter --------------
  const [query, setQuery] = useState("");
  const handleChange = (event) => {
    setQuery(event.target.value);
  }
  const filteredItems = product.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!==-1
  );
  
  // ------------------ radio filter --------------
  


  return (
    <>
      <Sidebar />
      <Navigation />
      <Recommended />
      <Products />
    </>
  )
}

export default App;
