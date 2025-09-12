import { Project, ProjectNavLink } from "@/lib/definitions";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav({ project, navLinks }: { project: Project, navLinks: ProjectNavLink[] }) {
	const pathName = usePathname();
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
						<Link
							href={link.href}
							key={link.name}
							className={clsx(
								`block px-4 py-2 mb-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800`,
								{
									'bg-gray-300 dark:bg-gray-700 font-semibold': pathName == link.href,
								},
							)}
						>
							{link.name}
						</Link>
					))}
				</div>
			</div>
		</>
	);
}