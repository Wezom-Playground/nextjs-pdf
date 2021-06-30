import '../styles/globals.css';
import Head from 'next/head';
import Image from 'next/image';

function MyApp({ Component, pageProps }) {
	return (
		<div className="container">
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="main">
				<Component {...pageProps} />
			</main>

			<footer className="footer">
				<a
					className="footer-link"
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<span className="vercel-logo">
						<Image
							src="/vercel.svg"
							alt="Vercel Logo"
							width={72}
							height={16}
						/>
					</span>
				</a>
			</footer>
		</div>
	);
}

export default MyApp;
