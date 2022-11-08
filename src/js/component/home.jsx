import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [light, setLight] = useState(undefined)
	const handleOn = (changelight)=>{
		if (light == changelight) {
			setLight("apagado")
		}
		else {
			setLight(changelight)
		}
	}

	return (
		<div className="container">
				<div className="stick"></div>
				<div className="traffic-light">
					<div className="centrador">
						<div className={light == "red" ? "lights_red sombra_red" : "lights_red"} onClick={()=>{handleOn("red")}}></div>
					</div >
					<div className="centrador">
						<div className={light == "yellow" ? "lights_yellow sombra_yellow" : "lights_yellow"} onClick={()=>{handleOn("yellow")}}></div>
					</div>
					<div className="centrador">
					  <div className={light == "green" ? "lights_green sombra_green" : "lights_green"} onClick={()=>{handleOn("green")}}></div>
					</div>
				</div>
		</div>
	);
};

export default Home;
