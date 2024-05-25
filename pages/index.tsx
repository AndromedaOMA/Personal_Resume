/* eslint-disable react/no-unescaped-entities */
import { title, subtitle } from "@/components/primitives";
import { Image, Card, CardFooter, Button, CardHeader, Input, Accordion, AccordionItem } from "@nextui-org/react";

import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
	return (
		<DefaultLayout>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">

				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>Unlock Your&nbsp;</h1>
					<h1 className={title({ color: "violet" })}>Potential&nbsp;</h1>
					<br />
					<h1 className={title()}>Embrace Empowerment!</h1>
					<h4 className={subtitle({ class: "mt-4" })}>
						Simplify Specialist Workflows with Our B2B Solution.
					</h4>
				</div>



				<Card
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
						<Button className="text-tiny text-black/80 bg-black/20" variant="flat" color="default" radius="lg" size="sm" href="/">
							Notify me
						</Button>
					</CardFooter>
				</Card>


				<div className="inline-block max-w-4xl text-center justify-center gap-5">
					<h1 className={title()}>How StartupName Is Unique?&nbsp;</h1>
				</div>
				<div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8">
					<Card className="w-full h-[300px] col-span-12 sm:col-span-7">
						<CardHeader className="absolute z-10 top-1 flex-col !items-start">
							<p className="text-tiny text-black/40 uppercase font-bold">Title</p>
							<h4 className="text-black/80 font-medium text-large">Something</h4>
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
							<p className="text-tiny text-black/40 uppercase font-bold">Title</p>
							<h4 className="text-black/80 font-medium text-large">Something</h4>
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
							<p className="text-tiny text-black/40 uppercase font-bold">Title</p>
							<h4 className="text-black font-medium text-large">Something</h4>
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
							<p className="text-tiny text-black/40 uppercase font-bold">Title</p>
							<h4 className="text-black/80 font-medium text-large">Something</h4>
						</CardHeader>
						<Image
							removeWrapper
							alt="Relaxing app background"
							className="z-0 w-full h-full object-cover"
							src="https://eleven-clinic.com/wp-content/uploads/2022/11/cine-suntem.jpg"
						/>
					</Card>
				</div>


				<div className="flex w-full max-w-4xl text-center justify-center gap-5">
					<h1 className={title()}>FAQ's&nbsp;</h1>
				</div>
				<div className="inline-block max-w-4xl justify-center gqp-5">
					<Accordion variant="bordered">
						<AccordionItem key="1" aria-label="Accordion 1" title="How can I contact my clients?">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</AccordionItem>
						<AccordionItem key="2" aria-label="Accordion 2" title="Can I reach more clients via StartupName?">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</AccordionItem>
						<AccordionItem key="3" aria-label="Accordion 3" title="Is this secure?">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
						</AccordionItem>
					</Accordion>
				</div>

				<div className="flex w-full max-w-4xl text-center justify-center gap-5">
					<h1 className={title()}>Discover StarupName on your own!&nbsp;</h1>
				</div>
				<div>
					Join our community and be notified as soon as the app launches!
					<div className="w-full flex flex-col gap-4">
						<div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
							<Input type="email" variant="bordered" label="Email" />
						</div>
					</div>
				</div>
			</section>
		</DefaultLayout>
	);
}
