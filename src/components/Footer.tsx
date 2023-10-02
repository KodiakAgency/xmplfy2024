import React from "react";
import Image from "next/image";
import xmplfyLogo from "../assets/img/xmplfy_logo.png";
import xmplfyWordmark from "../assets/img/xmplfy_wordmark.png";
import Link from "next/link";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__container container">
				<div className="footer__branding">
					<Image src={xmplfyLogo} alt="xmplfy logo" />
				</div>
				<div className="footer__info">
					<ul>
						<li>
							<Link href="/inquiries" className="links">
								Inquiries
							</Link>
						</li>
						<li>
							<Link href="/terms" className="links">
								Terms & Conditions
							</Link>
						</li>
						<li>
							<Link href="/privacy" className="links">
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link href="/brand" className="links">
								Brand
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
