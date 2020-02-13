import React, { useState } from "react";
import PropTypes from "prop-types";

export function Jumbotron(props) {
	const [fact, setFact] = useState("(Your fact here)");
	const [list, setList] = useState([]);

	return (
		<div className="container mt-3">
			<div className="jumbotron">
				<h1 className="display-4">Hello, World!</h1>
				<p className="lead">
					Animals are really cool {"&"} I know a bunch of facts.
					<br />
					<strong>FACT.</strong> Opossums don
					{"'"}t carry Rabies.
					<br />
					<strong>FACT.</strong> Green Herons are one of the few
					tool-using birds.
					<br />
					<strong>FACT.</strong> Your pet definitely deserves extra
					treats.
					<br />
					<strong>
						FACT. {fact}
						{list.map((item, index) => {
							return (
								<div
									key={index}
									onClick={() =>
										setList(list.filter(e => e !== item))
									}>
									{item}
								</div>
							);
						})}
					</strong>
					<br />
					Add your favorite animal fact to the list!
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
						onChange={e => setFact(e.target.value)}
						onKeyPress={e => {
							if (event.key === "Enter") {
								setList(list.concat(fact));
								setFact("");
							}
						}}
					/>
				</div>
			</div>
		</div>
	);
}

Jumbotron.propTypes = {
	header: PropTypes.string
};
