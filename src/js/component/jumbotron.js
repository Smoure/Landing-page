import React from "react";

export function Jumbotron() {
	return (
		<div className="jumbotron">
			<div className="container">
				<h1 className="display-4">Hello, world!</h1>
				<p className="lead">
					I like dogs.
					<br />
					Could you tell?
					<br />
					Show me your doggy! vvv
					<br />
				</p>
				<form>
					<div className="form-group">
						<input
							type="file"
							className="form-control-file"
							id="exampleFormControlFile1"
						/>
					</div>
				</form>
			</div>
		</div>
	);
}
