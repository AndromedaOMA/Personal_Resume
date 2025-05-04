import {
	Link,
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/react";

import React, { useState } from "react";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";

import { Logo, LogoDesc } from "@/components/icons";

export const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	const smoothScrollTo = (target: HTMLElement) => {
		const targetTop = target.getBoundingClientRect().top + window.scrollY;
		window.scrollTo({
			top: targetTop,
			behavior: 'smooth'
		});
	};
	const handleProjectsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		const target = document.querySelector("#projects");
		smoothScrollTo(target as HTMLElement);
		setMenuOpen(false); 
	};
	const handleTeamClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		const target = document.querySelector("#contact");
		smoothScrollTo(target as HTMLElement);
		setMenuOpen(false); 
	};

	return (
		<NextUINavbar maxWidth="xl" position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						{/* <Logo />
						<LogoDesc /> */}
						{/* <p className="font-bold text-inherit">Soul Steps</p> */}
					</NextLink>
				</NavbarBrand>

				<div className="hidden mt-2 sm:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="background"
								href={item.href}
								onClick={item.label === "Projects" ? handleProjectsClick : handleTeamClick}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</div>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full mt-2" justify="end">
				<NavbarItem className="hidden sm:flex gap-2">
					{/* <Link isExternal href={siteConfig.links.twitter}>
						<TwitterIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.discord}>
						<DiscordIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github}>
						<GithubIcon className="text-default-500" />
					</Link> */}
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4 mt-2" justify="end">
				<ThemeSwitch />
				{/* <NavbarMenuToggle /> */}
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link

								// color={
								// 	index === 2
								// 		? "primary"
								// 		: index === siteConfig.navMenuItems.length - 1
								// 			? "danger"
								// 			: "foreground"
								// }
								color="foreground"
								size="lg"
								onClick={item.label === "Projects" ? handleProjectsClick : handleTeamClick}

							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
