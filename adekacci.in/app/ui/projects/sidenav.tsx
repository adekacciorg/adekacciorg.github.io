import { Project, ProjectNavLink } from "@/lib/definitions";
import Image from "next/image";

export default function SideNav({ project, navLinks }: { project: Project, navLinks: ProjectNavLink[] }) {
	// const path = `/projects/${project}`;
	return (
		<>
			<div className="h-screen w-full md:w-64 bg-gray-100 dark:bg-gray-900 p-6">
				<div className="flex justify-evenly text-center text-white p-4 rounded-lg mb-6">
					<Image
						src={project.logo}
						alt={`${project.name} logo`}
						width={40}
						height={40}
						className="mx-1 rounded-full"
					/>
					<div className="mx-1 mt-1 text-xl font-semibold">
						{project.name}
					</div>
				</div>
				<div>
					{navLinks.map((link) => (
						<a key={link.href}>{link.name}</a>
					))}
				</div>
			</div>
		</>
	);
}