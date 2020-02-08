import React from "react";
import PropTypes from "prop-types";

export function Jumbotron(props) {
	return (
		<div className="jumbotron">
			<div className="container">
				<h1 className="display-4">{props.header}</h1>
				<p className="lead">
					Animals are really cool {"&"} I know a bunch of facts.
					<br />
					<strong>FACT.</strong> Opossums don
					{"'"}t carry Rabies.
					<br />
					FACT. Green Herons are one of the few tool-using birds.
					<br />
					FACT. Your pet definitely deserves extra treats.
					<br />
					Rename the title of this page with your favorite animal
					fact!
				</p>
				<div
					className="input-group input-group-lg"
					onChange={() => {
						props.header;
					}}>
					<div className="input-group-prepend" />
					<input
						type="text"
						className="form-control"
						aria-label="Large"
						aria-describedby="inputGroup-sizing-sm"
					/>
				</div>
			</div>
		</div>
	);
}

Jumbotron.propTypes = {
	header: PropTypes.string
};
