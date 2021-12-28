import React from "react";
import { Link } from "react-router-dom";
import Figure from 'react-bootstrap/Figure';

/*import logo_ciber from './images/logo_ciber.svg';*/
import juanchi from './images/juanchi.svg';
import ideas from './images/ideas.svg';

import { welcome } from './welcome.json';

var Home = () => {
  return (
	<React.Fragment>
		<div className="App-centered">
			<p>{ welcome }</p>
		</div>
		<div className="App-centered">
			<Link to="/about">
				<Figure>
					<Figure.Image
						src={juanchi}
						fluid
						alt= 'Juanchi'
						style= {{ maxWidth: '12rem' }}
					/>
					<Figure.Caption>
						⇧ Haz clic donde quieras ⇩
					</Figure.Caption>
				</Figure>
			</Link>
			<Link to="/ideas">
				<Figure>
					<Figure.Image
						src={ideas}
						fluid
						alt= 'Ideas'
						style= {{ maxWidth: '13rem' }}
					/>
				</Figure>
			</Link>
			{/*<Link to="/ciberseguridad">
				<Figure>
					<Figure.Image
						src={logo_ciber}
						fluid
						alt= 'Curso Ciberseguridade'
						style= {{ maxWidth: '10rem' }}
					/>
					<Figure.Caption>
						Ciberseguridade
					</Figure.Caption>
				</Figure>
			</Link>*/}
		</div>
	</React.Fragment>
  );
}
export default Home;
