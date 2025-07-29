/* eslint-disable react/no-unescaped-entities */
import { title, subtitle } from "@/components/primitives";
import {
	Image, Card, CardFooter, CardBody, Button, CardHeader, Accordion, AccordionItem,
	Dropdown, DropdownTrigger, DropdownMenu, DropdownItem,
	ScrollShadow
} from "@nextui-org/react";
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

// RoboChallengeContent
export const RoboChallengeContent = () => (
	<div className="text-black/80 font-medium text-md">
		<p>
			Robochallenge is an international robotics competition aimed especially at students who are passionate about the practice of a project, as well as those who are eager to learn more. The competition complements the theoretical part taught at the faculty, it is the way in which students can do something enjoyable and useful using the theoretical knowledge acquired. Robochallenge is a competition organized by the Faculty of Electronics, Telecommunications and Information Technology, "Politehnica" University of Bucharest, in collaboration with the Electronics Students' League (Electronics Students' League) and the ETTI Robochallenge team.
		</p>
		<br />
		<p>
			SpeedyBot 2.0 is a Mini Sumo fighting robot made of a steel chassis and front blade, five infra-red sensors (JS40F) oriented on a 180-degree front surface for detecting and attacking the opponent, two front color sensors (ML1) for timely detection of the edge of the playing surface, two 400 Rpm Micro Gearhead Dc Motors attached to one wheel each, a LiPo Battery (7.4V 2S 300Mah), all of these components being connected to the Arduino Leonardo motherboard.
		</p>
		<br />
		<p>
			<strong>FUN FACT:</strong> Immediately after winning the final, I was informed that in the last three years, 2016-2018, at the Mini-Sumo Kids competition at Robochallenge Romania, no Romanian had ranked first, second or third. I also noticed that besides me, Turkish teams had ranked second and third. It wasn’t long before I realized that most of the kits available on the market were designed by the Turks. Having their own siege of sumo robots, they had a slight advantage over everyone else.
		</p>
	</div>
);

// FTCContent
export const FTCContent = () => (
	<div className="text-black/80 font-medium text-md">
		<p>
			FIRST Tech Challenge (FTC), formerly known as FIRST Vex Challenge, is a robotics competition for students in grades 7-12 to compete head-to-head by designing, building, and programming a robot to compete in an alliance format against other teams. FIRST Tech Challenge is one of four major robotics programs organized by FIRST, the other three programs including FIRST Lego League Explore, FIRST Lego League Challenge, and FIRST Robotics Competition.		</p>
		<br />
		<p>
			The robot kit is Android-based and programmed using Java, the Blocks programming interface, or other Android programming systems. Teams, with the guidance of coaches, mentors, and volunteers, must develop a strategy and build robots based on innovative and sound engineering principles. Awards are given for robot performance, as well as community development, design, and other real-world achievements.
		</p>
		<br />
		<p>
			In the 2016-2017 school year, I was a member of the AQUILA Team (RO 040) from the “Petru Rareș” National College, which was the first team from Neamț County to participate in this prestigious competition. In the following years, several high schools in the county established teams that participated in the FTC competition. Later, after becoming a student at the National College of Informatics in Piatra Neamț, I joined the CYB3RG0DS team (RO 085) where I participated in all the activities of the FTC competition.
		</p>
	</div>
);

// InfoMatrix1Content
export const InfoMatrix1Content = () => (
	<div className="text-black/80 font-medium text-md">
		<p>
			Infomatrix is ​​an international computer science project competition, born from the desire to bring together the best IT students in the world. The competition is not only about promoting professional excellence; it also serves to promote dialogue and intercultural cooperation, by involving students and teachers from all over the world. People have a certain interest in robotics and it is growing considerably. In order to make the new generation more curious and passionate about robotics, several competitions have been organized in different countries around the world. Infomatrix invites the best minds from all over the world to compete in the Robotics category. Infomatrix has 7 subcategories for Robotics. Two of them are called Lego Mini-Sumo and Mini-Sumo.
		</p>
		<br />
		<p>
			SpeedyBot 1.0 is a Mini Sumo fighting robot made of a steel chassis and front blade, five infra-red sensors (JS40F) oriented on a 180-degree front surface for detecting and attacking the opponent, two front color sensors (ML1) for timely detection of the edge of the playing surface, two 400 Rpm Micro Gearhead Dc Motors attached to one wheel each, a LiPo Battery (7.4V 2S 300Mah), all of these components being connected to the Arduino Leonardo motherboard.
		</p>
		<br />
		<p>
			The Lego Mini-Sumo competition consists of two autonomous robots competing and trying to push their opponent out of the field. The playing field is round, and the inner surface is painted black and is bordered by a white border. Two robots compete in each battle. A battle consists of three rounds.		</p>
	</div>
);


