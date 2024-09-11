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
						href="https://cdn.discordapp.com/attachments/1280560710174244995/1283256654435188787/xmplfy_logos.zip?ex=66e25564&is=66e103e4&hm=8eae427cee0640bac27902865b7b5dc50aebc9e4332256cc33be09fe65eefd4a&" // Replace with the actual file URL
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
