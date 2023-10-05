import Layout from "../components/Layout";

import React, { Component, useState } from "react";

// function colorChange() {
// 	const [color, setColor] = useState("initialColor"); // Set an initial color value
// 	// Your component logic here
// 	// 0x007bff
// }
class inquiries extends Component {
	constructor(props) {
		super(props);
		this.state = {
			subject: "Careers",
			message: "",
			email: "",
		};
		this.webhookUrl =
			"https://discord.com/api/webhooks/1158619139502522398/3xCgAREgAdYIzzegEo0PAO5hVW4KZ7z9v1moDbiwWVYK_-dc237lqHQcfD-Uexq8-g_g";
	}

	handleSubmit = async (e) => {
		e.preventDefault();

		if (!this.state.message.trim()) {
			alert("Please enter a message.");
			return;
		}
		let color = "";

		try {
			if (this.state.subject === "Careers") {
				color = 5763719; //  green
			} else if (this.state.subject === "Partnerships") {
				color = 15844367; // gold
			} else if (this.state.subject === "Become A Player") {
				color = 15105570; // orange
			} else if (this.state.subject === "Become A Content Creator") {
				color = 10181046; // purple
			} else if (this.state.subject === "Other") {
				color = 3447003; // blue
			}
			console.log(color);
			const response = await fetch(this.webhookUrl, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: this.state.email || "Anonymous", // Use the email as the sender's name, or 'Anonymous' if no email provided
					content: "@here",
					embeds: [
						{
							title: `Subject: ${this.state.subject}\nEmail:  ${
								this.state.email || "N/A"
							}`,
							description: `${this.state.message}\n`,
							color: color, // Change to your desired embed color (hex)
						},
					],
				}),
			});

			if (response.ok) {
				this.setState({
					subject: "General Inquiry",
					message: "",
					email: "",
					color: "0x007bff",
				});
			} else {
				console.error("Failed to send message to Discord.");
			}
		} catch (error) {
			console.error("Error sending message:", error);
		}
	};

	render() {
		return (
			<Layout>
				<div className="inquiries_container">
					<div className="inquiries">
						<div className="teamPage__body">
							<h1>Get in touch with xmplfy!</h1>
						</div>
						<div className="form">
							<form onSubmit={this.handleSubmit}>
								<div className="setting">
									<div className="subject">
										<label
											htmlFor="subject"
											className="grey bolded">
											Subject
										</label>
										<select
											id="subject"
											required
											name="subject"
											value={this.state.subject}
											onChange={(e) =>
												this.setState({
													subject: e.target.value,
												})
											}>
											<option value="Careers">
												Careers
											</option>
											<option value="Partnerships">
												Partnerships
											</option>
											<option value="Become A Player">
												Become A Player
											</option>
											<option value="Become A Content Creator">
												Become A Content Creator
											</option>
											<option value="Other">Other</option>
											{/* Add more subject options as needed */}
										</select>
									</div>
									<div className="email">
										<label
											htmlFor="email"
											className="grey bolded">
											Email
										</label>
										<input
											type="email"
											id="email"
											name="email"
											required
											value={this.state.email}
											onChange={(e) =>
												this.setState({
													email: e.target.value,
												})
											}
										/>
									</div>
								</div>

								<div className="message">
									<label
										htmlFor="message"
										className="grey bolded">
										Message
									</label>
									<textarea
										required
										id="message"
										name="message"
										value={this.state.message}
										onChange={(e) =>
											this.setState({
												message: e.target.value,
											})
										}
										rows={4}
										cols={50}
									/>
								</div>
								<div className="submitmsg">
									<button type="submit">Submit</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default inquiries;
