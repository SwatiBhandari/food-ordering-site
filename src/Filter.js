import React,{ useState, useContext } from 'react'
import './Filter.css'
import Product from './Product';
import data from "./TemplateData.json"
import { SearchTermContext } from './App'


function Filter() {
  const searchTermContext = useContext(SearchTermContext);

  return (
    <div className='templateContainer'>
      <div className='template_Container'>
        {
          data
          .filter((val) => {
            if(searchTermContext.searchTerm == ''){
              <h1>Search for your fav items !!!!</h1>
            } else if(val.title.toLowerCase().includes(searchTermContext.searchTerm.toLowerCase())){
              return val;
            }
          })
          .map((val) => {
            return(
              <Product 
              id={val.id}
              title={val.title}
              price={val.price}
              rating={val.rating} 
              />
            )
          })
        }
      </div>
      
    </div>
  )
}

export default Filter
