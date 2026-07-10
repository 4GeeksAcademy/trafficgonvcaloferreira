import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("green");

	const getLightClass = (color) => `light ${color}${selectedColor === color ? " glow" : ""}`;

	return (
		<div className="traffic-light">
			<div className={getLightClass("red")} onClick={() => setSelectedColor("red")} />
			<div className={getLightClass("yellow")} onClick={() => setSelectedColor("yellow")} />
			<div className={getLightClass("green")} onClick={() => setSelectedColor("green")} />
		</div>
	);
};

export default Home;