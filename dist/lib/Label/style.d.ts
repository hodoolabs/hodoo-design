declare const LabelStyle: (props?: ({
    size?: "lg" | "md" | "sm" | null | undefined;
    isError?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const MaxLengthStyle: (props?: ({
    isError?: boolean | null | undefined;
    disabled?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const RequiredStyle: (props?: ({
    disabled?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export { LabelStyle, RequiredStyle, MaxLengthStyle };
