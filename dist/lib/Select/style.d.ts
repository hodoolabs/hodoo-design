declare const LabelStyle: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const BlankStyle: (props?: ({
    direction?: "up" | "down" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const SelectedStyle: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
    placeholder?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const ArrowStyle: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const ListStyle: (props?: ({
    direction?: "up" | "down" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const ItemStyle: (props?: ({
    center?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export { ArrowStyle, BlankStyle, ItemStyle, LabelStyle, ListStyle, SelectedStyle };
