type SiteMapType = {
	[key: string]: {
		label: string;
		element: () => JSX.Element;
		bread_crumbs: {
			label: string;
			url: string;
		}[];
	};
};

type BreadCrumbsType = {
	[key: string]: {
		label: string;
		bread_crumbs: {
			label: string;
			url: string;
		}[];
	};
};

type MenuListType = {
	index: number;
	icon: string;
	activeIcon: string;
	menu: { path: string; label: string };
	subMenus: { path: string; label: string }[];
};

export type { MenuListType, BreadCrumbsType, SiteMapType };
