import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import { Head } from "./head";
import { User } from "@nextui-org/react";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen">
			<Head />
			<Navbar />
			<main className="container mx-auto max-w-7xl px-6 flex-grow">
				{children}
			</main>
			<footer className="w-full flex items-center justify-center py-3 bg-gray-800 text-white">
				<Link
					isExternal
					className="flex items-center gap-1 text-current text-lg font-bold"
				>
					<span className="text-default-600 mr-2">Page designed by </span>
				</Link>

				<User
					name="Marius-Alexandru Olaru"
					description={(
						<Link href="https://www.linkedin.com/in/marius-alexandru-olaru-390599229/" size="sm" isExternal>
							LinkedIn
						</Link>
					)}
					avatarProps={{
						src: "https://avatars.githubusercontent.com/u/116078879?s=400&u=df9602879e279c70717262ff8c50e771c82616f4&v=4"
					}}
				/>
			</footer>
		</div>
	);
}
