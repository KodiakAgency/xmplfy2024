import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import PlayerCard from "../../components/PlayerCard";
import codChar from "../../assets/img/call-of-duty.png";

const cod = () => {
	return (
		<Layout>
			<section className="teamPage cod">
				<div className="teamPage__cover"></div>
				<div className="teamPage__body">
					<div className="teamPage__content">
						<h2>Call of Duty</h2>
						<div className="teamPage__content--team">
							<Image src={codChar} alt="" className="white" />
							<p>
								Call of Duty esports stands as a dynamic and
								enduring force in the gaming realm, captivating
								audiences with thrilling competition and
								strategic gameplay. Evolving across multiple
								titles, it showcases the pinnacle of virtual
								warfare, from intense team battles to individual
								displays of marksmanship. With a rich history
								and iconic moments, Call of Duty esports has
								cultivated a dedicated global fanbase. Its
								longevity and adaptability make it a premier
								esports spectacle, drawing millions of viewers
								to leagues and tournaments. The franchise's
								resilience, coupled with the passion of players
								and fans, has solidified Call of Duty esports as
								a beacon of excellence in competitive gaming.
							</p>
						</div>
					</div>
				</div>
				<div className="teamPage__players">
					<h2 className="heading heading--dark">Players</h2>
					<div className="teamPage__players--cards">
						<PlayerCard
							Position={""}
							Alias={"RicheeUS"}
							Name={"Braden Richee"}
							x_link={"https://x.com/xmplfy"}
							stream_link={"https://twitch.tv/xmplfygg"}
							youtube_link={"https://youtube.com/@xmplfy"}
						/>
						<PlayerCard
							Position={""}
							Alias={"Essence"}
							Name={"Jacob Stephens"}
							x_link={"https://x.com/xmplfy"}
							stream_link={"https://twitch.tv/xmplfygg"}
							youtube_link={"https://youtube.com/@xmplfy"}
						/>
						<PlayerCard
							Position={""}
							Alias={"AJX"}
							Name={"AJ Harris"}
							x_link={"https://x.com/xmplfy"}
							stream_link={"https://twitch.tv/xmplfygg"}
							youtube_link={"https://youtube.com/@xmplfy"}
						/>
						<PlayerCard
							Position={""}
							Alias={"Oni"}
							Name={"Chandler Knapp"}
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

export default cod;
