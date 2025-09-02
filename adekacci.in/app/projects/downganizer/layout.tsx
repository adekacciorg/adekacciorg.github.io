import { Project, ProjectNavLink } from "@/lib/definitions";
import SideNav from "@/ui/projects/sidenav";

export default function Layout({ children }: { children: React.ReactNode }) {
	const project: Project = {
		name: "Downganizer",
		href: "/projects/downganizer",
		logo: ""
	}

	const navLinks: ProjectNavLink[] = [
		{
			name: "Introduction",
			href: "",
			sub: [],
		}
	]

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