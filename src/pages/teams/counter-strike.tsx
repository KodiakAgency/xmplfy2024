import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import csChar from "../../assets/img/Team_CS_wht_80x80.svg";
import PlayerCard from "../../components/PlayerCard";

const csgo = () => {
	return (
		<Layout>
			<section className="teamPage cs2">
				<div className="teamPage__cover"></div>
				<div className="teamPage__body">
					<div className="teamPage__content">
						<h2>Counter-Strike 2</h2>
						<div className="teamPage__content--team">
							<Image src={csChar} alt="" />
							<p>
								Dating back to Counter-Strike: Global Offensive,
								xmplfy has had a long standing presence in the
								counter-strike franchise. Xmplfy's main roster
								consists of five fresh and hungry players ready
								to take on the top tiers of talent and bring
								home a championship for the North American
								scene. Driven by their dedication and love for
								competition, Xmplfy CS is determined to rise
								through the ranks and win it all.
							</p>
						</div>
					</div>
				</div>
				<div className="teamPage__players">
					<h2 className="heading heading--dark">Players</h2>
					<div className="teamPage__players--cards">
						<PlayerCard
							Position={"Rifler & IGL"}
							Alias={"Darke9k"}
							Name={"Austin Turner"}
							x_link={"https://x.com/darke9k"}
							stream_link={"https://twitch.tv/darke9k"}
							youtube_link={"https://youtube.com/@xmplfy"}
						/>
						<PlayerCard
							Position={"Rifler"}
							Alias={"nrb"}
							Name={"Nicholas Brugna"}
							x_link={"https://x.com/nrbcs"}
							stream_link={"https://twitch.tv/nrbcs"}
							youtube_link={"https://youtube.com/@xmplfy"}
						/>
						<PlayerCard
							Position={"Rifler"}
							Alias={"Red"}
							Name={"Ashton"}
							x_link={"https://x.com/xmplfy"}
							stream_link={"https://twitch.tv/xmplfygg"}
							youtube_link={"https://youtube.com/@xmplfy"}
						/>
						<PlayerCard
							Position={"Rifler"}
							Alias={"JUICEY"}
							Name={"Nick Juicey"}
							x_link={"https://x.com/xmplfy"}
							stream_link={"https://twitch.tv/xmplfygg"}
							youtube_link={"https://youtube.com/@xmplfy"}
						/>
						<PlayerCard
							Position={"Awper"}
							Alias={"Hoozh"}
							Name={"Aidan Labaschin"}
							x_link={"https://x.com/hoozhur"}
							stream_link={"https://twitch.tv/hoozhur"}
							youtube_link={"https://youtube.com/@xmplfy"}
						/>
					</div>
				</div>

				<div className="teamPage__players">
					<h2 className="heading heading--dark">Support</h2>
					<div className="teamPage__players--cards">
						<PlayerCard
							Position={"Substitute"}
							Alias={"rEqN_"}
							Name={""}
							x_link={"https://x.com/xmplfy"}
							stream_link={"https://twitch.tv/xmplfygg"}
							youtube_link={"https://youtube.com/@xmplfy"}
						/>
						<PlayerCard
							Position={"Substitute"}
							Alias={"JSP"}
							Name={"Joe"}
							x_link={"https://x.com/99jsp"}
							stream_link={"https://twitch.tv/99jsp"}
							youtube_link={"https://youtube.com/@99jsp"}
						/>

						<PlayerCard
							Position={"Substitute"}
							Alias={"Jynx"}
							Name={"Mark Coyu"}
							x_link={"https://x.com/1jynx"}
							stream_link={"https://twitch.tv/1jynx"}
							youtube_link={"https://youtube.com/@xmplfy"}
						/>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default csgo;
