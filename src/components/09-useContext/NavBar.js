import React from 'react'
import {  NavLink } from 'react-router-dom'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" >UseContext</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink exact activeClassName="active" to="./" className="nav-link" aria-current="page" >Home</NavLink>
              <NavLink exact activeClassName="active" to="./about" className="nav-link" >About</NavLink>
              <NavLink exact activeClassNames="active" to="./login" className="nav-link" >Login</NavLink>
            
            </div>
          </div>
        </div>
      </nav>
    )
}

{/* <nav>
            
<ul>

<li>
    <Link to="./">Home</Link>
</li>

<li>
    <Link to="/about">About</Link>
</li>

<li>
    <Link to="/login">Login</Link>
</li>


</ul>

</nav> */}