import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

var Ciberseguridad = () => {
	
  return (
	<React.Fragment>
		<div className="App-centered">
			<h1>Ciberseguridad</h1>			
			<p>Libros, temas y prácticas</p>
			<a href="https://drive.google.com/drive/folders/1BVavn8NL5Qy3pGwtnvSnC-se1vQM2a7K?usp=sharing">Descargar</a>			
			<div><br /></div>	
			<p>Software online GRC (Gestión de Riesgos y Cumplimiento)</p>
			<a href="/simplerisk">Acceder</a>
			<div><br /></div>
			<Link to="/">
				<Button variant="flat" size="lg">
					Volver
				</Button>
			</Link>
		</div>
	</React.Fragment>
  );
}
export default Ciberseguridad;