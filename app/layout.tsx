import type { Metadata } from "next";
import "./globals.css";
import { Outfit } from "next/font/google";

const outFit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Rodrigo e Lívia",
	description: "Site de Rodrigo e Lívia",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${outFit.className} antialiased bg-[#030D21]`}>
				{children}
			</body>
		</html>
	);
}
