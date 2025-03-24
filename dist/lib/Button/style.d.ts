declare const ButtonStyle: (props?: ({
    color?: "black" | "blue" | "gray" | "red" | "white" | "white_line" | null | undefined;
    size?: "lg" | "md" | "sm" | "base" | null | undefined;
    iconOnly?: "lg" | "md" | "sm" | "base" | null | undefined;
    disabled?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const ImageStyle: (props?: ({
    size?: "lg" | "md" | "sm" | "base" | null | undefined;
    iconOnly?: "lg" | "md" | "sm" | "base" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export { ButtonStyle, ImageStyle };
