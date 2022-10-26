import React from 'react';

const DropDown = () => {
    return (
        
           <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Niños</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="#">Niñas</a></li>
          
          </ul>
        </li> 
        
    );
}

export default DropDown;
