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
			sub: [
				{ name: "Overview", href: "#overview" },
				{ name: "Features", href: "#features" },
				{ name: "Screenshots", href: "#screenshots" },
				{ name: "Community", href: "#community" },
			],
		},
		{
			name: "Installation",
			href: "/projects/downganizer/installation",
			sub: [
				{ name: "Supported Systems", href: "#supported-systems" },
				{ name: "Package Managers", href: "#package-managers" },
				{ name: "Manual Installation", href: "#manual-installation" },
				{ name: "Verification", href: "#verification" },
				{ name: "Uninstallation", href: "#uninstallation" }
			],
		},
		{
			name: "Usage",
			href: "/projects/downganizer/usage",
			sub: [
				{ name: "Getting Started", href: "#getting-started" },
				{ name: "Common Workflows", href: "#common-workflows" },
				{ name: "Examples", href: "#examples" },
				{ name: "Best Practices", href: "#best-practices" },
			],
		},
		{
			name: "Configuration",
			href: "/projects/downganizer/configuration",
			sub: [
				{ name: "Config Files", href: "#config-files" },
				{ name: "Options", href: "#options" },
				{ name: "Interactive Mode", href: "#interactive-mode" },
				{ name: "Advanced Settings", href: "#advanced-settings" },
			],
		},
		{
			name: "Changelog",
			href: "/projects/downganizer/changelog",
			sub: [
				{ name: "v1.4.0", href: "#v1.4.0" },
				{ name: "v1.3.2", href: "#v1.3.2" },
				{ name: "v1.3.1", href: "#v1.3.1" },
				{ name: "v1.3.0", href: "#v1.3.0" },
			],
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