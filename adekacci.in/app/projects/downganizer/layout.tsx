'use client'
import { Project, ProjectNavLink } from "@/lib/definitions";
import { changeFavicon } from "@/lib/favicon";
import SideNav from "@/ui/projects/sidenav";
import { useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
	const project: Project = {
		name: "Downganizer",
		href: "/projects/downganizer",
		logo: "/downganizer.ico"
	}

	const navLinks: ProjectNavLink[] = [
		{
			name: "Introduction",
			href: "/projects/downganizer/introduction",
			sub: [],
		},
		{
			name: "Installation",
			href: "/projects/downganizer/installation",
			sub: [],
		},
		{
			name: "Usage",
			href: "/projects/downganizer/usage",
			sub: [],
		},
		{
			name: "Configuration",
			href: "/projects/downganizer/configuration",
			sub: [],
		},
		{
			name: "Changelog",
			href: "/projects/downganizer/changelog",
			sub: [],
		}
	]

	useEffect(() => {
		changeFavicon('../downganizer.ico');
	});

	return (
		<div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
			<div className="w-full flex-none md:w-64">
				<SideNav
					project={project}
					navLinks={navLinks}
				/>
			</div>
			<div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
		</div>
	);
}