import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown'
import LinkButton from '../../components/LinkButton';
import { useParams } from 'react-router-dom';
//import Comments from './comments';
//var CONFIG = require('../../config.json');
//var Load_Comments = CONFIG.Load_Comments;

function Ideas() {

	const [apiResponse, setapiResponse] = useState(''); //initialize useState to ""

	const {id} = useParams();

	const api_server =
		process.env.NODE_ENV === "development"
			? "" //express server in development, localhost
			: "http://juanchi.pro:9000"; //express server in production
	const api_path = api_server + "/api/" + id
	//const comments_path = api_server + "/comments/" + id

	useEffect(() => {

		fetch(api_path)
			.then(res => res.text())
			.then(res => setapiResponse(res));

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
						{/*!main && Load_Comments &&
							<div id = "comments">
								<Comments path = {comments_path} main = {main}/>
							</div>
						*/}
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
