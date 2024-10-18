"use client";

import dayjs from "dayjs";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";

const images = [
	"/foto1.jpg",
	"/foto2.jpg",
	"/foto3.jpg",
	"/foto4.jpg",
	"/foto5.jpg",
];

export default function Home() {
	const [currentImage, setCurrentImage] = useState(0);
	const [timeTogether, setTimeTogether] = useState("");

	// Preload images
	useEffect(() => {
		const preloadImages = async () => {
			await Promise.all(
				images.map((src) => {
					return new Promise((resolve, reject) => {
						const img = new window.Image();
						img.src = src;
						img.onload = resolve;
						img.onerror = reject;
					});
				}),
			);
		};

		preloadImages();
	}, []);

	useEffect(() => {
		// Intervalo para troca de imagem
		const imageInterval = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % images.length);
		}, 5000);

		// Intervalo para calcular o tempo juntos
		const timeInterval = setInterval(() => {
			const start = dayjs("2023-10-20");
			const now = dayjs();

			// Diferença exata para cada unidade de tempo
			const years = now.diff(start, "year");
			const months = now.diff(start.add(years, "year"), "month");
			const days = now.diff(
				start.add(years, "year").add(months, "month"),
				"day",
			);
			const hours = now.diff(
				start.add(years, "year").add(months, "month").add(days, "day"),
				"hour",
			);
			const minutes = now.diff(
				start
					.add(years, "year")
					.add(months, "month")
					.add(days, "day")
					.add(hours, "hour"),
				"minute",
			);
			const seconds = now.diff(
				start
					.add(years, "year")
					.add(months, "month")
					.add(days, "day")
					.add(hours, "hour")
					.add(minutes, "minute"),
				"second",
			);

			// Monta a string do tempo juntos, omitindo unidades com valor 0
			setTimeTogether(
				`${years ? `${years} anos, ` : ""}${months ? `${months} meses, ` : ""}${days} dias\n${hours} horas, ${minutes} minutos e ${seconds} segundos`,
			);
		}, 1000);

		// Limpa os intervalos ao desmontar o componente
		return () => {
			clearInterval(imageInterval);
			clearInterval(timeInterval);
		};
	}, []);

	return (
		<div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1 }}
				className="min-h-screen text-white flex flex-col items-center justify-center p-4 selection:bg-blue-900 selection:text-white"
			>
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="w-full max-w-md rounded-lg p-6 space-y-6"
				>
					<div className="relative w-full aspect-video top-0 h-[500px] bg-no-repeat bg-center">
						<AnimatePresence mode="wait">
							<motion.div
								key={currentImage}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.8 }}
								className="absolute inset-0"
							>
								<Image
									src={images[currentImage]}
									alt="Nós juntos"
									layout="fill"
									objectFit="cover"
									className="rounded-lg bg-no-repeat bg-top"
								/>
							</motion.div>
						</AnimatePresence>
					</div>
					<motion.h2
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						className="text-2xl sm:text-3xl text-center "
					>
						Rodrigo e Lívia
					</motion.h2>
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.6 }}
						className="p-4 rounded-lg"
					>
						<div className="text-lg sm:text-xl space-y-2 text-center whitespace-pre-line font-light">
							<span>❤️ Juntos há:</span>
							<div>{timeTogether}</div>
						</div>
					</motion.div>
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.8 }}
						className="p-4 rounded-lg"
					>
						<div className="space-y-2">
							<p className="text-justify text-base font-light">
								Cada momento ao seu lado é um verdadeiro pedaço de céu na Terra.
								Desde o primeiro instante, você se tornou minha melhor amiga,
								minha parceira e a razão de tantos sorrisos. Eu me perco no
								brilho do seu sorriso, que ilumina tudo ao redor, e no seu
								olhar, que me traz uma paz indescritível.
							</p>
							<p className="text-justify text-base font-light">
								Com você, sinto que posso enfrentar qualquer desafio, porque
								tenho ao meu lado a pessoa mais incrível do mundo. A única
								dúvida entre nós é que filme assistir, o que pedir para o
								jantar, qual a roupa perfeita pra sair, quem vai dirigir e quem
								vai brindar a vida. Qual igreja vamos casar, se compramos uma
								casa ou um apê, se fazemos festa ou se fugimos para viajar, e
								qual o nome do nosso bebê... Todas essas dúvidas a gente tira de
								letra, porque o resto, meu amor, é pura certeza.
							</p>
							<p className="text-justify text-base font-light">
								Obrigado por ser quem você é. Por trazer tanta alegria e tanto
								amor para a minha vida. Que possamos continuar sonhando, criando
								memórias e construindo uma vida juntos, dia após dia. Você é o
								melhor presente que a vida e Deus me deu, e eu te amo mais do
								que qualquer palavra pode dizer! ❤️
							</p>
						</div>
					</motion.div>
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 1 }}
						className="w-full rounded-lg"
					>
						<YouTube
							videoId="jU687UalkTg"
							opts={{
								height: "100%",
								width: "100%",
								playerVars: {
									autoplay: 1,
									controls: 0,
								},
							}}
						/>
					</motion.div>
				</motion.div>
			</motion.div>
		</div>
	);
}
