import React from "react";

export function NavBar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container">
				<a className="navbar-brand" href="https://www.google.com">
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
							<a
								className="nav-link"
								href="https://www.thedodo.com/16-amazing-animal-facts-1094218100.html">
								But click me for more cool animal facts
								<span className="sr-only">(current)</span>
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
								MORE
							</a>
							<div
								className="dropdown-menu"
								aria-labelledby="navbarDropdownMenuLink">
								<a
									className="dropdown-item"
									href="https://www.gmail.com">
									Contact me for specific animal facts that
									you
									{"'"}
									re too lazy to google.
								</a>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
