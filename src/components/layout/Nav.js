import React from 'react';
//import { NavLink } from 'react-router-dom';

const Nav = (props) =>{
	return (
		<nav>
		  <div className="holder">		  
			  <ul>
				<li><link to="/">Home</link></li>
				<li><link to="/nosotros">Nosotros</link></li>
				<li><link to="/novedades">Novedades</link></li>
				<li><link to="/contacto">Contacto</link></li>
			  </ul>
		  </div>
		</nav>
	);
}

export default Nav;