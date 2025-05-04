export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Personal Resume",
	description: "",
	navItems: [
		{
			label: "Projects",
			href: "#projects",
		},
		{
			label: "Contact",
			href: "#contact",
		},
	],
	navMenuItems: [
		{
			label: "Projects",
			href: "#projects",
		},
		{
			label: "Contact",
			href: "#contact",
		},
	],
	links: {
		github: "/",
		twitter: "/",
		docs: "/",
		discord: "/",
	},
};
