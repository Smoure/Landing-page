import React from "react";
import { NavBar } from "./navbar";
import { Card } from "./card";
import { Jumbotron } from "./jumbotron";
import { Footer } from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { format } from "url";

//create your first component
export function Home() {
	return (
		<>
			<NavBar />
			<Jumbotron />
			<div className="d-flex justify-content-center">
				<Card img_url="https://i.barkpost.com/wp-content/uploads/2015/03/Screen-Shot-2015-03-20-at-1.33.59-PM.png?q=70&fit=crop&crop=entropy&w=808&h=500" />
				<Card img_url="https://www.sadanduseless.com/wp-content/uploads/2014/03/dd1.jpg" />
				<Card img_url="https://i.pinimg.com/originals/45/0a/a6/450aa6e4daeacb2a0b8eee6d87e5f933.jpg" />
				<Card img_url="https://i.ytimg.com/vi/maKrR-TKpJQ/maxresdefault.jpg" />
			</div>
			<Footer />
		</>
	);
}
