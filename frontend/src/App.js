import React, { lazy, Suspense } from 'react';
import { isBrowser } from "react-device-detect";
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import './App.css';
import { Button} from 'react-bootstrap';
import { Switch, Route, Link, withRouter } from 'react-router-dom';

import Home from './pages/home/home';
//import Ciberseguridad from './pages/ciberseguridad/ciberseguridad';
//import About from './pages/about/about';
import Ideas from './pages/ideas/ideas';

var About = lazy(() => import('./pages/about/about'));
var Ciberseguridad = lazy(() => import('./pages/ciberseguridad/ciberseguridad'));

//Select the logo, if desktop browser or mobile.
var logo = isBrowser ?
	require("./images/logo.svg").default :
	require("./images/logo_mobile.svg").default
//Load images
var email = require("./images/email.svg").default
var instagram = require("./images/instagram.svg").default
var _404 = require("./images/404.svg").default

//Classes

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {hasError: false};
	}

	static getDerivedStateFromError(error) {
		return {hasError: true};
	}

	render() {
		if (this.state.hasError) {
				return <p>¡Carga de página fallida! Por favor, recárgala.</p>;
		}

		return this.props.children;
	}
}

//Tooltips

var renderEmailTooltip = (props) => (
<Tooltip id="email-tooltip" {...props}>
	Enviar e-mail
</Tooltip>
);

var renderInstagramTooltip = (props) => (
<Tooltip id="email-tooltip" {...props}>
	Ver Instagram
</Tooltip>
);

//404 Page
const NoMatchPage = () => {
	return (
		<React.Fragment>
			<div>
				<img src={_404} className="_404" alt="404 Error" />
				<h3>404 - Not found</h3>
			</div>
			<div className="back-button">
				<Link to="/">
					<Button variant="flat" size="lg">
						Volver
					</Button>
				</Link>
			</div>
		</React.Fragment>
	);
};

//Main Paging

var Main = () => {
	return (
		<Switch> {/* The Switch decides which component to show based on the current URL.*/}
			<Route exact path='/' component={Home}></Route>
			<Route exact path='/ciberseguridad' component={Ciberseguridad}></Route>
			<Route exact path='/about' component={About}></Route>
			<Route exact path='/ideas/:id' component={withRouter(Ideas)}></Route>
			<Route path='/ideas' component={Ideas}></Route>
			<Route component={NoMatchPage}/>
		</Switch>
	);
}

//App class

function App() {
	return(
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="Juanchi" />
			</header>
			<ErrorBoundary>
				<Suspense fallback={<p>Cargando...</p>}>
					<Main />
				</Suspense>
			</ErrorBoundary>
			<Route exact path='/'>
				<footer class="text-center">
					<p>
					<OverlayTrigger placement="left" overlay={renderEmailTooltip}>
						<a href="mailto:juancho.proaso@gmail.com">
							<img src={email} className="email" alt="E-mail" />
						</a>
					</OverlayTrigger>
					<OverlayTrigger placement="right" overlay={renderInstagramTooltip}>
						<a href="http://instagram.com/juan.diaz.diaz.ferrol">
							<img src={instagram} className="instagram" alt="instagram" />
						</a>
					</OverlayTrigger>
					</p>
					<p>Alojado en una Raspberry | Desarrollado con React</p>
				</footer>
			</Route>
		</div>
	)
}

export default App;
