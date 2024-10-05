"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/foto1.jpg", "/foto2.jpg", "/foto3.jpg", "/foto4.jpg"];

export default function Home() {
	const [currentImage, setCurrentImage] = useState(0);
	const [timeTogether, setTimeTogether] = useState("");

	useEffect(() => {
		const imageInterval = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % images.length);
		}, 5000);

		const timeInterval = setInterval(() => {
			const start = new Date("2023-10-20");
			const now = new Date();
			const diff = now.getTime() - start.getTime();
			const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
			const months = Math.floor(
				(diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30),
			);
			const days = Math.floor(
				(diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24),
			);
			const hours = Math.floor(
				(diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
			);
			const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
			const seconds = Math.floor((diff % (1000 * 60)) / 1000);
			setTimeTogether(
				`${years} anos, ${months} meses, ${days} dias\n${hours} horas, ${minutes} minutos e ${seconds} s`,
			);
		}, 1000);

		return () => {
			clearInterval(imageInterval);
			clearInterval(timeInterval);
		};
	}, []);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1 }}
			className="min-h-screen bg-rose-700/85 text-white flex flex-col items-center justify-center p-4 overflow-hidden"
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
							transition={{ duration: 0.5 }}
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
					className="text-2xl sm:text-3xl font-semibold text-center"
				>
					Rodrigo e Lívia
				</motion.h2>
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					className="p-4 rounded-lg"
				>
					<div className="text-lg sm:text-xl space-y-2 font-medium text-center whitespace-pre-line">
						<span>Juntos há:</span>
						<div>{timeTogether}</div>
					</div>
				</motion.div>
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.8 }}
					className="p-4 rounded-lg"
				>
					<p className="text-sm sm:text-base text-justify">
						Cada momento com você é um pedaço de céu na Terra. Desde o início,
						você se tornou minha melhor amiga, parceira e razão de tantos
						sorrisos. Admiro como seu sorriso ilumina tudo e como seu olhar me
						traz paz. Com você, sinto que posso enfrentar qualquer desafio,
						porque tenho o apoio da pessoa mais incrível do mundo. Obrigado por
						ser quem é, por trazer alegria e amor à minha vida. Que possamos
						continuar construindo sonhos e memórias juntos. Você é o melhor
						presente que a vida me deu. Te amo muito!
					</p>
				</motion.div>
			</motion.div>
			<style jsx global>{`
        @keyframes fallHeart {
          0% {
            transform: translateY(-100vh) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .heart {
          position: fixed;
          top: -5vh;
          animation: fallHeart 5s linear infinite;
        }
      `}</style>
		</motion.div>
	);
}
