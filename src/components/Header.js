import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <div class="head">
    <header>
        <div class="header-part1">
            <a href="#" class="logo">
                <img src="images/logo2.png" alt="Logo"/>
            </a>
        </div>
        <div class="search-box">
            <input type="text" placeholder="Search..."/>
            <button class="search-button"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
        <div class="header-part2">
            <button class="login-button"><a href="#">Login</a></button>
            <a href="./pages/cart.html" class="cart-button"><FontAwesomeIcon icon={faCartShopping} /></a>
        </div>
    </header>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">All Products</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle dropdown-hover" href="#" id="womenDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Women
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="womenDropdown">
                            <li><a class="dropdown-item" href="#">All Products</a></li>
                            <li><a class="dropdown-item" href="#">Dresses</a></li>
                            <li><a class="dropdown-item" href="#">Pants</a></li>
                            <li><a class="dropdown-item" href="#">Sarees</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="menDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Men
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="menDropdown">
                            <li><a class="dropdown-item" href="#">All Products</a></li>
                            <li><a class="dropdown-item" href="#">Shirts</a></li>
                            <li><a class="dropdown-item" href="#">Pants</a></li>
                            <li><a class="dropdown-item" href="#">T-shirts</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Kids</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>
  )
}

export default Header;
