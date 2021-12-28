import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown'
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Ideas extends Component {

	constructor(props) {
		super(props);
		this.state = { apiResponse: "" };
	};

	callAPI() {
		//const hostname = window.location.hostname
		const api_server =
			process.env.NODE_ENV === "development"
				? "" //express server in development, localhost
				: "http://juanchi.pro:9000"; //express server in production
		let id = this.props.match.params.id
		if (id === "undefined") {
			id = "main";
		}
		fetch(api_server + "/api/" + id)
			.then(res => res.text())
			.then(res => this.setState({ apiResponse: res }));
	};

	componentDidMount() {
		this.callAPI();
	};

	render() {
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
					<ReactMarkdown children={this.state.apiResponse} />
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
	)};
}

export default Ideas;