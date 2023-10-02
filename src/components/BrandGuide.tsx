import React from "react";

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
					<div className="item">logo 1</div>
					<div className="item">logo 2</div>
					<div className="item">logo 3</div>
					<div className="item">logo 4</div>
				</div>
				<div className="logo_download">Download logos</div>

				<div className="color">
					<h2 className="color_text">Color</h2>
					<div className="color_items flex">
						<div className="color_items_white">
							<div className="codes">
								<span>Hex: 424324</span>
								<span>Hex: 424324</span>
								<span>Hex: 424324</span>
								<span>Hex: 424324</span>
							</div>
						</div>
						<div className="color_items_blue">
							<div className="codes">
								<span>Hex: 424324</span>
								<span>Hex: 424324</span>
								<span>Hex: 424324</span>
								<span>Hex: 424324</span>
							</div>
						</div>
						<div className="color_items_black">
							<div className="codes">
								<span>Hex: 424324</span>
								<span>Hex: 424324</span>
								<span>Hex: 424324</span>
								<span>Hex: 424324</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BrandGuide;
