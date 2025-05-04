/* eslint-disable react/no-unescaped-entities */
import { title, subtitle } from "@/components/primitives";
import { Image, Card, CardFooter, CardBody, Button, CardHeader, Input, Accordion, AccordionItem } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function useIsSmallScreen() {
	const [isSmall, setIsSmall] = useState(false);

	useEffect(() => {
		const checkScreen = () => setIsSmall(window.innerWidth < 640);
		checkScreen(); // initial check
		window.addEventListener("resize", checkScreen);
		return () => window.removeEventListener("resize", checkScreen);
	}, []);

	return isSmall;
}

export default function IndexPage() {
	const smoothScrollTo = (target: HTMLElement) => {
		const targetTop = target.getBoundingClientRect().top + window.scrollY;
		window.scrollTo({
			top: targetTop,
			behavior: 'smooth'
		});
	};

	const handleNotifyMeClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		const target = document.querySelector("#contacts") as HTMLElement;
		smoothScrollTo(target);
	};

	const isSmall = useIsSmallScreen();

	const skills = [
		{
			title: "PyTorch",
			img: "https://pytorch.org/assets/images/logo-icon.svg",
			type: "Library",
		},
		{
			title: "NumPy",
			img: "https://numpy.org/images/logo.svg",
			type: "Library",
		},
		{
			title: "Python",
			img: "https://camo.githubusercontent.com/f3f0b1dbaadd99a1cfe6b4e8a3da26e69aeec36517c26c9945a71e850c33ec8b/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f38303070782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
			type: "Language",
		},
		{
			title: "PySpark",
			img: "https://spark.apache.org/images/spark-logo-rev.svg",
			type: "Library",
		},
		{
			title: "C",
			img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
			type: "Language",
		},
		{
			title: "C++",
			img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
			type: "Language",
		},
		{
			title: "Git",
			img: "https://www.svgrepo.com/show/303548/git-icon-logo.svg",
			type: "Tool",
		},
		{
			title: "MySQL",
			img: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
			type: "Relational Db",
		},
	];

	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<Card isFooterBlurred radius="lg" className="border-none w-full max-w-[725px] mx-auto">
					<div className="relative">
						<Image
							src="https://eleven-clinic.com/wp-content/uploads/2022/11/despre-noi.jpg"
							alt="Cool Background Image"
							className="z-0 w-full h-[220px] sm:h-[300px] scale-125 -translate-y-6 object-cover shadow-small"
						/>

						<div className="absolute inset-0 flex items-center px-4 sm:px-10 py-4 gap-4">
							{/* Increased the image size here */}
							<div className="w-[100px] h-[140px] sm:w-[160px] sm:h-[220px] flex-shrink-0">
								<Image
									src="https://avatars.githubusercontent.com/u/116078879?v=4"
									alt="Profile"
									className="w-full h-full object-cover rounded-xl shadow-lg"
								/>
							</div>

							<div className="flex-1 text-black">
								<h1 className="text-sm sm:text-2xl font-bold">
									Hi 👋, I'm Olaru Marius-Alexandru
								</h1>
								<p className="mt-1 text-xs sm:text-md leading-tight">
									A passionate software developer
									<span className="hidden sm:inline">
										{" "}
										from Romania interested in Deep Learning & Machine Learning.
									</span>
								</p>
							</div>
						</div>
					</div>

					<CardFooter className="justify-end before:bg-white/40 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
						<Button
							className="text-tiny text-black/80 bg-black/20"
							variant="flat"
							color="default"
							radius="lg"
							size="sm"
							onClick={handleNotifyMeClick}
						>
							Get In Touch
						</Button>
					</CardFooter>
				</Card>




				{/* <Card
					isFooterBlurred
					radius="lg"
					className="border-none"
				>
					<Image
						src="https://eleven-clinic.com/wp-content/uploads/2022/11/despre-noi.jpg"
						alt="Cool Background Image"
						style={{ width: '725px', height: '300px' }}
						className="z-0 w-full h-full scale-125 -translate-y-6 object-cover shadow-small"
					/>
					<CardFooter className="justify-between before:bg-white/40 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
						<p className="text-tiny text-black/80">Available soon.</p>
						<Button
							className="text-tiny text-black/80 bg-black/20"
							variant="flat"
							color="default"
							radius="lg"
							size="sm"
							onClick={handleNotifyMeClick}
						>
							Notify me
						</Button>
					</CardFooter>
				</Card> */}


				<div id="projects"> <p><br /><br /></p> </div>

				<div className="inline-block max-w-4xl text-center justify-center gap-5" id="projects">
					<h1 className={title()}>My personal projects&nbsp;</h1>
				</div>
				<div className="max-w-[900px] gap-4 grid grid-cols-1 sm:grid-cols-12 px-4 sm:px-8">
					<motion.div
						initial={{ x: isSmall ? 0 : -300, opacity: isSmall ? 1 : 0 }}
						animate={isSmall ? { x: 0, opacity: 1 } : undefined}
						whileInView={isSmall ? undefined : { x: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ amount: 0.2, once: true }}
						className="col-span-12 sm:col-span-7 order-1"
					>
						<Card className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-2xl text-black/40 font-bold mb-2">FlappyNet</p>
								<ul className="text-sm space-y-1 mb-4">
									<li><strong>Time Period:</strong> dec. 2024 – ian. 2025</li>
									<li>
										<strong>Tech Stack:</strong> Reinforcement Learning · Deep Neural Networks (DNN) · Deep Q Networks (DQN) · PyTorch · Convolutional Neural Networks (CNN) · Object-Oriented Programming (OOP) · Deep Learning
									</li>
								</ul>
								<Button
									as="a"
									href="https://github.com/AndromedaOMA/FlappyNet"
									target="_blank"
									variant="shadow"
									color="default"
									className="w-fit mt-auto"
								>
									View on GitHub
								</Button>
							</CardHeader>
							<div className="absolute inset-0 z-0">
								<Image
									removeWrapper
									alt="Flappy Bird AI background"
									className="w-full h-full object-cover"
									src="https://eleven-clinic.com/wp-content/uploads/2022/11/cine-suntem.jpg"
								/>
								<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
							</div>
						</Card>
					</motion.div>
					<motion.div
						initial={{ x: isSmall ? 0 : 300, opacity: isSmall ? 1 : 0 }}
						animate={isSmall ? { x: 0, opacity: 1 } : undefined}
						whileInView={isSmall ? undefined : { x: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ amount: 0.2, once: true }}
						className="col-span-12 sm:col-span-5 order-2"
					>
						<Card className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-lg">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-large text-black/40 uppercase font-bold">description</p>
								<h4 className="text-black/80 font-medium text-md">
									Implemented a Deep Q-Learning algorithm with Convolutional Neural Networks to train an AI agent to play Flappy Bird. Built using PyTorch, demonstrating advanced reinforcement learning techniques.
								</h4>
							</CardHeader>
							<Image
								removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover"
								src="https://eleven-clinic.com/wp-content/uploads/2022/11/misiune.jpg"
							/>
						</Card>
					</motion.div>

					<motion.div
						initial={{ x: isSmall ? 0 : -300, opacity: isSmall ? 1 : 0 }}
						animate={isSmall ? { x: 0, opacity: 1 } : undefined}
						whileInView={isSmall ? undefined : { x: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ amount: 0.2, once: true }}
						className="col-span-12 sm:col-span-7 order-3"
					>
						<Card className="w-full h-[300px] col-span-12 sm:col-span-7">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-2xl text-black/40 font-bold mb-2">
									Advanced Analytics with Apache Spark</p>
								<ul className="text-sm space-y-1 mb-4">
									<li><strong>Time Period:</strong> mar. 2025 - apr. 2025</li>
									<li>
										<strong>Tech Stack:</strong>  PySpark · Apache Spark · Data Science · Big Data · Problem Solving · Apache Spark ML · MLLib
									</li>
								</ul>
								<Button
									as="a"
									href="https://github.com/AndromedaOMA/Advanced_Analytics_with_Apache_Spark---E.On_Software_Development"
									target="_blank"
									variant="shadow"
									color="default"
									className="w-fit mt-auto"
								>
									View on GitHub
								</Button>
							</CardHeader>
							<div className="absolute inset-0 z-0">
								<Image
									removeWrapper
									alt="Advanced Analytics background"
									className="w-full h-full object-cover"
									src="https://www.themezaa.com/html/leadgen/demo/spa-salon/images/event-gallery-09.jpg"
								/>
								<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
							</div>
						</Card>
					</motion.div>
					<motion.div
						initial={{ x: isSmall ? 0 : 300, opacity: isSmall ? 1 : 0 }}
						animate={isSmall ? { x: 0, opacity: 1 } : undefined}
						whileInView={isSmall ? undefined : { x: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ amount: 0.2, once: true }}
						className="col-span-12 sm:col-span-5 order-4"
					>
						<Card className="w-full h-[300px]">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-large text-black/40 uppercase font-bold">description</p>
								<h4 className="text-black/80 font-medium text-md">
									Developed better the subtle concepts of Data Science using PySpark!
									Course supported by E.on Software Development that established the foundations of working with Big Data.
									This project aims to analyze the energy consumption of a group of fictitious consumers, over the course of a year, of an energy company, using the analysis techniques of the Apache Spark engine.
								</h4>
							</CardHeader>
							<Image
								removeWrapper
								alt="Card example background"
								className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
								src="https://cdn.pixabay.com/photo/2024/05/20/07/48/ai-generated-8774027_1280.jpg"
							/>
						</Card>
					</motion.div>

					<motion.div
						initial={{ x: isSmall ? 0 : -300, opacity: isSmall ? 1 : 0 }}
						animate={isSmall ? { x: 0, opacity: 1 } : undefined}
						whileInView={isSmall ? undefined : { x: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ amount: 0.2, once: true }}
						className="col-span-12 sm:col-span-7 order-5"
					>
						<Card className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-2xl text-black/40 font-bold mb-2">Neural Networks Laboratories</p>
								<ul className="text-sm space-y-1 mb-4">
									<li><strong>Time Period:</strong> sept. 2024 - ian. 2025</li>
									<li>
										<strong>Tech Stack:</strong> Deep Neural Networks (DNN) · PyTorch · NumPy · Reinforcement Learning · Convolutional Neural Networks (CNN) · Deep Learning · ResNet · Object-Oriented Programming (OOP) · Git · Python (Programming Language) · Pycharm · GitHub
									</li>
								</ul>
								<Button
									as="a"
									href="https://github.com/AndromedaOMA/Neural_Networks---Laboratories"
									target="_blank"
									variant="shadow"
									color="default"
									className="w-fit mt-auto"
								>
									View on GitHub
								</Button>
							</CardHeader>
							<div className="absolute inset-0 z-0">
								<Image
									removeWrapper
									alt="Flappy Bird AI background"
									className="w-full h-full object-cover"
									src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT8NqqKaFpPuE5tuLVMiMtQ0IIJ5sTW5lX_RcDRxd7624DJ7a2w"
								/>
								<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
							</div>
						</Card>
					</motion.div>
					<motion.div
						initial={{ x: isSmall ? 0 : 300, opacity: isSmall ? 1 : 0 }}
						animate={isSmall ? { x: 0, opacity: 1 } : undefined}
						whileInView={isSmall ? undefined : { x: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ amount: 0.2, once: true }}
						className="col-span-12 sm:col-span-5 order-6"
					>
						<Card className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-lg">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-large text-black/40 uppercase font-bold">description</p>
								<h4 className="text-white/90 font-medium text-md">
									I have had a deep understanding and development of neural models, from tensors and fully connected Neural Networks to the most current and used today Convolutional Neural Networks and Residual Neural Network. I am currently active in understanding the concepts of Deep Learning through the application of Transformers.								</h4>
							</CardHeader>
							<Image
								removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover"
								src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS8vadhsOuk1F5mucqxzFknGjNWBqB3hm76J2wh0gVTLZrRn3lS"
							/>
						</Card>
					</motion.div>
				</div>

				<div> <p><br /><br /></p> </div>

				<div className="flex w-full max-w-4xl text-center justify-center gap-5">
					<h1 className={title()}>Software Skills&nbsp;</h1>
				</div>
				<div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
					{skills.map((skill, index) => (
						<Card
							key={index}
							// isPressable
							shadow="sm"
							className="bg-gray text-white"
							onPress={() => console.log(`${skill.title} pressed`)}
						>
							<CardBody className="overflow-visible p-0">
								<Image
									alt={skill.title}
									className="w-full object-contain h-[140px] p-4"
									radius="lg"
									shadow="sm"
									src={skill.img}
									width="100%"
								/>
							</CardBody>
							<CardFooter className="text-small justify-between">
								<b>{skill.title}</b>
								<p className="text-default-500">{skill.type}</p>
							</CardFooter>
						</Card>
					))}
				</div>

				<div> <p><br /><br /></p> </div>

				<div className="flex w-full max-w-4xl text-center justify-center gap-5">
					<h1 className={title()}>FAQ's&nbsp;</h1>
				</div>
				<div className="inline-block max-w-4xl justify-center gqp-5">
					<Accordion variant="bordered">
						<AccordionItem key="1" aria-label="Accordion 1" title="What is my next goal?">
							Completion of the bachelor's thesis requiring the improvement of real-time speech by using Deep Learning and Reinforcement Learning techniques.
						</AccordionItem>
						<AccordionItem key="2" aria-label="Accordion 2" title="What are my current interests?">
							Interested in Transformer architectures and Reinforcement Learning algorithms.
						</AccordionItem>
					</Accordion>
				</div>

				<div> <p><br /><br /></p> </div>

				<div className="flex w-full max-w-4xl text-center justify-center gap-5" id="contact">
					<h1 className={title()}>Do you want to stay in touch?&nbsp;</h1>
				</div>
				<div className="flex flex-col items-center justify-center">
					<p className="text-center" id="contacts">
						Here are my contact details: <br />
					</p>
					<div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
						<div className=" shadow-md rounded-lg p-6 text-center">
							<h2 className={subtitle({ class: "text-lg font-semibold" })}>Email</h2>
							<p className={subtitle({ class: "text-lg font-semibold" })}>marius.alexandru.olaru@gmail.com</p>
						</div>
						<div className=" shadow-md rounded-lg p-6 text-center">
							<h2 className={subtitle({ class: "text-lg font-semibold" })}>Phone Number</h2>
							<p className={subtitle({ class: "text-lg font-semibold" })}>+40 737 421 575</p>
						</div>
					</div>
				</div>

				<div> <p><br /><br /></p> </div>

			</section>
		</DefaultLayout>
	);
}
