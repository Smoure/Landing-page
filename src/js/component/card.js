import React from "react";
import PropTypes from "prop-types";

export function Card(props) {
	return (
		<div className="card mb-3 mx-2" style={{ width: "270px" }}>
			<img
				className="card-img-top"
				src={props.img_url}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.crdTitle}</h5>
				<p className="card-text">{props.crdDesc}</p>
				<a href={props.btnLink} className={props.btnColor}>
					{props.btnTitle}
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	img_url: PropTypes.string,
	crdDesc: PropTypes.string,
	crdTitle: PropTypes.string,
	btnColor: PropTypes.string,
	btnTitle: PropTypes.string,
	btnLink: PropTypes.string
};
