import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

var About = () => {
  var timeline = require("./images/timeline.svg").default
  return (
	<React.Fragment>
		<div className="App-centered">
			<h1>¿Quién soy?</h1>
			<div className="App-text">
				<p>Soy profe de instituto.</p>
				<p>Me gusta la tecnología, los juegos y la buena música.</p>
				<a href="https://github.com/runsy" target="_blank" rel="noreferrer">My Github</a>
			</div>
			<div className="App-centered">
				<img src={timeline} className="App-timeline" alt="Línea de tiempo" />
			</div>
			<div className="back-button">
				<Link to="/">
					<Button variant="flat" size="lg">
						Volver
					</Button>
				</Link>
			</div>
		</div>
	</React.Fragment>
  );
}
export default About;
