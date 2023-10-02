import React from "react";
import Layout from "../../components/Layout";
import cs2Backing from "../../assets/img/cs2.jpg";
import Image from "next/image";

const csgo = () => {
	return (
		<Layout>
			<section className='teamPage cs2'>
				<div className='teamPage__cover'>
					<Image src={cs2Backing} alt='counter strike 2 graphic' />
				</div>
				<div className='teamPage__body'></div>
			</section>
		</Layout>
	);
};

export default csgo;
