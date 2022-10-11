import React from 'react'

function Navbar(props) {
  const {search,onInputChange,onSearchClick}=props
  return (
    <div className='main'>
     <h1 className='recipes'>
     <span className="material-symbols-outlined">
         fastfood</span>Food Recipe</h1>
         <div class="input-group w-50 mx-auto" >
  <input type="text" class="form-control"
  placeholder="Search Your  Recipe..." 
  value={search} 
  onChange={onInputChange} />
 <button className='btn-btn-dark bg-black' onClick={onSearchClick} style={{color:"white"}}>Search Recipe</button>
</div>
    </div>
  )
}

export default Navbar
