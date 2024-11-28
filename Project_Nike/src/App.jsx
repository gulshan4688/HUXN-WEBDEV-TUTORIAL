import { useState } from 'react';
import Navigation from './Navigation/Nav'
import Products from './Products/Products';
import Recommended from './Recommended/Recommended';
import Sidebar from './Sidebar/Sidebar';
import productFromData from './db/data';
import Catergory from './Sidebar/category/Catergory';
import Card from './components/Card';


function App() {
  const [selectCategory, setSelectCategory] = useState(null);
  // ------------------ input filter --------------
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  }
  const filteredItems = productFromData.filter(product =>
    product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

  // ------------------ radio filter --------------
  const handleChange = (event) => {
    setSelectCategory(event.target.value);
  }

  // ------------------ buttons filter --------------
  const handleClick = (event) => {
    setSelectCategory(event.target.value);
  }
  //**************most important funtion for filtering **************** */

  function filteredData(ProductFromData, selected, query) {
    let filteredProducts = ProductFromData;
    // Filtering input terms
    if (query) {
      filteredProducts = filteredItems
    }
    //Selected Filter 
    if (selected) {
      filteredProducts = filteredProducts.filter(({ catergory, color, company, newPrice, title }) =>
        catergory === selected || color === selected || company === selected
        || newPrice === selected || title === selected
      );
    }
    return filteredProducts.map(({ img, title, star, reviews, newPrice, prevPrice }) =>
    (<Card key={Math.random()}
      img={img}
      title={title}
      star={star}
      reviews={reviews}
      prevPrice={prevPrice}
      newPrice={newPrice}
    />));

  }

  const result = filteredData(productFromData, selectCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange}  />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  )
}

export default App;
