import type { Metadata } from "next";
import "./globals.css";
import { Anek_Bangla } from "next/font/google";

const AnekBangla = Anek_Bangla({ subsets: ["latin"] });

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
			<body className={`${AnekBangla.className} antialiased`}>{children}</body>
		</html>
	);
}
