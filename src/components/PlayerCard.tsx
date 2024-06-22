import Image from "next/image";
import React from "react";
import {
	RiTwitterXFill,
	RiTwitchFill,
	RiYoutubeFill,
	RiTiktokFill,
} from "react-icons/ri";
import placeholderImage from "../assets/img/207x192-Default.png";

const PlayerCard = ({
	Position,
	Alias,
	Name,
	x_link,
	stream_link,
	youtube_link,
}) => {
	return (
		<div className="playerCard">
			<div className="playerCard__image">
				<Image src={placeholderImage} alt="" />
			</div>
			<div className="playerCard__details">
				<div className="playerCard__details--top">
					<h4 className="playerCard__position blue">{Position}</h4>
					<h2 className="playerCard__alias">{Alias}</h2>
					<h4 className="playerCard__name">{Name}</h4>
				</div>
				<div className="playerCard__details--bottom">
					<a href={x_link} target="_blank">
						<RiTwitterXFill />
					</a>
					<a href={stream_link} target="_blank">
						<RiTwitchFill />
					</a>
					<a href={youtube_link} target="_blank">
						<RiYoutubeFill />
					</a>
				</div>
			</div>
		</div>
	);
};

export default PlayerCard;
