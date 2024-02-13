import { ClerkProvider } from "@clerk/nextjs";
import { IBM_Plex_Sans } from "next/font/google";
import "../globals.css";
import type { Metadata } from "next";
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";

export const metadata: Metadata = {
	title: "CommunityWeb",
	description: "A project for testing solutions for a social media platform.",
	icons: {
		icon: '/favicon.png',
	}
};

const ibmplexsens = IBM_Plex_Sans({ subsets: ["latin"], weight: "400" });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={ibmplexsens.className}>
					<Topbar />

					<main className='flex flex-row'>
						<LeftSidebar />

						<section className='main-container'>
							<div className='w-full max-4xl'>
							{children}
							</div>
						</section>

						<RightSidebar />
					</main>

					<Bottombar />
				</body>
			</html>
		</ClerkProvider>
	);
}
