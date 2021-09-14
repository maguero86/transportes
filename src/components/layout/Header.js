import React from 'react';
import '../../styles/components/layout/Header.css';

const Header = (props) =>{
	return (
		<Header>
			<div className="holder">
				<div className="logo">
					<img src="images/logo.jpg" width="100" alt="Transportes X"/>
					<h1>Transportes X</h1>
				</div>
			</div>
		</Header>
	);
}

export default Header;