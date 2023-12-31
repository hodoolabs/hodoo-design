declare const BadgeStyle: (props?: ({
    color?: "blue" | "gray" | "gray_low" | "red" | null | undefined;
    size?: "lg" | "md" | "sm" | null | undefined;
    iconOnly?: "lg" | "md" | "sm" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const LeftImageStyle: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
    iconOnly?: "lg" | "md" | "sm" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const ButtonStyle: (props?: ({
    color?: "blue" | "gray" | "gray_low" | "red" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const RightImageStyle: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export { BadgeStyle, LeftImageStyle, ButtonStyle, RightImageStyle };
