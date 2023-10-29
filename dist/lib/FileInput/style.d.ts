declare const LabelStyle: (props?: ({
    size?: "lg" | "sm" | null | undefined;
    isError?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const ButtonStyle: (props?: ({
    size?: "lg" | "sm" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const InputLabelStyle: (props?: ({
    size?: "lg" | "sm" | null | undefined;
    type?: "placeholder" | "value" | "valueError" | "placeholderError" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const HelperStyle: (props?: ({
    size?: "lg" | "sm" | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
declare const ErrorStyle: (props?: ({
    size?: "lg" | "sm" | null | undefined;
    isError?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export { LabelStyle, ButtonStyle, InputLabelStyle, HelperStyle, ErrorStyle };
