type BreadCrumbsType = {
    [key: string]: {
        label: string;
        bread_crumbs: {
            path: string;
            label: string;
        }[];
    };
};
export type { BreadCrumbsType };
