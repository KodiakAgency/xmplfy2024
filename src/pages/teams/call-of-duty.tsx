import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import PlayerCard from "../../components/PlayerCard";
import codChar from "../../assets/img/call-of-duty.png";

const cod = () => {
	return (
		<Layout>
			<section className='teamPage cod'>
				<div className='teamPage__cover'></div>
				<div className='teamPage__body'>
					<div className='teamPage__content'>
						<h2>Call of Duty</h2>
						<div className='teamPage__content--team'>
							<Image src={codChar} alt='' className='white' />
							<p>
								Culpa cillum consectetur incididunt pariatur do
								nisi. Qui aliqua aliqua mollit exercitation
								voluptate cupidatat tempor culpa qui nostrud
								excepteur proident ea dolor. Amet id incididunt
								et deserunt sit qui dolor aliquip. Id veniam
								voluptate commodo irure ad laborum anim
								adipisicing Lorem. Est exercitation cillum
								pariatur dolor enim excepteur ipsum nulla
								occaecat excepteur consequat cupidatat in amet.
							</p>
						</div>
					</div>
				</div>
				<div className='teamPage__players'>
					<h2 className='heading heading--dark'>Players</h2>
					<div className='teamPage__players--cards'>
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
							Alias={"Oni"}
							Name={"Chandler Knapp"}
							x_link={"https://x.com/xmplfy"}
							stream_link={"https://twitch.tv/xmplfygg"}
							youtube_link={"https://youtube.com/@xmplfy"}
						/>
						<PlayerCard
							Position={""}
							Alias={"Perish"}
							Name={"AJ Harris"}
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