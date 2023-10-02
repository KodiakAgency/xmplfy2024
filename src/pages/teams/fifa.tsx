import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import PlayerCard from "../../components/PlayerCard";
import fifaChar from "../../assets/img/Team_CS_wht_80x80.svg";

const fifa = () => {
	return (
		<Layout>
			<section className='teamPage fifa'>
				<div className='teamPage__cover'></div>
				<div className='teamPage__body'>
					<div className='teamPage__content'>
						<h2>Fifa</h2>
						<div className='teamPage__content--team'>
							<Image src={fifaChar} alt='' />
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
