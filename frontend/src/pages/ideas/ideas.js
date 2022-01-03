import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown'
import LinkButton from '../../components/LinkButton';
import { useParams } from 'react-router-dom';

function Ideas() {

	const [apiResponse, setapiResponse] = useState(''); //initialize useState to ""
	const [apiComment, setapiComment] = useState([]);

	const {id} = useParams();

	useEffect(() => {

		const api_server =
			process.env.NODE_ENV === "development"
				? "" //express server in development, localhost
				: "http://juanchi.pro:9000"; //express server in production

		fetch(api_server + "/api/" + id)
			.then(res => res.text())
			.then(res => setapiResponse(res));

		//fetch(api_server + "/comments/" + id)
			//.then(res => res.json())
			//.then(data => setapiComment(data));

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

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
				<div className="h-entry App-text">
					{/* linkTarget sets the target for links */}
					<ReactMarkdown children = {apiResponse} />
					{/*apiComment.map((user) => (
						<div className="user">{user.Text}</div>
					))*/}
				</div>
			</div>
			<div className="back-button">
				{!main &&
					<LinkButton to='/ideas'>Ideas</LinkButton>
				}
				&nbsp;
				<LinkButton to='/'>🏠 Casa</LinkButton>
			</div>
		</React.Fragment>
	);
}

export default Ideas;
