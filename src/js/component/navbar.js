import React from "react";

export function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="#">
					Not sure who let me make a page
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNavDropdown"
					aria-controls="navbarNavDropdown"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNavDropdown">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								But click me for Dog pics{" "}
								<span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Forbidden Dogs
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Derpy Dogs
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="#"
								id="navbarDropdownMenuLink"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Looking for something else?
							</a>
							<div
								className="dropdown-menu"
								aria-labelledby="navbarDropdownMenuLink">
								<a className="dropdown-item" href="#">
									No you
									{"'"}
									re not
								</a>
								<a className="dropdown-item" href="#">
									Trust me
								</a>
								<a className="dropdown-item" href="#">
									Even More Cute Dogs
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
