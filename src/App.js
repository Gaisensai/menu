import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';



const allCategories = ['all', ...new Set(items.map(item=> item.category))];
  console.log(allCategories);
function App() {
const [meals, setMeals]=useState(items);
const [categories, setCartegories]= useState(allCategories);

const filterItemhandler = (category)=>{
  if (category === 'all') {
    setMeals(items);
    return;
  };
    const newItem = items.filter(item=>item.category === category);
    setMeals(newItem);
    
};

  return(
    <main>
      <section className='menu-section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories categories ={categories} filterItem ={filterItemhandler} />
        <Menu items ={meals}/>
      </section>
    </main>
  )
}

export default App;