// InfoMatrix2Content
export const InfoMatrix2Content = () => (
	<div className="text-black/80 font-medium text-md">
		<p>
			Infomatrix is ​​an international computer science project competition, born from the desire to bring together the best IT students in the world. The competition is not only about promoting professional excellence; it also serves to promote dialogue and intercultural cooperation, by involving students and teachers from all over the world. People have a certain interest in robotics and it is growing considerably. In order to make the new generation more curious and passionate about robotics, several competitions have been organized in different countries around the world. Infomatrix invites the best minds from all over the world to compete in the Robotics category. Infomatrix has 7 subcategories for Robotics. Two of them are called Lego Mini-Sumo and Mini-Sumo.
		</p>
		<br />
		<p>
			SpeedyBot 1.0 is a Mini Sumo fighting robot made of a steel chassis and front blade, five infra-red sensors (JS40F) oriented on a 180-degree front surface for detecting and attacking the opponent, two front color sensors (ML1) for timely detection of the edge of the playing surface, two 400 Rpm Micro Gearhead Dc Motors attached to one wheel each, a LiPo Battery (7.4V 2S 300Mah), all of these components being connected to the Arduino Leonardo motherboard.
		</p>
		<br />
		<p>
			The Mini-Sumo competition consists of two autonomous robots competing and trying to push their opponent out of the field. The playing field is round, and the inner surface is painted black and is bordered by a white border. Two robots compete in each battle. A battle consists of three rounds.		</p>
	</div>
);

export const InfoMatrix2_2Content = () => (
	<div className="text-black/80 font-medium text-md">
		<p>
			The same competition as above, but the category is different. Different strictly in terms of combat robots. These are designed this time from mechanical LEGO pieces and made up of sensors and motors that offer exactly the same functionalities as an Arduino robot! Two infrared sensors for detecting the enemy, two color sensors for detecting the combat surface, two motors attached to the wheels, as well as an attack motor, but not lastly the programming brick of the component parts.
		</p>
	</div>
);

