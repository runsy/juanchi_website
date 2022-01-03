// ./components/Button.js
import React from "react";

function Button(props) {
  return (
    <button className={'button'}>
		{props.children}
	</button>
  );
}
export default Button;
