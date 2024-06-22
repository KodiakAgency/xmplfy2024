import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import csChar from "../../assets/img/Team_CS_wht_80x80.svg";
import ContentCard from "../../components/ContentCard";

const csgo = () => {
	return (
		<Layout>
			<section className="teamPage content">
				<div className="teamPage__cover"></div>
				<div className="teamPage__body">
					<div className="teamPage__content">
						<h2>Content Creators</h2>
						<div className="teamPage__content--team">
							<p>
								At Xmplfy, content creation is a special part of
								our mission, and we take immense pride in our
								creators who bring their unique personalities
								and talents to the forefront. We love our
								creators and invite you to check out their
								incredible work below!
							</p>
						</div>
					</div>
				</div>
				<div className="teamPage__players">
					<h2 className="heading heading--dark">Creators</h2>
					<div className="teamPage__players--cards">
						<ContentCard
							Alias={"xmplfy"}
							Name={""}
							x_link={"https://x.com/xmplfy"}
							stream_link={"https://twitch.tv/xmplfygg"}
							youtube_link={"https://youtube.com/@xmplfy"}
							tiktok_link={"https://tiktok.com/@xmplfygg"}
						/>

						<ContentCard
							Alias={"Cuti3_P13"}
							Name={""}
							x_link={"https://x.com/cuti3p13ttv?s=21"}
							stream_link={"https://www.twitch.tv/cuti3_p13"}
							youtube_link={
								"https://youtube.com/@cuti3_p13?si=qh-xL7_SC7elWJdK"
							}
							instagram_link={
								"https://www.instagram.com/cuti3_p13_ttv?igsh=am44aW9sZWJ3MDJ4&utm_source=qr"
							}
						/>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default csgo;
