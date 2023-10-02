import Head from "next/head";
import HomePage from "../components/HomePage";
import About from "../components/About";
import Layout from "../components/Layout";

export default function Home() {
	return (
		<>
			<Head>
				<title>Xmplfy | NA's Rising Stars</title>
				<meta name='description' content='xmplfy website' />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<HomePage />
				<About />
			</Layout>
		</>
	);
}
