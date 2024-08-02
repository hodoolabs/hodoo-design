declare const ButtonStyle: (props?: ({
    color?: "black" | "blue" | "gray" | "red" | "white" | "white_line" | null | undefined;
    size?: "base" | "lg" | "md" | "sm" | null | undefined;
    iconOnly?: "base" | "lg" | "md" | "sm" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const ImageStyle: (props?: ({
    size?: "base" | "lg" | "md" | "sm" | null | undefined;
    iconOnly?: "base" | "lg" | "md" | "sm" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export { ButtonStyle, ImageStyle };
