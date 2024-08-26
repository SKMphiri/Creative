import React, { useState } from 'react'
import './Navbar.css'
export const Navbar = () => {
  const [query, setQuery] = useState("")
  return (
    <div className='navbar'>
     <img src="" alt="" className="logo" />
      <h1 className='logo-name'>Creative.</h1>

      <div className="search-box">
        <input type="text" placeholder='Pesquise seu prato preferido' size={50} onChange={e => setQuery(e.target.value)} />
      </div>

    </div>
  )
}

export default Navbar