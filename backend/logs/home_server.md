# Home server with React and Raspberry

I decided a month and a half ago to restart my personal page and make it more indie, more personal, after all.

I knew I didn't want a proprietary server or to depend on anyone, so I decided to use a Raspberry to do my setup, it's cheap and consumes little power and space! The only problem I see is that it gets too hot...

And why React? Because I saw that React is mainly for SPA, that is, Single Page Applications. Besides Javascript is 'in' and React is too.

## React is difficult

Yes, friends, that's the truth. While Javascript is a language like any other, very similar to C in my understanding, React is something else. It is not a development platform, it is a library, which makes things easy and powerful, but for that you will have to program a lot. That's why I don't recommend this Setup for inexperienced programmers.

## Things I wanted to do

First of all a simple page, a home page, of course, and an "about me". Then a blog, or rather, a [Digital Garden](/ideas/jardin_digital).

I wanted the garden entries to be simple and in a universal format. I opted for Markdown.

So I needed not only a nice and pretty frontend, but also a backend that could read .md files.

## Make Raspberry Boot from a USB Stick

SD cards have caused me many problems in the past, because of data loss due to corruption. Also it has to be a fast one, Class 10 at least.

Better to boot the Raspberrian from a pendrive. In the console:

`sudo -E rpi-eeprom-config --edit`

The boot order should be:

`BOOT_ORDER=0xf41`

Then reboot:

`sudo reboot`

This means: firstly try to boot from USB (4) and as second option from SD (1).

## First Steps

I did it all in two folders: *frontend* and *backend*, inside a *react_app* dir. And I started to install things.

The first thing to do was to install *Node.js* and *npm* packages on Linux.

- In frontend, in the "react-app" dir:

`npx create-react-app frontend #install react and all the dependencies`

`cd frontend`

`npm start //start react in dev mode, the same than "npm start dev"`

I went to *http://localhost:3000* in the web browser. I saw the React logo.

- For the backend, in the *react-app* dir:


`npm install -g express-generator #easy express server generator`

`express backend #create the express app`

`cd backend`

`npm install #install dependencies`

`npm start #start express`

I went to *http://localhost:9000* in the web browser. I saw the Express stuff.

## Configure the proxy

It's annoying, but when using a backend like Express we need a proxy during development for both frontend and backend to communicate.

I edited the *frontend/package.json* file:

```
{
  "name": "react-app",
  "version": "0.1.0",
  "private": true,
  "proxy": "http://localhost:9000",
  "dependencies": {
```

## Create the Frontend App

Seems simple, doesn't it? It took me a month and a bit to get it to work for me.

## Create the Backend App

I needed to make an API to communicate the two worlds.
I edited the *backend/app.js* file to add/modify to it:

```
var apiRouter = require("./routes/api");
...
app.use("/api", apiRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
```

I created a new file: *backend/routes/api.js*

```
let express = require('express')
let router = express.Router();

function load_log(req, res, id){
	var fs = require('fs');
	var file_path = "logs/" + id + ".md";
	if(!fs.existsSync(file_path)) {
		file_path  = "logs/main.md";
	}
	fs.readFile(file_path, "utf8", function(err, data){
		if(err == null) {
			res.send(data);
		} else if(err.code === 'ENOENT') {
		// file does not exist
		} else {
			throw err;
		}
	});
}

router.get("/:id", function(req, res) {
	let id = req.params['id'];
	if (typeof id === 'undefined'){
		id = "main";
	}
	load_log(req, res, id)
});

module.exports = router;
```

It is the core of the API that reads the md files and sends them back to the frontend.
How does it read them? Very easy, by reading the path. For example if the path is juanchi.pro/ideas/log, the file that will be read will be 'log.md'. By default, if the path is wrong or does not exist, it will load the main file 'main.md'.

## Reading from the Frontend

I did the nitty-gritty in */frontend/src/pages/ideas*:

```
import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown'
import { Button} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

function Ideas() {

const [apiResponse, setapiResponse] = useState(''); //initialize useState to ""

const {id} = useParams();

useEffect(() => {

​	const api_server =
​		process.env.NODE_ENV === "development"
​			? "" //express server in development, localhost
​			: "http://juanchi.pro:9000"; //express server in production

​	fetch(api_server + "/api/" + id)
​		.then(res => res.text())
​		.then(res => setapiResponse(res));
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

​	</React.Fragment>
);

}

export default Ideas;
```

I started this part using the Class Component method but then modified it to use "Hooks".

## Production mode

React has its own server to serve the Frontend without further ado. But I preferred to use the open source web server Nginx.
React can create the static files (it generates them in the */build* folder) to use with Nginx with:

`npm run build`

Optionally, you could use the React server itself, it's easy:

`serve -s build`

If you want to start the Express Server in the background:

`nohup npm start > foo.out 2> foo.err < /dev/null &`

## Final tweaks for Nginx

### Configure NGINX server for React with backend

I created/edited the file */etc/nginx/conf.d/react.conf*:

```
server {
	listen 80;
	server_name juanchi.pro;

	location / {
		proxy_set_header   X-Forwarded-For $remote_addr;
		proxy_set_header   Host $http_host;
		proxy_pass         http://localhost:3000;
	}

}
```

### Redirect WWW to non-WWW

I created the file: */etc/nginx/conf.d/redirect.conf*

```
server {
	server_name www.juanchi.pro;
	return 301 $scheme://juanchi.pro$request_uri;
}
```

### Avoid the "Invalid Host Header" error

1.  I created/edited the file */frontend/.env*:

  ```
  HOST = juanchi.pro 
  ```

2. I added to */etc/hosts*:

  ```
  0.0.0.0 juanchi.pro
  ```

### Bad F5 routing

I went crazy to solve this, it turns out that the routing does not work when the F5 key (page reload) is pressed.

[The stackoverflow thread](https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually/36623117#36623117)

The solution for Nginx is to put in */etc/nginx/sites-available*:

```
location / {
	try_files $uri $uri/ /index.html;
}
```

## Et voilá!

And the end result is this website.

[Source Code](https://github.com/runsy/juanchi_website)

