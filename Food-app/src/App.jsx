import React, { useState,useEffect } from 'react'
import Navbar from './Compoents/Navbar'
import Recipes from './Compoents/Recipes'
import axios from 'axios'
import './App.css'

function App() {
 
  const [search,setSearch]=useState("chinese")
  const [recipes,setRecipes]=useState([])

  const APP_ID="973b83a8";
  const APP_KEY="50719ffdd07c3005aa385d0b59101f28"
  useEffect( ()=>{
    
    getRecipes();
  },[])

  const getRecipes = async () => {
    // const res = await axios.get(
    //   `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    
    //   );
    //   console.log(res)
    setRecipes(res.data.hits);
  };
  const onInputChange=(e)=>{
    setSearch(e.target.value)
// console.log(e.target.value)
  }
  const onSearchClick=()=>{
    getRecipes()
  }
  return (
    <div className="App">
      <h1>food-app</h1>
      <Navbar search={search}
       onInputChange={onInputChange}
       onSearchClick={onSearchClick}
      />
      <div className='container'>
      <Recipes recipes={recipes}/>
      </div>
    </div>
  )
}

export default App
