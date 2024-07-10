export type Challenge = {
	href: string;
	alt?: string;
	title: string;
	difficulty: 'easy' | 'intermediate' | 'advanced';
	src: string;
};
