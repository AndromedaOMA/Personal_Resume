/* eslint-disable react/no-unescaped-entities */
import { title, subtitle } from "@/components/primitives";
import { Image, Card, CardFooter, Button, CardHeader, Input, Accordion, AccordionItem } from "@nextui-org/react";
import { ScrollShadow } from "@nextui-org/react";
import DefaultLayout from "@/layouts/default";

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

	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				{/* <div className="inline-block max-w-xlg text-center justify-center">
					<h1 className={title()}>Bringing Affordable, Personalised Mental Health Support <br /> To Your Fingertips!</h1>
					<h4 className={subtitle({ class: "mt-3" })}>
						Peace of Mind, Reimagined.
					</h4>
				</div> */}

				<Card
					isFooterBlurred
					radius="lg"
					className="border-none"
				>
					<div className="relative">
						<Image
							src="https://eleven-clinic.com/wp-content/uploads/2022/11/despre-noi.jpg"
							alt="Cool Background Image"
							style={{ width: '725px', height: '300px' }}
							className="z-0 w-full h-full scale-125 -translate-y-6 object-cover shadow-small"
						/>
						<div className="absolute inset-0 flex justify-center items-center text-center">
							<div className="max-w-xlg text-center">
								<h1 className={title()}>
									Bringing Affordable, Personalised Mental Health Support <br /> To Your Fingertips!
								</h1>
								<h4 className={subtitle({ class: "mt-3" })}>
									Peace of Mind, Reimagined.
								</h4>
							</div>
						</div>
					</div>
					<CardFooter className="justify-between before:bg-white/40 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
						<p className="text-tiny text-black/80" style={{ marginLeft: '100px' }}>Available soon.</p>
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



				<div className="inline-block max-w-4xl text-center justify-center gap-5" id="about">
					<h1 className={title()}>How SoulSteps Is Unique?&nbsp;</h1>
				</div>
				<div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
					<Card className="w-full h-[300px] col-span-12 sm:col-span-7">
						<CardHeader className="absolute z-10 top-1 flex-col !items-start">
							<p className="text-tiny text-black/40 uppercase font-bold">Psychological Assessment</p>
							<h4 className="text-black/80 font-medium text-large">Evidence-based scales and questionnaires for depression, anxiety and personality disorders.</h4>
						</CardHeader>
						<Image
							removeWrapper
							alt="Card background"
							className="z-0 w-full h-full object-cover"
							src="https://eleven-clinic.com/wp-content/uploads/2022/11/cine-suntem.jpg"
						/>
					</Card>

					<Card className="w-full h-[300px] col-span-12 sm:col-span-5">
						<CardHeader className="absolute z-10 top-1 flex-col !items-start">
							<p className="text-tiny text-black/40 uppercase font-bold">Educational Video Modules</p>
							<h4 className="text-black/80 font-medium text-large">Step by step eduction in understanding your problem and personality structure.</h4>
						</CardHeader>
						<Image
							removeWrapper
							alt="Card background"
							className="z-0 w-full h-full object-cover"
							src="https://eleven-clinic.com/wp-content/uploads/2022/11/misiune.jpg"
						/>
					</Card>

					<Card className="w-full h-[300px] col-span-12 sm:col-span-5">
						<CardHeader className="absolute z-10 top-1 flex-col items-start">
							<p className="text-tiny text-black/40 uppercase font-bold">Personalised Techniques And Exercises</p>
							<h4 className="text-black font-medium text-large">Using CBT protocols, you receive daily exercises to work on your therapy goals.</h4>
						</CardHeader>
						<Image
							removeWrapper
							alt="Card example background"
							className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
							src="https://eleven-clinic.com/wp-content/uploads/2022/11/misiune.jpg"
						/>
					</Card>

					<Card className="w-full h-[300px] col-span-12 sm:col-span-7">
						<CardHeader className="absolute z-10 top-1 flex-col items-start">
							<p className="text-tiny text-black/40 uppercase font-bold">Community Support Between Users</p>
							<h4 className="text-black/80 font-medium text-large">If you're facing an intense emotional problem, you can ask our community of users for support 24/7.</h4>
						</CardHeader>
						<Image
							removeWrapper
							alt="Relaxing app background"
							className="z-0 w-full h-full object-cover"
							src="https://eleven-clinic.com/wp-content/uploads/2022/11/cine-suntem.jpg"
						/>
					</Card>
				</div>

				<div className="flex w-full max-w-4xl text-center justify-center gap-5" id="team">
					<h1 className={title()}>Our Team&nbsp;</h1>
				</div>
				<ScrollShadow hideScrollBar className="w-full max-w-md md:max-w-xl lg:max-w-4xl h-64">
					<h4 className={subtitle({ class: "mt-3" })}>Psych. Alina Postu graduated from the Faculty of Psychology in Iasi in 2019 and a Master in Clinical Psychology and Psychotherapy in 2021, at the same time following a training program at the Institute for Training in Cognitive-Behavioural Therapy in Iasi (IFTECC) for 2 years and 3 months. During her student years, she took part in various volunteering projects at the UN Youth Association and at the European Federation of Psychology Students (EFPSA), where she also coordinated the Mind the Mind project aimed at destigmatizing mental disorders. He worked as a clinical psychologist at the Solidarity and Hope Foundation in Iași with children from underprivileged backgrounds to whom he provided assessment, counselling & psychological education. Her passion for reading and philosophy leads her to look at life with a deep curiosity towards the complexity of man even in its simplest aspects. He is a visionary when it comes to his career and constantly invests in personal and professional development to provide a safe space for people who invest with confidence when they step into the clinic.</h4>
				</ScrollShadow>
				<div className="flex w-full max-w-4xl text-center justify-center gap-5">
					<h1 className={title()}>FAQ's&nbsp;</h1>
				</div>
				<div className="inline-block max-w-4xl justify-center gqp-5">
					<Accordion variant="bordered">
						<AccordionItem key="1" aria-label="Accordion 1" title="Do I still need a therapist if I use this app?">
							Yes, we recommend to go at least once a month for a follow-up session.
						</AccordionItem>
						<AccordionItem key="2" aria-label="Accordion 2" title="Can I speak with a live therapist through the app?">
							Yes, our premium plans include access to live sessions with licensed therapists. <br /> You can schedule these sessions directly through the app.
						</AccordionItem>
						<AccordionItem key="3" aria-label="Accordion 3" title="Is my data secure?">
							We take your privacy and data security very seriously. <br /> All your information is encrypted and stored.
						</AccordionItem>
					</Accordion>
				</div>

				{/* <div className="flex w-full max-w-4xl text-center justify-center gap-5">
					<h1 className={title()}>Want to be part of SoulSteps?&nbsp;</h1>
				</div>
				<div className="flex flex-col items-center justify-center">
					<p className="text-center">
						Join our community and answer a few questions about your needs <br />
						to receive 1 year free subscription
					</p>
					<div className="w-full flex flex-col gap-4">
						<div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
							<Input type="email" variant="bordered" label="Email" id="email" />
						</div>
					</div>
				</div> */}

				<div className="flex w-full max-w-4xl text-center justify-center gap-5">
					<h1 className={title()}>Want to be part of SoulSteps?&nbsp;</h1>
				</div>
				<div className="flex flex-col items-center justify-center">
					<p className="text-center" id="contacts">
						Here are my contact details: <br />
					</p>
					<div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
						{/* Email Card */}
						<div className=" shadow-md rounded-lg p-6 text-center border">
							<h2 className={subtitle({ class: "text-lg font-semibold" })}>Email</h2>
							<p className={subtitle({ class: "text-lg font-semibold" })}>alinageorgianapostu11@gmail.com</p>
						</div>
						{/* Phone Number Card */}
						<div className=" shadow-md rounded-lg p-6 text-center border">
							<h2 className={subtitle({ class: "text-lg font-semibold" })}>Phone Number</h2>
							<p className={subtitle({ class: "text-lg font-semibold" })}>+40 744 681 577</p>
						</div>
					</div>
				</div>
			</section>
		</DefaultLayout>
	);
}
