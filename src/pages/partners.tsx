import React, { useState } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import KodiakLogo from "../assets/img/sponsors/kodiak-logo-white.png";
import RogueEnergy from "../assets/img/sponsors/Rogue Energy-white.png";

const partners = () => {
	const [active, setActive] = useState("kodiak");

	return (
		<Layout>
			<div className="partnerPage">
				<div className="partnerPage__body">
					<h2 className="heading uppercase">
						Our <span className="blue">Partners</span>
					</h2>

					<div className="partnerPage__grid">
						<div
							className={
								active === "kodiak"
									? "partner active"
									: "partner"
							}
							onClick={() => {
								setActive("kodiak");
							}}>
							<Image src={KodiakLogo} alt="" />
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
							<Image src={RogueEnergy} alt="" />
						</div>
					</div>

					<div className="partnerPage__bio">
						{active === "rogue" ? (
							<p>
								Rogue is a gaming company at heart. We strive to
								improve the in-game performance of gamers and
								streamers everywhere! Our low calorie, no sugar,
								Energy formula is the perfect alternative to
								sugar-filled, canned energy drinks and sodas.
								Our Hydration line offers focus ingredients
								without the added caffeine. Drink it anytime you
								are thirsty.
								<br></br>
								<br></br>
								Always use code: xmplfy at checkout!{" "}
							</p>
						) : active === "kodiak" ? (
							<p>
								The savior of merchants from outdated design and
								obsolute solutions We help breakout brands
								unlock their highest growth potential by
								designing and developing future-proof eCommerce
								solutions that save time and money, sell more
								products, and increase new customers. Whether
								you are looking to migrate to a modern eCommerce
								platform, design a high-performing customer
								experience, or build upon your current
								successes, we craft an end-to-end eCommerce
								solution that is built to scale.
								<br></br>
								<br></br>
								Kodiak Agencyus an UI/UX design and
								implementation agency that creates effective
								eCommerce experiences. With design at our core,
								Kodiak Agency was born when using templates
								became the normality instead of the exception.
								<br></br>
								<br></br>
								Our suite of custom eCommerce design and
								development services and integrations allow for
								bespoke web and mobile solutions that are
								thoughtfully designed to meet the unique need of
								every single one of our clients. With robust
								expertise in UX design, search engine
								optimization (SEO), software development, and
								email marketing, we have established Kodiak
								Agency as an innovative leader in the eCommerce
								and mobile development market.
							</p>
						) : (
							<p>Error Load, please click a partner.</p>
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default partners;
