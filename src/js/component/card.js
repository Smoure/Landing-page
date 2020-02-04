import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card mx-2" style={{ width: "300px" }}>
			<img
				className="card-img-top"
				src={props.img_url}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">Which one is the forbidden dog?</h5>
				<p className="card-text">
					Your doggo can be on here! Submit above your cute pupper.
				</p>
				<a href="#" className="btn btn-primary">
					Read More
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	img_url: PropTypes.string
};
