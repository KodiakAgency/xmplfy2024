import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import PlayerCard from "../../components/PlayerCard";
import fifaChar from "../../assets/img/ea-sports-fc-logo.png";

const fifa = () => {
	return (
		<Layout>
			<section className="teamPage fifa">
				<div className="teamPage__cover"></div>
				<div className="teamPage__body">
					<div className="teamPage__content">
						<h2>EA Sports FC24</h2>
						<div className="teamPage__content--team">
							<Image src={fifaChar} alt="" />
							<p>
								FIFA esports, a captivating and enduring force
								in the gaming realm, seamlessly merges virtual
								football prowess with strategic brilliance. Its
								evolution into a premier esports spectacle
								mirrors the dynamic nature of the beautiful
								game. From skillful team plays to individual
								acts of brilliance, FIFA esports offers a
								diverse and engaging experience. The game's
								enduring appeal is fueled by its global
								popularity, boasting iconic moments, intense
								rivalries, and the rise of football gaming
								superstars. With a broad and diverse audience,
								FIFA esports draws millions of viewers to
								tournaments and leagues, establishing itself as
								a thrilling celebration of virtual football's
								skill, strategy, and competitive excitement.
							</p>
						</div>
					</div>
				</div>
				<div className="teamPage__players">
					<h2 className="heading heading--dark">Players</h2>
					<div className="teamPage__players--cards">
						<PlayerCard
							Position={""}
							Alias={"Bortap"}
							Name={"Robert Bachman"}
							x_link={"https://x.com/AlmightyBach"}
							stream_link={"https://twitch.tv/bortap_"}
							youtube_link={"https://youtube.com/@xmplfy"}
						/>
					</div>
				</div>

				{/* <div className='teamPage__players'>
					<h2 className='heading heading--dark'>Support</h2>
					<div className='teamPage__players--cards'>
						<PlayerCard
							Position={"Substitute"}
							Alias={"rEqN_"}
							Name={"Some Name"}
							x_link={"https://x.com/xmplfy"}
							stream_link={"https://twitch.tv/xmplfygg"}
							youtube_link={"https://youtube.com/@xmplfy"}
						/>
					</div>
				</div> */}
			</section>
		</Layout>
	);
};

export default fifa;
