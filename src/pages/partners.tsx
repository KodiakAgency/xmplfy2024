import React, { useState } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import KodiakLogo from "../assets/img/sponsors/kodiak-logo-white.png";
import RogueEnergy from "../assets/img/sponsors/Rogue Energy-white.png";

const partners = () => {
	const [active, setActive] = useState("kodiak");

	return (
		<Layout>
			<div className='partnerPage'>
				<div className='partnerPage__body'>
					<h2 className='heading uppercase'>
						Our <span className='blue'>Partners</span>
					</h2>

					<div className='partnerPage__grid'>
						<div
							className={
								active === "kodiak"
									? "partner active"
									: "partner"
							}
							onClick={() => {
								setActive("kodiak");
							}}>
							<Image src={KodiakLogo} alt='' />
						</div>
						<div
							className={
								active === "rogue"
									? "partner active"
									: "partner"
							}
							onClick={() => {
								setActive("rogue");
							}}>
							<Image src={RogueEnergy} alt='' />
						</div>
					</div>

					<div className='partnerPage__bio'>{active}</div>
				</div>
			</div>
		</Layout>
	);
};

export default partners;
