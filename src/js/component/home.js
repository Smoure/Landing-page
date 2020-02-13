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

			<Jumbotron />
			<div className="d-flex justify-content-center">
				<Card
					img_url="https://cdn10.bigcommerce.com/s-f0iq3/products/354/images/2651/OspreyStare1__69270.1559173373.1280.1280.jpg?c=2"
					crdTitle="Cool Raptors"
					crdDesc="Raptors are badass birds that are modern day Dinos; Owls, hawks, etc. The kind that can probably eat you if it had the chance."
					btnColor="btn btn-primary"
					btnTitle="Cool Raptors"
					btnLink="https://www.google.com/search?q=birds+of+prey+birds&tbm=isch&ved=2ahUKEwjP6fCUmM3nAhUDgVkKHf3cB2sQ2-cCegQIABAA&oq=birds+of+prey+birds&gs_l=img.3..0j0i5i30j0i8i30l3j0i24.29528.31843..31989...0.0..0.70.1153.19......0....1..gws-wiz-img.......35i39j0i67j0i10i67j0i131.K-q9x5lrfGY&ei=I41EXo_MI4OC5gL9uZ_YBg&bih=1151&biw=2311"
				/>
				<Card
					img_url="https://www.sadanduseless.com/wp-content/uploads/2014/03/dd1.jpg"
					crdTitle="Derpy Dogs"
					crdDesc="Derpy dogs are a category of animals that you may not have heard of. Their ancestor is the derpy wolf, so cute but so vicious. Would pet 100%."
					btnColor="btn btn-danger"
					btnTitle="Derpy Pups"
					btnLink="https://www.google.com/search?q=derpy+dogs&sxsrf=ACYBGNSZ11_Dreii-7WCLEaGp0HHdnscoA:1581550881652&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiKyPqTmM3nAhUShHIEHWrYAdgQ_AUoAXoECA0QAw&biw=2311&bih=1151"
				/>
				<Card
					img_url="https://i.pinimg.com/originals/45/0a/a6/450aa6e4daeacb2a0b8eee6d87e5f933.jpg"
					crdTitle="Forbidden Doggos"
					crdDesc="Forbidden Doggos are technically Opossums I GUESS. They are misunderstood and deserve your love!!! (And trash!!!)"
					btnColor="btn btn-warning"
					btnTitle="Forbidden Doggos"
					btnLink="https://www.google.com/search?q=cute+opossum&tbm=isch&ved=2ahUKEwiehsSkmM3nAhUCklkKHbXpAJ0Q2-cCegQIABAA&oq=cute+opo&gs_l=img.1.0.35i39j0l9.21066.22054..23190...0.0..0.111.562.7j1......0....1..gws-wiz-img.......0i131j0i67.jZjzmCu3va8&ei=RI1EXp7UGIKk5gK104PoCQ&bih=1151&biw=2311"
				/>
				<Card
					img_url="https://www.texasstandard.org/wp-content/uploads/2018/10/40358775452_7046422982_b.jpg"
					crdTitle="Actual Dinosaurs"
					crdDesc="We literally live with DINOSAURS. IN 2020. !!!! Pelicans have literally only evolved the tinyest bit since the dino age. In fact, the oldest fossil was over 3 million years old (I think?)."
					btnColor="btn btn-info"
					btnTitle="FACT CHECK ME"
					btnLink="https://www.google.com/search?q=oldest+pelican+fossil&oq=oldest+pelican+&aqs=chrome.1.69i57j69i59j0.4499j0j9&sourceid=chrome&ie=UTF-8"
				/>
			</div>
			<Footer />
		</>
	);
}
