type BreadCrumbsType = {
	[key: string]: {
		label: string;
		bread_crumbs: {
			label: string;
			url: string;
		}[];
	};
};

export type { BreadCrumbsType };
