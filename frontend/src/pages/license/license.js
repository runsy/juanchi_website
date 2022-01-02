import React from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

var License = () => {
  return (
	<React.Fragment>
		<div className="App-centered">
			<h1>License</h1>
			<div className="App-text">
				<p>All the text content & images on this site -not specified below- are made by me and licensed as follows:</p>
				<p><a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA 4.0</a></p>
				<p>Other images/licenses:</p>
				<ul>
					<li>
						Juanchi Guy, by <a href="https://illlustrations.co/" target="_blank" rel="noreferrer">vijay verma</a> | License: <a href="https://en.wikipedia.org/wiki/MIT_License#License_terms" target="_blank" rel="noreferrer">MIT</a>
					</li>
				</ul>
			</div>
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
}
export default License;
