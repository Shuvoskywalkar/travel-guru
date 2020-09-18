import React from 'react';
import './Header.css'
import Logo from '../../Image/Logo.png'
const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light p-5 ">
<img src={Logo} alt="Logo is not here" class="mx-5 w-15"/>
  <input class="form-control mr-sm-1 w-50 mx-5" type="search" placeholder="Search your Destination" aria-label="Search"/>
  <a class="navbar-brand mx-3" href="#">News</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link navbar-brand mx-3" href="#">Destination <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class=" navbar-brand mx-3" href="#">Blog</a>
      </li>
      <li class="nav-item dropdown">
        
      <a class=" navbar-brand mx-3" href="#">Contact</a>
      </li>
      
    </ul>
    <form class="form-inline my-2 my-lg-0">
     
      <button class="btn btn-warning
       my-2 my-sm-0 px-4  w-175 mx-5" type="submit">Login</button>
    </form>
  </div>
</nav>

        
    );
};


export default Header;