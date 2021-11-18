import React from 'react';

const NovedadItem = (props) => {
	const { title, subtitle, imagen, body } = props;
	
	return (
		<div className="novedades">
			<h1>{title}</h1>
			<h2>{subtitle}</h2>
			<img src={imagen}/>
			<div dangerouslySetInnerHtml={{__html:body}}/>
			<hr/>
		</div>
	);
}

export default NovedadITem;