declare const ToggleBoxStyle: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const LabelStyle: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
    disabled?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const HelperStyle: (props?: ({
    disabled?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export { ToggleBoxStyle, LabelStyle, HelperStyle };
