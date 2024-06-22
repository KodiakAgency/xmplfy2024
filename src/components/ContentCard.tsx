import Image from "next/image";
import React from "react";
import {
	RiTwitterXFill,
	RiTwitchFill,
	RiYoutubeFill,
	RiTiktokFill,
	RiInstagramFill,
} from "react-icons/ri";
import placeholderImage from "../assets/img/207x192-Default.png";

const ContentCard = ({
	Alias,
	Name,
	x_link,
	stream_link,
	youtube_link,
	tiktok_link,
	instagram_link,
}) => {
	return (
		<div className="contentCard">
			<div className="contentCard__image">
				<Image src={placeholderImage} alt="" />
			</div>
			<div className="contentCard__details">
				<div className="contentCard__details--top">
					<h2 className="contentCard__alias">{Alias}</h2>
					<h4 className="contentCard__name">{Name}</h4>
				</div>
				<div className="contentCard__details--bottom">
					{x_link && (
						<a
							href={x_link}
							target="_blank"
							rel="noopener noreferrer">
							<RiTwitterXFill />
						</a>
					)}
					{stream_link && (
						<a
							href={stream_link}
							target="_blank"
							rel="noopener noreferrer">
							<RiTwitchFill />
						</a>
					)}
					{youtube_link && (
						<a
							href={youtube_link}
							target="_blank"
							rel="noopener noreferrer">
							<RiYoutubeFill />
						</a>
					)}
					{tiktok_link && (
						<a
							href={tiktok_link}
							target="_blank"
							rel="noopener noreferrer">
							<RiTiktokFill />
						</a>
					)}
					{instagram_link && (
						<a
							href={instagram_link}
							target="_blank"
							rel="noopener noreferrer">
							<RiInstagramFill />
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

export default ContentCard;
