"use client";

import { Heart } from "lucide-react";
import type React from "react";
import { useEffect, useState } from "react";

interface HeartProps {
	style: React.CSSProperties;
	size: number;
}

const AnimatedHeart: React.FC<HeartProps> = ({ style, size }) => (
	<Heart
		className="absolute text-red-200 animate-float-heart"
		style={style}
		size={size}
		fill="currentColor"
	/>
);

export default function Particles() {
	const [hearts, setHearts] = useState<HeartProps[]>([]);

	useEffect(() => {
		const numberOfHearts = Math.floor(Math.random() * 21) + 30; // 30 to 50 hearts
		const newHearts = Array.from({ length: numberOfHearts }, () => ({
			style: {
				left: `${Math.random() * 100}%`,
				top: `${Math.random() * 100}%`,
				animationDuration: `${Math.random() * 20 + 15}s`, // 15 to 35 seconds
				animationDelay: `${Math.random() * -35}s`, // Start at different times
				opacity: Math.random() * 0.5 + 0.5, // Varying opacity
			},
			size: Math.floor(Math.random() * 16) + 16, // 16 to 32 pixels
		}));
		setHearts(newHearts);
	}, []);

	return (
		<div className="fixed inset-0 overflow-hidden bg-gradient-to-br from-red-50 to-red-600">
			{hearts.map((heart) => (
				<AnimatedHeart key={heart.size} style={heart.style} size={heart.size} />
			))}
		</div>
	);
}
