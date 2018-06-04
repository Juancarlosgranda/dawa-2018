import React from 'react';
import meliodas from '../../assets/meliodas.PNG'

const home = () => (
<div>
	<h1>Pagina de inicio de nuestro Blog</h1>
	<img src={meliodas} alt="Meliodas" style={{
		maxHeight: '250px'
	}}/>
</div>);

export default home;