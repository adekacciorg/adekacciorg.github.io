import { Project, ProjectNavLink } from "@/lib/definitions";

export default function SideNav({ project, navLinks }: { project: Project, navLinks: ProjectNavLink[] }) {
	const path = `/projects/${project}`;
	return (
		<>
			<div className="h-screen w-full md:w-64 bg-gray-100 dark:bg-gray-900 p-6">
				Hello World
			</div>
		</>
	);
}