// InfoMatrix3Content
export const InfoMatrix3Content = () => (
	<div className="text-black/80 font-medium text-md">
		<p>
			InfoMatrix promotes multiculturalism and understanding between people, this is one of the main goals of this beautiful international competition. Young people from Europe, Asia, America, Africa, we all met here to compete and learn more from each other!
		</p>
		<br />
		<p>
			The Hola robot is a LEGO combat robot built and programmed in the C/C++ programming language. It is equipped with Mindstorms EV3 equipment, consisting of two infrared sensors for detecting and attacking the enemy placed in front of it, two color sensors to detect the edge of the combat surface in advance, two speed motors each equipped with a wheel, an attack motor that helps Hola push opponents more easily through a propeller and the motherboard that manages each component.
		</p>
		<br />
		<p>
			The Lego Mini-Sumo competition consists of two autonomous robots competing and trying to push their opponent out of the field. The playing field is round, and the inner surface is painted black and is bordered by a white border. Two robots compete in each battle. A battle consists of three rounds.		</p>
	</div>
);


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
			img: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
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

				<div id="education"> <p><br /><br /></p> </div>

				<section className="w-full px-4 py-12 flex flex-col items-center justify-center">
					<div className="max-w-4xl text-center">

						<div className="inline-block max-w-4xl text-center justify-center gap-5">
							<h1 className={title()}>Education&nbsp;</h1>
						</div>

						<br/>
						<br/>

						<div>
							<h3 className="text-2xl font-semibold">"Alexandru Ioan Cuza" University of Iași, România</h3>
							<p className="text-lg mb-1"><strong>Research Master</strong> - Computer Science</p>
							<p className="text-sm mb-6">October 2025 – July 2027</p>

							<h4 className="text-lg font-medium mb-2">Relevant Coursework</h4>
							<ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-base">
								<li>Advanced Chapters on Neural Networks</li>
								<li>(Advanced Chapters on) Artificial Vision</li>
								<li>Deep Learning with Applications in NLP</li>
								<li>Programmatic Aspects for Cloud Service Engineering - AWS</li>
								<li>Data Mining</li>
								<li>Big Data</li>
							</ul>
						</div>

						{/* <div className="w-full my-8 flex justify-center">
						<div className="w-64 h-[1.5px] bg-gray-500 rounded-full"></div>
						</div> */}

						<div>
							<h3 className="text-2xl font-semibold">"Alexandru Ioan Cuza" University of Iași, România</h3>
							<p className="text-lg mb-1"><strong>Bachelor’s Degree</strong> in Computer Science</p>
							<p className="text-sm mb-6">October 2022 – July 2025</p>

							<h4 className="text-lg font-medium mb-2">Relevant Coursework</h4>
							<ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-base">
								<li>Neural Networks (DNN)</li>
								<li>Machine Learning (ML)</li>
								<li>Artificial Intelligence (AI)</li>
								<li>PyTorch, NumPy, Python</li>
								<li>Data Structures and Algorithm Design</li>
								<li>Object-Oriented Programming (OOP)</li>
								<li>Databases</li>
								<li>Probabilities and Statistics</li>
							</ul>
						</div>

					</div>
				</section>



				<div id="projects"> <p><br /><br /></p> </div>
				<div className="inline-block max-w-4xl text-center justify-center gap-5">
					<h1 className={title()}>My personal projects&nbsp;</h1>
				</div>
				<div className="max-w-[900px] gap-4 grid grid-cols-1 sm:grid-cols-12 px-4 sm:px-8">
					<motion.div
						initial={{ x: isSmall ? 0 : -300, opacity: isSmall ? 1 : 0 }}
						animate={isSmall ? { x: 0, opacity: 1 } : undefined}
						whileInView={isSmall ? undefined : { x: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ amount: 0.2, once: true }}
						className="col-span-12 sm:col-span-7"
					>
						<Card className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-lg">
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
						className="col-span-12 sm:col-span-5"
					>
						<Card className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-lg">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-2xl text-black/40 font-bold">Description</p>
								<h4 className="text-black/80 font-medium text-md">
									Implemented a Deep Q-Learning algorithm with Convolutional Neural Networks to train an AI agent to play Flappy Bird. Built using PyTorch, demonstrating advanced reinforcement learning techniques.
								</h4>
							</CardHeader>
							<Image
								removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover blur-sm"
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
						className="col-span-12 sm:col-span-7"
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
						className="col-span-12 sm:col-span-5"
					>
						<Card className="w-full h-[300px]">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-2xl text-black/40 font-bold">Description</p>
								<h4 className="text-black/80 font-medium text-md">
									Developed better the subtle concepts of Data Science using PySpark!
									Course supported by E.on Software Development that established the foundations of working with Big Data.
									This project aims to analyze the energy consumption of a group of fictitious consumers, over the course of a year, of an energy company, using the analysis techniques of the Apache Spark engine.
								</h4>
							</CardHeader>
							<Image
								removeWrapper
								alt="Card example background"
								className="z-0 w-full h-full scale-125 -translate-y-6 object-cover blur-sm"
								src="https://cdn.pixabay.com/photo/2024/05/20/07/48/ai-generated-8774027_1280.jpg"
							/>
						</Card>
					</motion.div>

					{/* 
					<motion.div
						initial={{ x: isSmall ? 0 : -300, opacity: isSmall ? 1 : 0 }}
						animate={isSmall ? { x: 0, opacity: 1 } : undefined}
						whileInView={isSmall ? undefined : { x: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ amount: 0.2, once: true }}
						className="col-span-12 sm:col-span-7"
					>
						<Card className="w-full h-[300px] col-span-12 sm:col-span-7">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-2xl text-black/40 font-bold mb-2">
									Sound Recognition</p>
								<ul className="text-sm space-y-1 mb-4">
									<li><strong>Time Period:</strong> may 2025 - jun. 2025</li>
									<li>
										<strong>Tech Stack:</strong> Deep Neural Networks (DNN) · PyTorch · Convolutional Neural Networks (CNN) · Object-Oriented Programming (OOP) · Deep Learning · Mel Spectrogram · Audio Processing
									</li>
								</ul>
								<Button
									as="a"
									href="https://github.com/AndromedaOMA/Sound_Recognition"
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
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXF25qnT5qIKtKoQcp5GQ-uu8xWBucpmfaPusInLgfoh61Bi0I"
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
						className="col-span-12 sm:col-span-5"
					>
						<Card className="w-full h-[300px]">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-2xl text-black/40 font-bold">Description</p>
								<h4 className="text-black/80 font-medium text-md">
									Developed and trained a Convolutional for Sound Recognition task! The main objective of this project is to recognize sounds and provide the classification associated with speech in real time. The architecture is compact but efficient, leveraging a well-structured <strong>UrbanSound8K</strong> dataset provided by the TorchAudio library.
								</h4>
							</CardHeader>
							<Image
								removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover blur-sm"
								src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSGwmiJlH_y0R_HUMmsDS9qK61nc6OJVmOz0A68Ux_oqcBBBrx2"
							/>
						</Card>
					</motion.div>
 */}

					{/* <motion.div
						initial={{ x: isSmall ? 0 : -300, opacity: isSmall ? 1 : 0 }}
						animate={isSmall ? { x: 0, opacity: 1 } : undefined}
						whileInView={isSmall ? undefined : { x: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ amount: 0.2, once: true }}
						className="col-span-12 sm:col-span-7"
					>
						<Card className="w-full h-[300px] col-span-12 sm:col-span-7">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-2xl text-black/40 font-bold mb-2">
									Speech Recognition</p>
								<ul className="text-sm space-y-1 mb-4">
									<li><strong>Time Period:</strong> may 2025 - may 2025</li>
									<li>
										<strong>Tech Stack:</strong>   Deep Neural Networks (DNN) · PyTorch · Convolutional Neural Networks (CNN) · Residual Networks (ResNet) · Object-Oriented Programming (OOP) · Deep Learning
									</li>
								</ul>
								<Button
									as="a"
									href="https://github.com/AndromedaOMA/Speech_Recognition/tree/main"
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
									src="https://i.pinimg.com/736x/d8/e4/6e/d8e46e3a67d87e4942ed788e8328e7a8.jpg"
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
						className="col-span-12 sm:col-span-5"
					>
						<Card className="w-full h-[300px]">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-2xl text-black/40 font-bold">Description</p>
								<h4 className="text-black/80 font-medium text-md">
									Developed and trained a Convolutional ResNet & Bidirectional GRU for Speech Recognition task! The main objective of this project is to recognize speech and provide transcripts associated with speech in real time. The architecture is compact but efficient, leveraging a well-structured <strong>LibriSpeech</strong> dataset provided by the TorchAudio library.
								</h4>
							</CardHeader>
							<Image
								removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover blur-sm"
								src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSGwmiJlH_y0R_HUMmsDS9qK61nc6OJVmOz0A68Ux_oqcBBBrx2"
							/>
						</Card>
					</motion.div> */}


					<motion.div
						initial={{ x: isSmall ? 0 : -300, opacity: isSmall ? 1 : 0 }}
						animate={isSmall ? { x: 0, opacity: 1 } : undefined}
						whileInView={isSmall ? undefined : { x: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ amount: 0.2, once: true }}
						className="col-span-12 sm:col-span-7"
					>
						<Card className="w-full h-[300px] col-span-12 sm:col-span-7">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-2xl text-black/40 font-bold mb-2">
									Bachelor Thesis Project</p>
								<ul className="text-sm space-y-1 mb-4">
									<li><strong>Time Period:</strong> mar 2025 - jun 2025</li>
									<li>
										<strong>Tech Stack:</strong> Deep Neural Networks (DNN) · PyTorch · Convolutional Neural Networks (CNN) · Encoder-Decoder · Ultra-Light-Weight ·  Short-Time Fourier Transform (STFT) · Object-Oriented Programming (OOP) · Deep Learning
									</li>
								</ul>
								<Button
									as="a"
									href="https://github.com/AndromedaOMA/Bachelor_Thesis_Project"
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
									src="https://i.pinimg.com/736x/d8/e4/6e/d8e46e3a67d87e4942ed788e8328e7a8.jpg"
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
						className="col-span-12 sm:col-span-5"
					>
						<Card className="w-full h-[300px]">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-2xl text-black/40 font-bold">Description</p>
								<h4 className="text-black/80 font-medium text-md">
									Deep learning (Speech Enhancement) focused on improving the clarity of human language regardless of the patient's environment!
									In other words, this project will adjust and adapt in real time the hearing depending on the environment with the emphasis on the quality of the conversation.
								</h4>
							</CardHeader>
							<Image
								removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover blur-sm"
								src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSGwmiJlH_y0R_HUMmsDS9qK61nc6OJVmOz0A68Ux_oqcBBBrx2"
							/>
						</Card>
					</motion.div>



					<motion.div
						initial={{ x: isSmall ? 0 : -300, opacity: isSmall ? 1 : 0 }}
						animate={isSmall ? { x: 0, opacity: 1 } : undefined}
						whileInView={isSmall ? undefined : { x: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ amount: 0.2, once: true }}
						className="col-span-12 sm:col-span-7"
					>
						<Card className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-lg">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-2xl text-black/40 font-bold mb-2">Neural Networks Laboratories</p>
								<ul className="text-sm space-y-1 mb-4">
									<li><strong>Time Period:</strong> sept 2024 - jan 2025</li>
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
						className="col-span-12 sm:col-span-5"
					>
						<Card className="relative w-full h-[300px] rounded-2xl overflow-hidden shadow-lg">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-2xl text-black/40 font-bold">Description</p>
								<h4 className="text-black/80 font-medium text-md">
									I have had a deep understanding and development of neural models, from tensors and fully connected Neural Networks to the most current and used today Convolutional Neural Networks and Residual Neural Network. I am currently active in understanding the concepts of Deep Learning through the application of Transformers. </h4>
							</CardHeader>
							<Image
								removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover blur-sm"
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
								<p className="text-default-250">{skill.type}</p>
							</CardFooter>
						</Card>
					))}
				</div>



				<div id="awards"> <p><br /><br /></p> </div>

				<div className="inline-block max-w-4xl text-center justify-center gap-5">
					<h1 className={title()}>Awards&nbsp;</h1>
				</div>
				<div className="max-w-[900px] gap-4 grid grid-cols-1 sm:grid-cols-12 px-4 sm:px-8">
					<motion.div
						initial={{ x: isSmall ? 0 : -300, opacity: isSmall ? 1 : 0 }}
						animate={isSmall ? { x: 0, opacity: 1 } : undefined}
						whileInView={isSmall ? undefined : { x: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ amount: 0.2, once: true }}
						className="col-span-12 sm:col-span-7"
					>
						<Card className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-2xl text-black/40 font-bold mb-2">First place at the International <a href="https://robochallenge.ro/">RoboChallenge</a> Competition</p>
								<ul className="text-sm space-y-1 mb-4">
									<li><strong>Category:</strong> Mini Sumo Kids</li>
									<li><strong>Time Period:</strong> 03 nov. 2019</li>
									<li>
										<strong>Tech Stack:</strong> Embedded System · Arduino · C/C++ · Robotics
									</li>
								</ul>
								<div className="flex flex-col gap-4 w-fit">
									<Dropdown backdrop="blur">
										<DropdownTrigger>
											<Button variant="bordered">View on Newspapers</Button>
										</DropdownTrigger>
										<DropdownMenu aria-label="Static Actions" variant="faded">
											<DropdownItem
												key="Monitorul"
												href="https://monitorulneamt.ro/cu-un-robot-de-lupta-locul-i-la-internationala-robochallenge/"
											>
												Monitorul Newspapers
											</DropdownItem>
											<DropdownItem key="Adevărul" href="https://adevarul.ro/stiri-locale/piatra-neamt/robotii-de-lupta-pasiunea-unui-licean-de-a-x-a-1998360.html"
											>
												Adevărul Newspapers
											</DropdownItem>
											<DropdownItem key="NewsAllert" href="https://www.newsallert.ro/nemteanul-marius-alexandru-olaru-locul-1-la-competitia-internationala-de-robotica-robochallenge/"
											>
												NewsAllert Newspapers
											</DropdownItem>
										</DropdownMenu>
									</Dropdown>

									<Button
										as="a"
										href="Certificates\First place at the International RoboChallenge Competition 2019.jpg"
										target="_blank"
										variant="shadow"
										color="default"
										className="w-fit"
									>
										View Certificate of Achievement
									</Button>
								</div>
							</CardHeader>
							<div className="absolute inset-0 z-0">
								<Image
									removeWrapper
									alt="Flappy Bird AI background"
									className="w-full h-full object-cover blur-sm"
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
						className="col-span-12 sm:col-span-5"
					>
						<Card className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-2xl text-black/40 font-bold">Description</p>
								<ScrollShadow hideScrollBar className="w-[300px] h-[270px]">
									<RoboChallengeContent />
								</ScrollShadow>
							</CardHeader>
							<Image
								removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover blur-sm"
								src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSGwmiJlH_y0R_HUMmsDS9qK61nc6OJVmOz0A68Ux_oqcBBBrx2"
							/>
						</Card>
					</motion.div>

					<motion.div
						initial={{ x: isSmall ? 0 : -300, opacity: isSmall ? 1 : 0 }}
						animate={isSmall ? { x: 0, opacity: 1 } : undefined}
						whileInView={isSmall ? undefined : { x: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ amount: 0.2, once: true }}
						className="col-span-12 sm:col-span-7"
					>
						<Card className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-2xl text-black/40 font-bold mb-2">Silver Medal at the Infomatrix International Competition</p>
								<ul className="text-sm space-y-1 mb-4">
									<li><strong>Category:</strong> MiniSumo</li>
									<li><strong>Time Period:</strong> 24 apr. 2019</li>
									<li>
										<strong>Tech Stack:</strong> Embedded System · Arduino · C/C++ · Robotics
									</li>
								</ul>
								<div className="flex flex-col gap-4 w-fit">
									<Dropdown backdrop="blur">
										<DropdownTrigger>
											<Button variant="bordered">View on Newspapers</Button>
										</DropdownTrigger>
										<DropdownMenu aria-label="Static Actions" variant="faded">
											<DropdownItem
												key="Mentorul"
												href="https://monitorulneamt.ro/medalie-de-argint-la-o-competitie-internationala-pentru-un-elev-de-la-colegiul-de-informatica/"
											>
												Mentorul Newspapers
											</DropdownItem>
										</DropdownMenu>
									</Dropdown>

									<Button
										as="a"
										href="Certificates\Silver Medal at the Infomatrix International Competition 2019.jpg"
										target="_blank"
										variant="shadow"
										color="default"
										className="w-fit"
									>
										View Certificate of Achievement
									</Button>
								</div>
							</CardHeader>
							<div className="absolute inset-0 z-0">
								<Image
									removeWrapper
									alt="Advanced Analytics background"
									className="w-full h-full object-cover blur-sm"
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
						className="col-span-12 sm:col-span-5"
					>
						<Card className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg ">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-2xl text-black/40 font-bold">Description</p>
								<ScrollShadow hideScrollBar className="w-[300px] h-[270px]">
									<InfoMatrix2Content />
								</ScrollShadow>
							</CardHeader>
							<Image
								removeWrapper
								alt="Card example background"
								className="z-0 w-full h-full scale-125 -translate-y-6 object-cover blur-sm"
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
						className="col-span-12 sm:col-span-7"
					>
						<Card className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-2xl text-black/40 font-bold mb-2">Silver Medal at the Infomatrix International Competition</p>
								<ul className="text-sm space-y-1 mb-4">
									<li><strong>Category:</strong> Robotics LEGO Sumo</li>
									<li><strong>Time Period:</strong> 14 may 2018</li>
									<li>
										<strong>Tech Stack:</strong> Embedded System · Arduino · C/C++ · Robotics
									</li>
								</ul>
								<div className="flex flex-col gap-4 w-fit">
									<Dropdown backdrop="blur">
										<DropdownTrigger>
											<Button variant="bordered">View on Newspapers</Button>
										</DropdownTrigger>
										<DropdownMenu aria-label="Static Actions" variant="faded">
											<DropdownItem
												key="Mentorul"
												href="https://monitorulneamt.ro/elev-pietrean-medalie-de-argint-la-competitia-infomatrix-world-final-2018/"
											>
												Mentorul Newspapers
											</DropdownItem>
										</DropdownMenu>
									</Dropdown>

									<Button
										as="a"
										href="Certificates\Silver Medal at the Infomatrix International Competition 2018.jpg"
										target="_blank"
										variant="shadow"
										color="default"
										className="w-fit"
									>
										View Certificate of Achievement
									</Button>
								</div>
							</CardHeader>
							<div className="absolute inset-0 z-0">
								<Image
									removeWrapper
									alt="Advanced Analytics background"
									className="w-full h-full object-cover blur-sm"
									src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTB1dtOii_TJA_mbA7LgZzqkNmQQTatf0cOFLmHw_bXCR1fp_Cx"
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
						className="col-span-12 sm:col-span-5"
					>
						<Card className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg ">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-2xl text-black/40 font-bold">Description</p>
								<ScrollShadow hideScrollBar className="w-[300px] h-[270px]">
									<InfoMatrix2_2Content />
								</ScrollShadow>
							</CardHeader>
							<Image
								removeWrapper
								alt="Card example background"
								className="z-0 w-full h-full scale-125 -translate-y-6 object-cover blur-sm"
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSsX_YoMuF00RVnWoTPVpvk164tG-1ppuYV3K60ImRirmjzjjK"
							/>
						</Card>
					</motion.div>



					<motion.div
						initial={{ x: isSmall ? 0 : -300, opacity: isSmall ? 1 : 0 }}
						animate={isSmall ? { x: 0, opacity: 1 } : undefined}
						whileInView={isSmall ? undefined : { x: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ amount: 0.2, once: true }}
						className="col-span-12 sm:col-span-7"
					>
						<Card className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-2xl text-black/40 font-bold mb-2">Bronze Medal at the Infomatrix International Competition</p>
								<ul className="text-sm space-y-1 mb-4">
									<li><strong>Category:</strong> Robotics LEGO Sumo</li>
									<li><strong>Time Period:</strong> 01 may 2017</li>
									<li>
										<strong>Tech Stack:</strong> Embedded System · C/C++ · Robotics
									</li>
								</ul>
								<div className="flex flex-col gap-4 w-fit">
									{/* <Dropdown backdrop="blur">
										<DropdownTrigger>
											<Button variant="bordered">View on Newspapers</Button>
										</DropdownTrigger>
										<DropdownMenu aria-label="Static Actions" variant="faded">
											<DropdownItem
												key="Monitorul"
												href="https://monitorulneamt.ro/elev-pietrean-medalie-de-argint-la-competitia-infomatrix-world-final-2018/"
											>
												Monitorul Newspapers
											</DropdownItem>
										</DropdownMenu>
									</Dropdown> */}

									<Button
										as="a"
										href="Certificates\Bronze Medal at the Infomatrix International Competition 2017.jpg"
										target="_blank"
										variant="shadow"
										color="default"
										className="w-fit"
									>
										View Certificate of Achievement
									</Button>
								</div>
							</CardHeader>
							<div className="absolute inset-0 z-0">
								<Image
									removeWrapper
									alt="Flappy Bird AI background"
									className="w-full h-full object-cover blur-sm"
									src="https://i.pinimg.com/736x/d8/e4/6e/d8e46e3a67d87e4942ed788e8328e7a8.jpg"
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
						className="col-span-12 sm:col-span-5"
					>
						<Card className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-2xl text-black/40 font-bold">Description</p>
								<ScrollShadow hideScrollBar className="w-[300px] h-[270px]">
									<InfoMatrix3Content />
								</ScrollShadow>
							</CardHeader>
							<Image
								removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover blur-sm"
								src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQBSVMBfr16q-MOrK32pEmCa-a0URltulPybaSDMbsW4iR7idwR"
							/>
						</Card>
					</motion.div>

					<motion.div
						initial={{ x: isSmall ? 0 : -300, opacity: isSmall ? 1 : 0 }}
						animate={isSmall ? { x: 0, opacity: 1 } : undefined}
						whileInView={isSmall ? undefined : { x: 0, opacity: 1 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						viewport={{ amount: 0.2, once: true }}
						className="col-span-12 sm:col-span-7"
					>
						<Card className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-2xl text-black/40 font-bold mb-2">The ﬁnalist alliance in the FIRST Tech Challenge International Competition</p>
								<ul className="text-sm space-y-1 mb-4">
									<li><strong>Time Period:</strong> 20 apr. 2019</li>
									<li>
										<strong>Tech Stack:</strong> Embedded System · Android · Robotics
									</li>
								</ul>
								<div className="flex flex-col gap-4 w-fit">
									<Dropdown backdrop="blur">
										<DropdownTrigger>
											<Button variant="bordered">View on Newspapers</Button>
										</DropdownTrigger>
										<DropdownMenu aria-label="Static Actions" variant="faded">
											<DropdownItem
												key="ZiarPiatraNeamț"
												href="https://www.ziarpiatraneamt.ro/echipa-aquila-de-la-colegiul-national-petru-rares-va-participa-la-competitia-nationala-de-robotica-first-tech-challenge"
											>
												ZiarPiatraNeamț Newspapers
											</DropdownItem>
										</DropdownMenu>
									</Dropdown>

									<Button
										as="a"
										href="/Certificates/The ﬁnalist alliance in the FIRST Tech Challenge International Competition 2018-2019.jpg"
										target="_blank"
										variant="shadow"
										color="default"
										className="w-fit"
									>
										View Certificate of Achievement
									</Button>
								</div>

							</CardHeader>
							<div className="absolute inset-0 z-0">
								<Image
									removeWrapper
									alt="Flappy Bird AI background"
									className="w-full h-full object-cover blur-sm"
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
						className="col-span-12 sm:col-span-5"
					>
						<Card className="relative w-full h-[350px] rounded-2xl overflow-hidden shadow-lg">
							<CardHeader className="absolute z-10 top-1 flex-col !items-start">
								<p className="text-2xl text-black/40 font-bold">Description</p>
								<ScrollShadow hideScrollBar className="w-[300px] h-[270px]">
									<FTCContent />
								</ScrollShadow>
							</CardHeader>
							<Image
								removeWrapper
								alt="Card background"
								className="z-0 w-full h-full object-cover blur-sm"
								src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS8vadhsOuk1F5mucqxzFknGjNWBqB3hm76J2wh0gVTLZrRn3lS"
							/>
						</Card>
					</motion.div>
				</div>

				<div id="volunteering"> <p><br /><br /></p> </div>

				<section className="w-full px-4 py-12 flex flex-col items-center justify-center">
					<div className="max-w-4xl text-center">
						<h1 className={`${title()} mb-8`}>Volunteering</h1>

						<div className="space-y-4 ">
							<h3 className="text-2xl font-bold">
								Association of Computer Science Students (ASII)
								<span className="block text-base font-medium  mt-1">IT Department Member</span>
							</h3>

							<div className="text-sm">
								<p>August 2022 – January 2025</p>
								<p>Iași, România</p>
							</div>

							<ul className="mt-6 list-disc pl-6 text-left text-base space-y-3">
								<li>
									Led the organization of the national <a href="https://fiicode.asii.ro/en" target="_blank" className="underline font-bold hover:opacity-40 transition">FIICode</a> competition, showing a spirit for coordination, rigor, and planning.
								</li>

								<li>
									Expanded event to international audiences (+25%), secured <strong>BitDefender</strong> as an exclusive sponsor
									for the Capture The Flag area. Partnered with companies like <em>Amazon</em>, <em>HEITS Digital</em>,
									<em> XWiki</em>, <em>Bytex</em>, and <em>Profidata</em>.
								</li>
								<li>
									Contributed to the FIICode website using <strong>React</strong>. Gained hands-on experience with <strong>Git</strong> and <strong>GitHub</strong>.
								</li>
								<li>
									Selected among 15 students (from 200+) by <strong>GETA</strong>, a selective training division within ASII.
								</li>
								<li>
									Delivered training sessions on <strong>Git</strong>, <strong>GitHub</strong>, <strong>React</strong>, and <strong>public speaking</strong>.
									Represented FIICode through high school presentations.
								</li>
							</ul>
						</div>
					</div>
				</section>




				<div> <p><br /><br /></p> </div>

				<div className="flex w-full max-w-4xl text-center justify-center gap-5">
					<h1 className={title()}>FAQ's&nbsp;</h1>
				</div>
				<div className="inline-block max-w-4xl justify-center gqp-5">
					<Accordion variant="bordered">
						<AccordionItem key="1" aria-label="Accordion 1" title="What is my next goal?">
							Completion of the bachelor's thesis requiring the enhancement of real-time speech by using Deep Learning.
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
