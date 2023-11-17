import React from "react";
import logo from "../assets/img/xmplfy_logo.png";
import xmplfyWordmark from "../assets/img/xmplfy_wordmark.png";
import cs2 from "../assets/img/cs2.jpg";
import codbacking from "../assets/img/cod-backing.jpeg";
import rocketleague from "../assets/img/rocketleaguebacking.png";
import fifa from "../assets/img/fifa.jpg";
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import GameCards from "./GameCards";

function Home() {
	let cs2_description = `Counter-Strike, our team consisting of some of the best North American up and coming players. Hoozh, Jynx, nrb, Girthquake, Darke. These players have been with us for multiple seasons and we hope you enjoy every bit of them as we do!`;
	let rl_description = `Rocket League, our team consist of college atheletes and teammates that have been together for very long. Roupus, Zekers, and Asuna are fantastic North American Rocket League players who can only go up.`;
	let cod_description = `Call Of Duty, an esport that has been here for a long time. We look forward to keeping Call Of Duty in our program and seeing how far this esport can go!`;
	let fifa_description = `Fifa, soccer or football? It's soccer, and Bortap demonstrates the best mechanics as our Fifa player! Check out highlights and much more from Bortap!`;

	return (
		<>
			<div className='img-background'>
				<div className='welcome_container'>
					<div className='titlepage'>
						<div className='welcome'>
							<p>Welcome to</p>
							<Image src={logo} alt='xmplfy logo'></Image>{" "}
							<Image
								src={xmplfyWordmark}
								alt='Xmplfy'
								className='newwordmark'
							/>
						</div>
						<div className='xmplfy_slogan'>
							<h2 className='bold'>
								North America's
								<br /> Rising Stars
							</h2>
						</div>
						<div className='gameCards flex container'>
							<Link href={"/teams/counter-strike"}>
								<GameCards
									game={"cs2"}
									title={"Counter-Strike"}
									description={cs2_description}
								/>
							</Link>
							{/* <Link href={"/teams/rocket-league"}>
								<GameCards
									game={"rl"}
									title={"Rocket League"}
									description={rl_description}
								/>
							</Link> */}
							<Link href={"/teams/fifa"}>
								<GameCards
									game={"fifa"}
									title={"Fifa"}
									description={fifa_description}
								/>
							</Link>
							<Link href={"/teams/call-of-duty"}>
								<GameCards
									game={"cod"}
									title={"Call of Duty"}
									description={cod_description}
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
