import React from "react";
import Image from "next/image";
import blueBlack from "../assets/img/blue_black.png";
import blueWhite from "../assets/img/blue_white.png";
import xBlue from "../assets/img/blue_backing.png";
import xWhite from "../assets/img/blue_nobacking.png";
import Link from "next/link";

function BrandGuide() {
	return (
		<div className="brand_container">
			<div className="guideline">
				<h2>Brand Guidelines</h2>
				<h3>xmplfy brand assets.</h3>

				<div className="logo">
					<h2 className="logo_text">Logo</h2>
					<p className="branding">
						These assets are provided for use in situations such as
						press coverage or broadcasting media. They should not be
						used in any way that could be confusing for customers or
						imply any affiliation with xmplfy.
						<br></br>
						<br></br>
						Files include dark/light background variations.
					</p>
				</div>

				<div className="logo_items">
					<div className="item_white">
						<Image
							className="logoStyleLong"
							src={blueBlack}
							alt="xmplfy logo"
						/>
					</div>
					<div className="item">
						<Image
							className="logoStyleLong"
							src={blueWhite}
							alt="xmplfy logo"
						/>
					</div>
					<div className="item_white">
						<Image
							className="logoStyle"
							src={xBlue}
							alt="xmplfy logo"
						/>
					</div>
					<div className="item">
						<Image
							className="logoStyle"
							src={xWhite}
							alt="xmplfy logo"
						/>
					</div>
				</div>
				<div className="logo_download">
					<a
						className="links"
						href="https://cdn.discordapp.com/attachments/1137092900526760078/1158296359754023034/xmplfy.zip?ex=651bbb0c&is=651a698c&hm=dfb18df0998a65132d293b27c06d4055db996b5a7addf41c4aea73c93f2151be&" // Replace with the actual file URL
						target="_blank"
						rel="noopener noreferrer">
						DOWNLOAD LOGOS
					</a>
				</div>

				<div className="color">
					<h2 className="color_text">Color</h2>
					<div className="color_items flex">
						<div className="color_items_white">
							<div className="codes">
								<span>Hex: #FFFFFF</span>
								<span>RGB: 255 255 255</span>
								<span>CMYK: 0 0 0 0</span>
							</div>
						</div>
						<div className="color_items_blue">
							<div className="codes">
								<span>Hex: #0099FF</span>
								<span>RGB: 0 153 255</span>
								<span>CMYK: 70 34 0 0</span>
							</div>
						</div>
						<div className="color_items_black">
							<div className="codes__white">
								<span>Hex: #000000</span>
								<span>RGB: 0 0 0</span>
								<span>CMYK: 75 68 67 90</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BrandGuide;
