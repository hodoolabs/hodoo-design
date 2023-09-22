declare const MenuStyle: (props?: ({
    isCurrentPath?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const LabelStyle: (props?: ({
    isCurrentPath?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const ArrowStyle: (props?: ({
    isExpanded?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const SubMenusStyle: (props?: ({
    height?: number | null | undefined;
    isExpanded?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const SubMenuStyle: (props?: ({
    isCurrentPath?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export { MenuStyle, LabelStyle, ArrowStyle, SubMenusStyle, SubMenuStyle };
