import React, { useState, useEffect } from "react";
import HeaderInterface from "./HeaderInterface";

function Header() {
	// const [backgroundColor, setBackgroundColor] = useState(
	// 	"rgbargba($color: #eef4f7, $alpha: 0.4)",
	// );

	// useEffect(() => {
	// 	function handleScroll() {
	// 		const scrollPosition = window.scrollY;
	// 		const headerHeight = 100;
	// 		const threshold = headerHeight * 0.5; // edit change quickly ty chat gpt
	// 		const newBackgroundColor =
	// 			scrollPosition > threshold
	// 				? "rgbargba($color: #eef4f7, $alpha: 0.9)"
	// 				: "rgbargba($color: #eef4f7, $alpha: 0.1)";
	// 		setBackgroundColor(newBackgroundColor);
	// 	}

	// 	window.addEventListener("scroll", handleScroll);

	// 	return () => {
	// 		window.removeEventListener("scroll", handleScroll);
	// 	};
	// }, []);

	return (
		<header className="header">
			<HeaderInterface />
		</header>
	);
}

export default Header;
