import { ClerkProvider } from "@clerk/nextjs";
import { IBM_Plex_Sans } from "next/font/google";
import "../globals.css";
import type { Metadata } from "next";

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
				<body className={`${ibmplexsens.className} bg-dark-1`}>{children}</body>
			</html>
		</ClerkProvider>
	);
}
