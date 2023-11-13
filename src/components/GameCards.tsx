import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

const GameCards = ({ game, title, description }) => {
	const [showColor, setShowColor] = useState(false);

	return (
		<div
			className={`gameCards__item gameCards__${game} ${
				showColor ? "show" : ""
			}`}
			onMouseEnter={() => setShowColor(true)}
			onMouseLeave={() => setShowColor(false)}>
			<div className='gameCards__content'>
				<h2 className='gameCards__title'>{title}</h2>
				<p className='gameCards__desc'>{description}</p>
				<span className='material-symbols-outlined'>
					<BsArrowRight></BsArrowRight>
				</span>
			</div>
		</div>
	);
};

export default GameCards;
