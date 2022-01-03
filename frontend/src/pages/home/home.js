import React from "react";
import { Link } from "react-router-dom";

/*import logo_ciber from './images/logo_ciber.svg';*/
import juanchi from './images/juanchi.svg';
import ideas from './images/ideas.svg';
import click from './images/click_anywhere.svg';

import { welcome } from './welcome.json';

var Home = () => {
  return (
	<React.Fragment>
		<div className="App-centered">
			<p>{ welcome }</p>
		</div>
		<div className="App-centered">
			<Link to="/about">
				<img src={juanchi} alt="Juanchi" style= {{ maxWidth: '12rem' }}/>
			</Link>
				<img src={click} alt="click anywhere" style= {{ maxWidth: '10rem' }}/>
			<Link to="/ideas">
				<img src={ideas} alt="Ideas" style= {{ maxWidth: '13rem' }}/>
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
