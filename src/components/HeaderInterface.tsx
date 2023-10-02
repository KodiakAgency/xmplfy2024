import React from "react";
import Image from "next/image";
import bradingImage from "../assets/img/xmplfy_logo.png";
import xmplfyWordmark from "../assets/img/xmplfy_wordmark.png";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const HeaderInterface = () => {
	return (
		<div className="interface height">
			<div className="container flex justify-space-between align-items-center height">
				<div className="interface__left">
					<div className="branding">
						<Link className="branding links height flex" href={"/"}>
							<Image src={bradingImage} alt="xmplfy logo"></Image>
						</Link>
					</div>
				</div>
				<div className="interface__right">
					<div className="infterface__pages flex justify-space-around">
						<ul className="links flex justify-space-around">
							{/* <li>
								<Link
									className="links text-color-light"
									href={"/about"}>
									ABOUT
								</Link>
							</li> */}
							{/* <li>
								<Link
									className="links text-color-light"
									href={"/schedule"}>
									SCHEDULE
								</Link>
							</li> */}
							<li>
								<Link
									className="links text-color-light"
									href={"/teams"}>
									TEAMS
								</Link>
							</li>
							{/* <li>
								<Link
									className="links text-color-light"
									href={"/creators"}>
									CREATORS
								</Link>
							</li> */}
							<li>
								<Link
									className="links text-color-light"
									href={"/partners"}>
									PARTNERS
								</Link>
							</li>
							<li>
								<Link
									className="links text-color-light"
									href={"/"}
									target="_blank">
									STORE
								</Link>
							</li>
							<li>
								<a
									className="links text-color-light"
									href={"https://discord.gg/mGGQtZb5zm"}
									target="_blank">
									DISCORD
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeaderInterface;
