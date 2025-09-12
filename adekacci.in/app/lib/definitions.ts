

export type Project = {
	href: string;
	name: string;
	logo: string;
}

export type ProjectNavLink = {
	name: string;
	href: string;
	sub: ProjectNavLink[] | null;
}