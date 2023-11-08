declare const ToggleStyle: (props?: ({
    size?: "lg" | "sm" | null | undefined;
    error?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const InputStyle: (props?: ({
    size?: "lg" | "sm" | null | undefined;
    error?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const SkeletonStyle: (props?: ({
    size?: "lg" | "sm" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export { ToggleStyle, InputStyle, SkeletonStyle };
