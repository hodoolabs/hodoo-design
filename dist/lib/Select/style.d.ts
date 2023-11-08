declare const BlankStyle: (props?: ({
    direction?: "down" | "up" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const SelectedStyle: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
    placeholder?: boolean | null | undefined;
    error?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const ArrowStyle: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const ListStyle: (props?: ({
    direction?: "down" | "up" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const ItemStyle: (props?: ({
    center?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const HelperStyle: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
    disabled?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const ErrorStyle: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
    isError?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export { ArrowStyle, BlankStyle, ErrorStyle, HelperStyle, ItemStyle, ListStyle, SelectedStyle };
