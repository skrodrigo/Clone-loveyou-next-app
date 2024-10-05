"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface HeartProps {
	style: React.CSSProperties;
	size: number;
}

const AnimatedHeart: React.FC<HeartProps> = ({ style, size }) => (
	<Heart
		className="absolute text-red-300 animate-float-heart"
		style={style}
		size={size}
		fill="currentColor"
	/>
);

export default function Particles() {
	const [hearts, setHearts] = useState<HeartProps[]>([]);

	useEffect(() => {
		const generateHearts = () => {
			const numberOfHearts = Math.floor(Math.random() * 15);
			const screenWidth = window.innerWidth;
			const screenHeight = window.innerHeight;
			const gridSize = Math.sqrt(numberOfHearts);
			const cellWidth = screenWidth / gridSize;
			const cellHeight = screenHeight / gridSize;

			const newHearts = Array.from({ length: numberOfHearts }, (_, index) => {
				const row = Math.floor(index / gridSize);
				const col = index % gridSize;
				const x = col * cellWidth + Math.random() * cellWidth;
				const y = row * cellHeight + Math.random() * cellHeight;

				return {
					style: {
						left: `${(x / screenWidth) * 100}%`,
						top: `${(y / screenHeight) * 100}%`,
						animationDuration: `${Math.random() * 20 + 15}s`, // 15 a 35 segundos
						animationDelay: `${Math.random() * -35}s`, // Começar em momentos diferentes
						opacity: Math.random() * 0.5 + 0.5, // Variação de opacidade
					},
					size: Math.floor(Math.random() * 16) + 16, // 16 a 32 pixels
					key: index, // Índice como chave única
				};
			});
			setHearts(newHearts);
		};

		generateHearts();
		window.addEventListener("resize", generateHearts);

		return () => {
			window.removeEventListener("resize", generateHearts);
		};
	}, []);

	return (
		<div className="fixed inset-0 overflow-hidden bg-gradient-to-br from-red-50 to-red-600">
			{hearts.map((heart) => (
				<AnimatedHeart key={heart.size} style={heart.style} size={heart.size} />
			))}
		</div>
	);
}
