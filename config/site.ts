export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Your Startup Name",
	description: "Something",
	navItems: [
		{
			label: "About",
			href: "#about",
		},
		{
			label: "Team",
			href: "#team",
		},
	],
	navMenuItems: [
		{
			label: "About",
			href: "#about",
		},
		{
			label: "Team",
			href: "#team",
		},
	],
	links: {
		github: "/",
		twitter: "/",
		docs: "/",
		discord: "/",
	},
};
