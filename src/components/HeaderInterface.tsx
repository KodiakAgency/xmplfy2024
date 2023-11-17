import React, { useState } from "react";
import Image from "next/image";
import bradingImage from "../assets/img/xmplfy_logo.png";
import xmplfyWordmark from "../assets/img/xmplfy_wordmark.png";
import Link from "next/link";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";

const HeaderInterface = () => {
	const [isTeamsDropdownOpen, setIsTeamsDropdownOpen] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleTeamsDropdown = () => {
		setIsTeamsDropdownOpen(!isTeamsDropdownOpen);
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<div className='interface height'>
			<div className='container flex justify-space-between align-items-center height'>
				<div className='interface__left'>
					<div className='branding'>
						<Link className='branding links height flex' href={"/"}>
							<Image src={bradingImage} alt='xmplfy logo'></Image>
						</Link>
					</div>
				</div>
				<div className='interface__right'>
					<div
						className='mobile-menu-icon'
						onClick={toggleMobileMenu}>
						<RxHamburgerMenu />
					</div>
					<div
						className={`interface__pages flex justify-space-around ${
							isMobileMenuOpen ? "mobile-menu-open" : "none"
						}`}>
						<ul
							className={`interface__desktopNav linkGroup flex justify-space-around ${
								isMobileMenuOpen ? "" : "none"
							}`}>
							<li>
								<span
									className={`links text-color-light ${
										isTeamsDropdownOpen ? "active" : ""
									}`}
									onMouseEnter={toggleTeamsDropdown}
									onMouseLeave={toggleTeamsDropdown}>
									TEAMS <BsCaretDownFill />
									{isTeamsDropdownOpen && (
										<div className='dropdown-content'>
											<ul>
												<li>
													<Link
														className='links text-color-light'
														href={
															"/teams/call-of-duty"
														}>
														Call of Duty
													</Link>
												</li>
												<li>
													<Link
														className='links text-color-light'
														href={
															"/teams/counter-strike"
														}>
														Counter-Strike
													</Link>
												</li>
												<li>
													<Link
														className='links text-color-light'
														href={"/teams/fifa"}>
														Fifa
													</Link>
												</li>
												{/* <li>
													<Link
														className='links text-color-light'
														href={
															"/teams/rocket-league"
														}>
														Rocket League
													</Link>
												</li> */}
											</ul>
										</div>
									)}
								</span>
							</li>
							<li>
								<Link
									className='links text-color-light'
									href={"/partners"}>
									PARTNERS
								</Link>
							</li>
							<li>
								<a
									className='links text-color-light'
									href={"https://discord.gg/mGGQtZb5zm"}
									target='_blank'>
									DISCORD
								</a>
							</li>
						</ul>
						<ul className='interface__mobileNav linkGroup flex'>
							<li>
								<Link
									className='mobileNav__link text-color-light'
									href={"/teams/call-of-duty"}>
									Call of Duty
								</Link>
							</li>
							<li>
								<Link
									className='mobileNav__link text-color-light'
									href={"/teams/counter-strike"}>
									Counter-Strike
								</Link>
							</li>
							<li>
								<Link
									className='mobileNav__link text-color-light'
									href={"/teams/fifa"}>
									Fifa
								</Link>
							</li>
							{/* <li>
								<Link
									className='mobileNav__link text-color-light'
									href={"/teams/rocket-league"}>
									Rocket League
								</Link>
							</li> */}
							<li>
								<Link
									className='mobileNav__link text-color-light'
									href={"/partners"}>
									PARTNERS
								</Link>
							</li>
							<li>
								<a
									className='mobileNav__link text-color-light'
									href={"https://discord.gg/mGGQtZb5zm"}
									target='_blank'>
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
