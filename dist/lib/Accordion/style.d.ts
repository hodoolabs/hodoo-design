declare const MenuStyle: (props?: ({
    isCurrentPath?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const ArrowStyle: (props?: ({
    isExpanded?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const SubMenuStyle: (props?: ({
    isCurrentPath?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export { MenuStyle, ArrowStyle, SubMenuStyle };
