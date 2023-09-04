declare const ButtonStyle: (props?: ({
    color?: "blue" | "gray" | "red" | "black" | "white" | "white_line" | null | undefined;
    size?: "lg" | "md" | "sm" | "base" | null | undefined;
    iconOnly?: "lg" | "md" | "sm" | "base" | null | undefined;
    isFull?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const ImageStyle: (props?: ({
    color?: "blue" | "gray" | "red" | "black" | "white" | "white_line" | null | undefined;
    size?: "lg" | "md" | "sm" | "base" | null | undefined;
    iconOnly?: "lg" | "md" | "sm" | "base" | null | undefined;
    disabled?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const LabelStyle: (props?: ({
    color?: "blue" | "gray" | "red" | "black" | "white" | "white_line" | null | undefined;
    size?: "lg" | "md" | "sm" | "base" | null | undefined;
    disabled?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export { ButtonStyle, ImageStyle, LabelStyle };