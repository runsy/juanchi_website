import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown'
import { Button} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

function Ideas() {

	const [apiResponse, setapiResponse] = useState(''); //initialize useState to ""

	const {id} = useParams();

	useEffect(() => {

		const api_server =
			process.env.NODE_ENV === "development"
				? "" //express server in development, localhost
				: "http://juanchi.pro:9000"; //express server in production

		fetch(api_server + "/api/" + id)
			.then(res => res.text())
			.then(res => setapiResponse(res));

	}, [id])

	const pathname = window.location.pathname;
	let main;
	if (pathname === "/ideas") {
		main = true;
	} else {
		main = false;
	};

	return (
		<React.Fragment>
			<div className="App-centered">
				<div className="App-text">
					<ReactMarkdown children={apiResponse} />
				</div>
			</div>
			<div className="back-button">
				{!main &&
					<Link to="/ideas">
						<Button variant="flat" size="lg">
							Ideas
						</Button>
					</Link>
				}
				&nbsp;
				<Link to="/">
					<Button variant="flat" size="lg">
						🏠 Casa
					</Button>
				</Link>
			</div>
		</React.Fragment>
	);
}

export default Ideas;
