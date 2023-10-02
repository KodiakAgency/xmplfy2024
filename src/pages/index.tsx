import Head from "next/head";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>Xmplfy</title>
				<meta name="description" content="xmplfy website" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<HomePage />
			<About />
			<Footer />
		</>
	);
}
