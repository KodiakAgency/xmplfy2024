import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import PlayerCard from "../../components/PlayerCard";
import rlOctane from "../../assets/img/octane.png";

const rocketleague = () => {
	return (
		<Layout>
			<section className="teamPage rl">
				<div className="teamPage__cover"></div>
				<div className="teamPage__body">
					<div className="teamPage__content">
						<h2>Rocket League</h2>
						<div className="teamPage__content--team">
							<Image src={rlOctane} alt="" />
							<p>
								Rocket League esports, a captivating and
								enduring gaming phenomenon, blends high-flying
								car acrobatics with strategic team play. The
								franchise's evolution into a premier esports
								spectacle mirrors the dynamic nature of its
								soccer-meets-rocket-cars concept. From
								gravity-defying goals to precise teamwork,
								Rocket League esports offers a dynamic and
								engaging experience. Its enduring appeal lies in
								global popularity, featuring iconic plays,
								intense rivalries, and the rise of
								rocket-powered sports stars. With a broad and
								diverse audience, Rocket League esports draws
								millions of viewers to tournaments and leagues,
								solidifying itself as a thrilling celebration of
								virtual vehicular mayhem, skill, and competitive
								exhilaration.
							</p>
						</div>
					</div>
				</div>
				<div className="teamPage__players">
					<h2 className="heading heading--dark">Players</h2>
					<div className="teamPage__players--cards">
						<PlayerCard
							Position={""}
							Alias={"Zekers"}
							Name={"Austin Thompson"}
							x_link={"https://x.com/xmplfy"}
							stream_link={"https://twitch.tv/xmplfygg"}
							youtube_link={"https://youtube.com/@xmplfy"}
						/>
						<PlayerCard
							Position={""}
							Alias={"Asuna"}
							Name={"Chris Costanzo"}
							x_link={"https://x.com/xmplfy"}
							stream_link={"https://twitch.tv/xmplfygg"}
							youtube_link={"https://youtube.com/@xmplfy"}
						/>
						<PlayerCard
							Position={""}
							Alias={"Roupus"}
							Name={"Henry Godfredson"}
							x_link={"https://x.com/xmplfy"}
							stream_link={"https://twitch.tv/xmplfygg"}
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

export default rocketleague;
