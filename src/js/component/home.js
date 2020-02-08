import React, { useState } from "react";
import { NavBar } from "./navbar";
import { Card } from "./card";
import { Jumbotron } from "./jumbotron";
import { Footer } from "./footer";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { format } from "url";

//create your first component
export function Home() {
	const [header, setHeader] = useState("Hello, World");
	const [color, setColor] = useState("info");

	return (
		<>
			<NavBar
				navLink="http://www.google.com"
				contact="http://www.gmail.com"
			/>
			<Jumbotron header="Hello, World!" />
			<div className="d-flex justify-content-center">
				<Card
					img_url="https://cdn10.bigcommerce.com/s-f0iq3/products/354/images/2651/OspreyStare1__69270.1559173373.1280.1280.jpg?c=2"
					crdTitle="Cool Raptors"
					crdDesc="Raptors are badass birds that are modern day Dinos; Owls, hawks, etc. The kind that can probably eat you if it had the chance."
					btnColor="btn btn-primary"
					btnTitle="Cool Raptors"
				/>
				<Card
					img_url="https://www.sadanduseless.com/wp-content/uploads/2014/03/dd1.jpg"
					crdTitle="Derpy Dogs"
					crdDesc="Derpy dogs are a category of animals that you may not have heard of. Their ancestor is the derpy wolf, so cute but so vicious. Would pet 100%."
					btnColor="btn btn-danger"
					btnTitle="Derpy Pups"
				/>
				<Card
					img_url="https://i.pinimg.com/originals/45/0a/a6/450aa6e4daeacb2a0b8eee6d87e5f933.jpg"
					crdTitle="Forbidden Doggos"
					crdDesc="Forbidden Doggos are technically Opossums I GUESS. They are misunderstood and deserve your love!!! (And trash!!!)"
					btnColor="btn btn-warning"
					btnTitle="Forbidden Doggos"
				/>
				<Card
					img_url="https://www.texasstandard.org/wp-content/uploads/2018/10/40358775452_7046422982_b.jpg"
					crdTitle="Actual Dinosaurs"
					crdDesc="We literally live with DINOSAURS. IN 2020. !!!! Pelicans have literally only evolved the tinyest bit since the dino age. In fact, the oldest fossil was over 3 million years old (I think?)."
					btnColor="btn btn-info"
					btnTitle="FACT CHECK ME"
				/>
			</div>
			<Footer />
		</>
	);
}
