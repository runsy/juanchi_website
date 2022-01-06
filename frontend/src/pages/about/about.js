import React from 'react';
import LinkButton from '../../components/LinkButton';

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
			<div className="back-button"><LinkButton to='/'>Volver</LinkButton>
			</div>
		</div>
	</React.Fragment>
  );
}
export default About;
