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

function Home() {
	return (
		<>
			<div className="img-background">
				<div className="welcome_container">
					<div className="titlepage">
						<div className="welcome">
							<p>Welcome to</p>
							<Image src={logo} alt="xmplfy logo"></Image>{" "}
							<Image
								src={xmplfyWordmark}
								alt="Xmplfy"
								className="newwordmark"
							/>
						</div>
						<div className="xmplfy_slogan">
							<h2 className="bold">
								North America's
								<br /> Rising Stars
							</h2>
						</div>
						<div className="game_cards flex container">
							<div className="card">
								<Image
									src={cs2}
									alt="cs"
									className="gamesimg"
								/>
								<div className="card-content">
									<h2 className="gamesh2">Counter-Strike</h2>
									<p className="gamesP">
										Counter-Stike, our team consisting of
										some of the best North American up and
										coming players. Hoozh, Jynx, nrb,
										Girthquake, Darke. These players have
										been with us for multiple seasons and we
										hope you enjoy every bit of them as we
										do!
									</p>
									<Link href="#" className="button">
										<span className="material-symbols-outlined">
											<BsArrowRight></BsArrowRight>
										</span>
									</Link>
								</div>
							</div>
							<div className="card">
								<Image
									src={rocketleague}
									alt="rocket league"
									className="gamesimg"
								/>
								<div className="card-content">
									<h2 className="gamesh2">Rocket League</h2>
									<p className="gamesP">
										Rocket League, our team consist of
										college atheletes and teammates that
										have been together for very long.
										Roupus, Zekers, and Asuna are fantastic
										North American Rocket League players who
										can only go up.
									</p>
									<a href="#" className="button">
										<span className="material-symbols-outlined">
											<BsArrowRight></BsArrowRight>
										</span>
									</a>
								</div>
							</div>
							<div className="card">
								<Image
									src={fifa}
									alt="fifa"
									className="gamesimg"
								/>
								<div className="card-content">
									<h2 className="gamesh2">Fifa</h2>
									<p className="gamesP">
										Fifa, soccer or football? It's soccer,
										and Bortap demonstrates the best
										mechanics as our Fifa player! Check out
										highlights and much more from Bortap!
									</p>
									<a href="#" className="button">
										<span className="material-symbols-outlined">
											<BsArrowRight></BsArrowRight>
										</span>
									</a>
								</div>
							</div>
							<div className="card">
								<Image
									src={codbacking}
									alt="cod"
									className="gamesimg"
								/>
								<div className="card-content">
									<h2 className="gamesh2">Call Of Duty</h2>
									<p className="gamesP">
										Call Of Duty, an esport that has been
										here for a long time. We look forward to
										keeping Call Of Duty in our program and
										seeing how far this esport can go!
									</p>
									<a href="#" className="button">
										<span className="material-symbols-outlined">
											<BsArrowRight></BsArrowRight>
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
